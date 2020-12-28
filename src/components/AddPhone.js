import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';
import { Redirect } from "react-router-dom";

export const AddPhone = ({ addPhone }) => {

  const { handleAddPhone } = useContext(GlobalContext);


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("#fad345");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phonePerformance, setPhonePerformance] = useState(0);
  const [createdDate, setCreatedDate] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    const newPhone = {
      name,
      price: +price,
      color,
      imageUrl,
      email,
      phoneNumber,
      phonePerformance,
      createdDate
    };
    console.log(newPhone);
    // if (handleAddPhone(newPhone)) {
    //   setRedirect(true);
    // }
  };

  return (
    <>
      {redirect && <Redirect to="/phones" />}
      <h3>Add a new Phone</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name : </label>
          <input
            type="text"
            id="text"
            placeholder="add a name..."
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="price">Price : </label>
          <input
            type="number"
            id="price"
            min="400"
            step="50"
            placeholder="add a price..."
            value={price}
            onChange={e => setPrice(e.target.value)}
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
            placeholder="add an image url..."
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="phonePerformance">Phone Performance : </label>
          <input
            type="range"
            id="phonePerformance"
            value={phonePerformance}
            onChange={e => setPhonePerformance(e.target.value)}
          />
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="email">Support email : </label>
          <input
            type="email"
            id="email"
            placeholder="add an email..."
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
            placeholder="add an phone number..."
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
        <button className="btn">Add phone</button>
      </form>
    </>
  );
};
