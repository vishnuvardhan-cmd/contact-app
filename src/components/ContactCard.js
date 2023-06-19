import React from "react";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
  const { id, name, email, deleteContact } = props;
  return (
    <div className="item" key={id}>
      <div className="content">
        <Link to={{ pathname:`/contact/${id}`,state:{contact:props}}}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ marginTop: "10px", color: "red", cursor: "pointer" }}
        onClick={() => deleteContact(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
