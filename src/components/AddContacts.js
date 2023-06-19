import React, { Component } from "react";
// import {Redirect} from "react-router-dom";
import ContactList from "./ContactList";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      ContactList: [],
    };
  }

  add = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addContact({name:this.state.name,email:this.state.email})
    this.setState({ name: "", email: "" });
    console.log(this.props)
    
  };

  render() {
    return (
      <section>
        <div style={{ paddingTop: "80px" }}>
          <div className="ui main">
            <form className="ui form"  onSubmit={this.add}>
              AddContact
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={(e) =>
                    this.setState({...this.state, name: e.target.value })
                  }
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your name"
                  value={this.state.email}
                  onChange={(e) =>
                    this.setState({ ...this.state, email: e.target.value })
                  }
                />
              </div>
              <button className="ui button blue">
                Add
              </button>
            </form>
          </div>
        </div>
        
      </section>
    );
  }
}

export default AddContact;
