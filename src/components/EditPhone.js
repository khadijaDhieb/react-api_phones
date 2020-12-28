import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Redirect } from 'react-router-dom';


export const EditPhone = ({ match }) => {

    const { phones, handleEditPhone } = useContext(GlobalContext);

    const id = +match.params.id
    const phone = phones.find(p => p.id === id)

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState("#fad345");
    const [imageUrl, setImageUrl] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const [redirect, setRedirect] = useState(false)



    const onSubmit = e => {
        e.preventDefault();

        const updatePhone = {
            name: name,
            price: +price,
            color,
            imageUrl,
            email,
            phoneNumber,
            createdDate
        };
        console.log(updatePhone, id)
        if (handleEditPhone(id, updatePhone)) {
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
                <div className="form-control">
                    <label htmlFor="color">Color : </label>
                    <input
                        type="color"
                        id="color"
                        value={color}
                        onChange={e => setColor(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-control">
                    <label htmlFor="imageUrl">Phone image : </label>
                    <input
                        type="url"
                        id="imageUrl"
                        placeholder={phone.imageUrl}
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-control">
                    <label htmlFor="email">Support email : </label>
                    <input
                        type="email"
                        id="email"
                        placeholder={phone.email}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-control">
                    <label htmlFor="phoneNumber">Support number : </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        placeholder={phone.phoneNumber}
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-control">
                    <label htmlFor="createdDate">Created at : </label>
                    <input
                        type="date"
                        id="createdDate"
                        value={createdDate}
                        onChange={e => setCreatedDate(e.target.value)}
                    />
                </div>
                <br />
                <button className="btn">Submit</button>
            </form>

            {redirect && <Redirect to="/phones" />}
        </>
    )
}
