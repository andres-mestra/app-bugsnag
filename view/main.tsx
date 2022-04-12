import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Layout } from './Layout'
import { isDEV } from './environments'

Bugsnag.start({
  apiKey: 'a102b5858192ed8b294e39162c2eb634',
  appVersion: '1.0.0',
  plugins: [new BugsnagPluginReact()],
})

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)

const ErrorView = () => {
  return (
    <div>
      <p>Ocurrio un error y bugsnag lo identifico</p>
    </div>
  )
}

function App() {
  if (isDEV) return <Layout />

  return (
    <ErrorBoundary FallbackComponent={ErrorView}>
      <Layout />
    </ErrorBoundary>
  )
}

function render() {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
