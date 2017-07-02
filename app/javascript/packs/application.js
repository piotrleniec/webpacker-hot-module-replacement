import 'react-hot-loader/patch'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Counter)

if (module.hot) {
  module.hot.accept('./components/Counter', () => {
    const NextCounter = require('./components/Counter').default

    render(NextCounter)
  })
}
