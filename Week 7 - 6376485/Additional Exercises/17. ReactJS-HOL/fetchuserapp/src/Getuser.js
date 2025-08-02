import React, { Component } from 'react';

class GetUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null, // To store the fetched user data
      loading: true, // To indicate if data is being fetched
      error: null // To handle potential errors
    };
  }

  async componentDidMount() {
    try {
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({
        person: data.results[0], // Store the first user object
        loading: false // Data has been loaded
      });
      console.log(data.results[0]); 
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({
        loading: false, // Stop loading even if there's an error
        error: error.message // Store the error message
      });
    }
  }

  render() {
    const { person, loading, error } = this.state;

    if (loading) {
      return <div>Loading user data...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!person) {
      return <div>No user data found.</div>;
    }

    // Destructure properties for easier access
    const { name, picture } = person;
    const fullName = `${name.title} ${name.first} ${name.last}`;

    return (
      <div>
        <h1>{fullName}</h1>
        <img src={picture.large} alt={fullName} />
      </div>
    );
  }
}

export default GetUser;