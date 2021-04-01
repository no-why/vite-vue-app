import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import { importStylus } from './plugins/vite-stylus-global-import-plugin'

function pathResolve (dir: string) {
  return path.resolve(__dirname, '.', dir)
}

// 全局样式定义
const globalStyle: Array<string> = [
  'src/assets/styles/vars.styl',
  'src/assets/styles/sass.scss',
  'src/assets/styles/less.less'
]

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    require('autoprefixer'),
    vitePluginImp({
      libList: [
        {
          libName: 'element-plus',
          style: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          }
        }
      ]
    }),
    importStylus(`@import "${pathResolve(globalStyle[0])}";`)
  ],
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  css: {
    preprocessorOptions: {
      // stylus: {
      //   globals: {
      //     '$color-orange': 'blue',
      //   },
      //   additionalData: '$color-orange = blue;',
      // },
      scss: {
        additionalData: `@import "${pathResolve(globalStyle[1])}";`
      },
      less: {
        additionalData: `@import "${pathResolve(globalStyle[2])}";`
      }
    }
  }
})
