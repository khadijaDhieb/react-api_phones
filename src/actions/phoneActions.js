export const GET_PHONES = 'GET_PHONES';
export const ADD_PHONE = 'ADD_PHONE';
export const EDIT_PHONE = 'EDIT_PHONE';
export const DELETE_PHONE = 'DELETE_PHONE';


export function getPhones(data) {
    return {
         type: 'GET_PHONES', 
         payload: data 
        }
}

export function addPhone(data) {
    return {
        type: 'ADD_PHONE',
        payload: data
    }
}

export function editPhone(data) {
    return {
        type: 'EDIT_PHONE',
        payload: data
    }
}

export function deletePhone(data) {
    return {
        type: 'DELETE_PHONE',
        payload: data
    }
}