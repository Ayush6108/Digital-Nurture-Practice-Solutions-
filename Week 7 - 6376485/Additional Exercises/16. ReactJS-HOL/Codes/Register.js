import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const { name, email, password } = this.state;

    if (name.length < 5) {
      alert("Full Name must be 5 characters long!");
      event.preventDefault();
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Email is not valid!");
      event.preventDefault();
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      event.preventDefault();
      return;
    }

    alert("Registration successful!");
    event.preventDefault();
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 style={{ color: "red" }}>Register Here!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Email:</label>{" "}
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Password:</label>{" "}
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
