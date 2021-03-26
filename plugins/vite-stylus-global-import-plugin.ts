import { resolve } from 'path';
import type {Plugin} from 'vite'

export function importStylus(pathToStylFile): Plugin {
  return {
    name: 'vite-stylus-global-import-plugin',
    async transform(code,id) {
      if(/.stylus/.test(id)) {
        return {
          code: `
            ${pathToStylFile}
            ${code}
          `,
          map: null
        }
      }
      return null    
    }
  }
}