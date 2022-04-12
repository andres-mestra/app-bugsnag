import Bugsnag from '@bugsnag/js'

export const Layout = (): JSX.Element => {
  const handleClick = () => {
    throw new Error('Error con click')
  }

  const handleNotify = () => {
    Bugsnag.notify(new Error('Error notificado'))
  }

  return (
    <div>
      <h1>Test App Bugsnag</h1>
      <button onClick={handleClick}>error</button>
      <button onClick={handleNotify}>notificar</button>
    </div>
  )
}
