import React, { useState , useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Redirect } from 'react-router-dom';




export const DeletePhone = ({ match }) => {

    const { handleDeletePhone } = useContext(GlobalContext);
    
    const [redirect, setRedirect] = useState(false);

   const id = +match.params.id;

    function handleRedirect () {
        setRedirect(true);
    }

    return (
        <>
            <h3>Delete Phone</h3>
            <p>This delete is irreversible. Do you want to continue ?</p>
            <button onClick={() => {
               handleDeletePhone(id);
               handleRedirect();
            }} className="delete-btn"> Submit Delete </button>

            {redirect && <Redirect to="/phones" /> }
        </>
    )
}
