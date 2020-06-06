import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import modalReduser from './Redux/Modal/Reduser'

const reducer = combineReducers({ 
    modal: modalReduser
});

export const Store = createStore(reducer, applyMiddleware(thunk));