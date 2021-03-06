import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware  } from 'redux';
import rootReducer from '../reducers/';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer);
export default store;