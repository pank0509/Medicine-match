import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './App/App-reducer';

export default combineReducers({
    routing: routerReducer,
    appReducer,
});
