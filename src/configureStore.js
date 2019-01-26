import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from './enhancer'
import { createLogger } from 'redux-logger';
import mainReducer from './reducers/mainReducer.js';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose(...enhancers)

  const rootReducer = combineReducers({mainReducer});

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/mainReducer', () => store.replaceReducer(mainReducer))
  }

  return store
}