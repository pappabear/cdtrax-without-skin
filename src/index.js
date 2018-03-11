import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import dataService from './services/data-service'

let store = createStore(rootReducer,{}, applyMiddleware(dataService))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
