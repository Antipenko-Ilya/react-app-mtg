import * as types from '../Types';

export default function modalReduser(state = {showModal: false}, action: any) {
    console.log(action);
    
    switch(action.type){
        case 'SHOW_MODAL':
             return !state.showModal;
        default:
            return state;
    }
}