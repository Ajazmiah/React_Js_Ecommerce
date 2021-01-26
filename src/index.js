import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios';
import cartProductReducer from './Store/reducers/cartProductReducer'
import orderReducer from './Store/reducers/orderReducer'
//-------------------------------------------------------------------------//
axios.interceptors.request.use(request =>{return request})
// axios.default.baseURL=''

const rootReducer = combineReducers({
  cartProductReducer:cartProductReducer,
  orderReducer:orderReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
         <BrowserRouter> <App /> </BrowserRouter>
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
