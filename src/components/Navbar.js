import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    navbarLinks: []
  };

  navbarLinks = () => {
    return (
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/Favourite"> My Favourite </Link>
        </li>
      </ul>
    );
  };
  render() {
    return <nav>{this.navbarLinks()}</nav>;
  }
}

export default Navbar;
