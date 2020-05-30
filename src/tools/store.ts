import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index'


const store = createStore(reducers, {todos:[]}, applyMiddleware(thunk));

export default store;