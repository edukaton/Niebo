import 'babel-polyfill'
import Preact from 'preact'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import reducer from './reducer'
import rootSaga from './sagas'

import App from './views/App'
import { BrowserRouter } from 'react-router-dom'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware,
    logger,
  ),
)

sagaMiddleware.run(rootSaga)

Preact.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'))
