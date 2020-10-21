import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';
import { Redirect} from "react-router-dom";

export const AddPhone = ({ addPhone }) => {

  const { handleAddPhone } = useContext(GlobalContext);


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    const newPhone = {
      name,
      price: +price
    };
 
    if (handleAddPhone(newPhone)) { 
        setRedirect(true);
    }
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
            placeholder="add a price..."
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <br />
        <button className="btn">Add phone</button>
      </form>
    </>
  );
};
