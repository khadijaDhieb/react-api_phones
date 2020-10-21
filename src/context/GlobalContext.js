import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import {getPhones , addPhone , editPhone , deletePhone} from '../actions/phoneActions';
import PhonesApiService from '../services/PhonesApiService'


const initialState = {
    phones: [],
}
export const GlobalContext = createContext(initialState);

// Provider component 
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);


    //----- deplacer sur PhonesList
    // useEffect(() => {
    //     PhonesApiService.getAll()
    //         .then(res => {
    //             dispatch(getPhones(res.data))
    //         })
    //         .catch(e => console.log(e));
    
    // }, []
    // );
    

    async function handleAddPhone(newPhone) {
      let result= await PhonesApiService.create(newPhone)
            .then(res => {
                console.log(res.data.phone);
                dispatch(addPhone(res.data.phone));
                return true;
            })
            .catch(e => {
                console.log(e);
                return false 
            });
          
        return result;
    }

    async function handleEditPhone(id, updatePhone) {

      let result= await PhonesApiService.update(id , updatePhone)
            .then(res => {
                console.log(res.data);
                dispatch(editPhone(res.data.phone))
                return true ; 
            })
            .catch(e => {
                console.log(e);
                return false ;
            });

        return result;
    }

    async function handleDeletePhone(id) {

       let result = await PhonesApiService.delete(id)
            .then(res => {
                console.log(res.data);
                dispatch(deletePhone(id))
                return true;
            })
            .catch(e => {
                console.log(e);
                return false;
            });
        return result;
    }

    return (<GlobalContext.Provider value={
        {
            phones: state.phones,
            handleAddPhone,
            handleEditPhone,
            handleDeletePhone,
            dispatch // pour pouvoir utiliser dispatch sur PhonesList et faire la getphones
            
        }
    }>

        {children}
    </GlobalContext.Provider>)
}