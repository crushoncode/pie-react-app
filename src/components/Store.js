import React from 'react';
// import axios from 'axios';

class Store extends React.Component {
  render() {
    const { displayName, address, mobile, rating } = this.props.storeData;
    return (
      <React.Fragment>
        <h2>{displayName}</h2>
        <p>{address}</p>
        <p>{mobile}</p>
        <p>{rating}</p>
      </React.Fragment>
    );
  }
}

export default Store;
