import React from "react";
import { Link } from "react-router-dom";
//import { format } from 'timeago.js';

export const Phone = ({ phone }) => {

 // console.log(phone);
  return (
    <>
    <br></br>
      <li><b>Phone name :</b> {phone.name}</li>
      <li><b>Phone price :</b> {phone.price} $</li>
      <li><b>Phone color :</b> {phone.color} </li>
      <li><b>Phone image:</b> {phone.imageUrl} </li>
      <li><b>Email:</b> {phone.email} </li>
      <li><b>Tel : </b>{phone.phoneNumber} </li>
      <li><b>Created at  :</b> {phone.createdDate } </li>
      <Link style={linkStyle} to={"/phones/edit/" + phone.id}>
        <b>Edit</b>
      </Link>
      |
      <Link style={linkStyle} to={"/phones/delete/" + phone.id}>
       <b>Delete</b> 
      </Link>
      <br />
      <hr></hr>
    </>
  );
};

const linkStyle = {
  color: "#777",
  textDecoration: "none"
};
