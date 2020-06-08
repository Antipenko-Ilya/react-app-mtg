import * as types from './Types';
import axios from 'axios';

export const showModal = () => ({
    type: types.SHOW_MODAL,
});
export const loadDataSuccess = (data: any) => ({
    type: types.LOAD_DATA_SUCCESS,
    data
});
export const loadData = (name: string) => {
    return (dispatch: any) => {  
        axios
        .post(`http://localhost:3366/getFile/`, {
            nameOfFile: name,
            completed: false
        })
        .then(res => {
            dispatch(loadDataSuccess(res.data[name]));
        })
        .catch(err => {
            console.log('err', err);
        });
    }
};
// Нативный вариант запроса(теперь работает)
// export function loadData() {
//     return (dispatch: any) => {
//         fetch('http://localhost:3366/getFile', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 nameOfFile: 'file1'
//             })
//         })
//         .then(response =>  response.json())
//         .then(response => {            
//             dispatch(loadDataSuccess(response));
//         })
//         .catch((err) => console.log('err', err))
//     }
// }