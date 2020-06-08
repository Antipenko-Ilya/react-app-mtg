import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import modalReduser from './Redux/Modal/Reduser'
import dropdownReduser from './Redux/Dropdown/Reduser'

export type RootStore = {
    showModal: boolean,
    dropdonw: string[],
    loadData: (name: string) => void,
    toggleModal: () => boolean
}

const reducer = combineReducers({ 
    showModal: modalReduser,
    dropdonw: dropdownReduser
});

export const Store = createStore(reducer, applyMiddleware(thunk));