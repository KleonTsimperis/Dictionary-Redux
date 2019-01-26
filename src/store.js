// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import mainReducer from './reducers/mainReducer';
// import monitorReducerEnhancer from './enhancer';
import configureStore from './configureStore';
import { loadState } from './localStorage';

const persistedState = loadState();

// const logger = createLogger();
// const middleware = applyMiddleware(thunkMiddleware,logger);
// const rootReducer = combineReducers({mainReducer});
// const store = createStore(rootReducer, persistedState, compose(middleware,
//     //   window.devToolsExtension ? window.devToolsExtension() : f => f,
//       monitorReducerEnhancer
//     ));

const store = configureStore(persistedState);

export default store;


