import path from 'path'
import { UPDATESERVER, SAFE_LINKS } from './environments'
import { App } from './models/App'

const propsWindow = {
  height: 700,
  width: 1366,
  security: [SAFE_LINKS],
  preload: path.join(__dirname, 'preload.js'),
  updateUrl: UPDATESERVER,
}

export const TotemApp = new App({ ...propsWindow })
