import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

import App from './views/App'
import registerServiceWorker from './registerServiceWorker'
import 'typeface-roboto'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'))

  registerServiceWorker()
