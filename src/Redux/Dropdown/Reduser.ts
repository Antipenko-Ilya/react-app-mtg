import * as types from '../Types';

type TDropdown = {
    type: string,
    data: string[]
}

export default function dropdownReduser(state = ['void'], action: TDropdown) {
    switch(action.type){
        case 'LOAD_DATA_SUCCESS':
            return action.data;
        default:
            return state;
    }
}