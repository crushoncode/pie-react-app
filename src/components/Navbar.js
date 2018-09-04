import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    navbarLinks: []
  };

  navbarLinks = () => {
    return (
      <Fragment>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Favourite"> My Favourite </Link>
          </li>
        </ul>
      </Fragment>
    );
  };
  render() {
    return <nav>{this.navbarLinks()}</nav>;
  }
}

export default Navbar;
