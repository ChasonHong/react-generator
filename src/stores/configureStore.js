import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers/index';
import { routerReducer,routerMiddleware } from 'react-router-redux';

export default function configureStore(history, initialState) {
  let createStoreWithMiddleware;

  // Configure the dev tools when in DEV mode
  createStoreWithMiddleware = compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const rootReducer = combineReducers(Object.assign({}, reducers, {
    routing: routerReducer,
  }))

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', ()=>store.replaceReducer(require('../reducers').default))
  }

  return store;
}
