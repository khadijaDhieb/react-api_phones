import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Redirect } from 'react-router-dom';


export const EditPhone = ({ match }) => {

    const { phones , handleEditPhone } = useContext(GlobalContext);

    const id = +match.params.id
    const phone = phones.find(p => p.id === id)

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [redirect, setRedirect] = useState(false)



    const onSubmit = e => {
        e.preventDefault();

        const updatePhone = {
            name: name,
            price: +price
          };
    
        if (handleEditPhone(id , updatePhone)) {
            setRedirect(true);
        }
    };



    return (
        <>
            <h3>Edit Phone</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder={phone.name}
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <br />
                <div className="form-control">
                    <label htmlFor="price">Price  </label >
                    <input type="number" id="price" placeholder={phone.price}
                        value={price} onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                </div>
                <br />
                <button className="btn">Submit</button>
            </form>

            {redirect && <Redirect to="/phones" /> }
        </>
    )
}
