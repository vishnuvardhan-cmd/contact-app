import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  const DataSet = props.updateList.map((item) => (
    <ContactCard id={item.id} name={item.name} email={item.email} deleteContact={props.deleteContact} />
  ));
  return (
    <div className="ui main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="ui button blue right">Add</button>
      </Link>
      <div className="ui celled list">{DataSet}</div>
    </div>
  );
};

export default ContactList;
