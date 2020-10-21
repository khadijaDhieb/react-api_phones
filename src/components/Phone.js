import React from "react";
import { Link } from "react-router-dom";

export const Phone = ({ phone }) => {
  return (
    <>
      <li>Phone name : {phone.name}</li>
      <li>Phone price : {phone.price} $</li>
      <Link style={linkStyle} to={"/phones/edit/" + phone.id}>
        Edit
      </Link>
      |
      <Link style={linkStyle} to={"/phones/delete/" + phone.id}>
        Delete
      </Link>
      <br />
    </>
  );
};

const linkStyle = {
  color: "#777",
  textDecoration: "none"
};
