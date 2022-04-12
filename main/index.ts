import { TotemApp } from './TotemApp'
import { NODE_ENV } from './environments'

const showWindow = NODE_ENV !== 'test'
const dev = NODE_ENV === 'development'

TotemApp.init({ show: showWindow, dev })
