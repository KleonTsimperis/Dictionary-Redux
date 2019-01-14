import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import mainReducer from './reducers/mainReducer';
import { loadState } from './localStorage';

const persistedState = loadState();

const logger = createLogger();
const middleware = applyMiddleware(thunkMiddleware,logger);

const rootReducer = combineReducers({mainReducer});
const store = createStore(rootReducer, persistedState, middleware);

export default store;
