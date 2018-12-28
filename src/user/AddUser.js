import React, { Component } from "react";
import "./AddUser.css";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "",
      first_name: "",
      last_name: "",
      age: "",
      gender: "",
      address: "",
      redirectToReferrer: false,
      users: []
    };

    this.addUser = this.addUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    /*axios.get("./json/userDummy.json").then(res => {
      const users = res.data;
      this.setState({ users });
    });*/
    /*fetch("././json/userDummy.json")
      .then(response => response.json())
      .then(findresponse => {
        this.setState({
          users: findresponse
        });
        console.log(this.users);
      }); */
    const fs = require("fs");

    let student = {
      name: "Mike",
      age: 23,
      gender: "Male",
      department: "English",
      car: "Honda"
    };

    let data = JSON.stringify(student);
    fs.writeFileSync("student-2.json", data);
  }
  addUser(event) {
    event.preventDefault();
    console.log(this.state);
    axios.post("./json/userDummy1.json", this.state).then(res => {
      console.log(res);
      console.log(res.data);
    });

    if (
      this.state.user_id &&
      this.state.first_name &&
      this.state.last_name &&
      this.state.age &&
      this.state.gender &&
      this.state.address
    ) {
      this.setState({
        redirectToReferrer: true
      });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="container">
        <div>
          <h1>Add User</h1>
          <label>User Id</label>
          <input
            type="text"
            name="user_id"
            placeholder="User Id"
            onChange={this.handleChange}
            required
          />{" "}
          <br />
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={this.handleChange}
            required
          />{" "}
          <br />
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={this.handleChange}
            required
          />
          <br />
          <label>Age</label>
          <input
            type="number"
            name="age"
            min="0"
            max="100"
            placeholder="age"
            onChange={this.handleChange}
            required
          />
          <br />
          <label>Gender</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="MALE" name="gender" />
            Male
            <input type="radio" value="FEMALE" name="gender" />
            Female
          </div>
          <br />
          <label>
            Address:
            <textarea
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <input
            type="submit"
            className="button"
            value="Add"
            onClick={this.addUser}
          />
        </div>
        {this.state.users.map(user => (
          <li>{user.id}</li>
        ))}
      </div>
    );
  }
}

export default AddUser;
