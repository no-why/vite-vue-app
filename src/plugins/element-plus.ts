import { App } from 'vue'
import { ElButton } from 'element-plus'

export default function setup(app: App) {
  app.component(ElButton.name, ElButton)
}
