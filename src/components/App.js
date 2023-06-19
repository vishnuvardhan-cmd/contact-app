import "./App.css";
import Header from "./Header";
import AddContact from "./AddContacts";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import api from "../api/contacts";
// import {uuid} from 'uuidv4';
import { useEffect, useState } from "react";
function App() {
  const [contacts, setContacts] = useState([]);
  const [id, setId] = useState();
  let count = 1;

  const retriveContacts=async ()=>{
    const response= await api.get("/contacts");
    return response.data;
  }
  useEffect(() => {
    // const retriveitems = JSON.parse(localStorage.getItem("contactList"));
    // const retriveId = localStorage.getItem("id");

    // if (retriveitems && retriveId) {
    //   setContacts(retriveitems);
    //   setId(retriveId);
    // }
    const getallContacts=async ()=>{
      const allcontacts=await retriveContacts();
      if(allcontacts) setContacts(allcontacts)

    }
    getallContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contacts));
    localStorage.setItem("id", count);
  }, [contacts, id]);

  const addContact = (e) => {
    setContacts([...contacts, { id: id, ...e }], function () {});
    setId(count++);
  };

  const deleteContact = (e) => {
    const val = e;
    const newData = contacts.filter((data) => data.id !== e);
    setContacts(newData);
  };
  return (
    <div className="ui container">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                updateList={contacts}
                deleteContact={deleteContact}
              />
            }
            exact
          />
          <Route
            path="/add"
            element={<AddContact addContact={addContact} />}
            exact
          />
          <Route
          path={`/contact/:id`}
          element={<ContactDetails />}
          exact
        />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// {
//   name: "Vishnu",
//   email: "bvishnu123vardhan@gmail.com",
// },
// {
//   name: "ravi",
//   email: "ravi@gmail.com",
// },
