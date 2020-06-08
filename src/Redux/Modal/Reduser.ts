import * as types from '../Types';

type TModal = {
    type: string
}

export default function modalReduser(state = false, action: TModal) {    
    switch(action.type){
        case 'SHOW_MODAL':
             return !state;
        default:
            return state;
    }
}