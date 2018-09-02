import React, { Component } from 'react';
import axios from 'axios';

class Store extends Component {
  state = {
    pieOfTheDay: null
  };
  componentDidMount() {
    axios
      .get(`https://pie.now.sh/stores/${this.props.storeData.id}/pies`)
      .then((json) => {
        const [pieOfTheDay] = json.data.filter((pie) => {
          return pie.isPieOfTheDay ? true : false;
        });
        this.setState({
          pieOfTheDay: pieOfTheDay
        });
      });
  }

  render() {
    const { displayName, address, mobile, rating } = this.props.storeData;
    const pieOfTheDay = this.state.pieOfTheDay;
    console.log(pieOfTheDay);

    return (
      <React.Fragment>
        <p>{displayName}</p>
        <p>{address}</p>
        <p>{mobile}</p>
        <p>{rating}</p>
        {pieOfTheDay ? (
          <React.Fragment>
            <p>{pieOfTheDay.displayName}</p>
            <p>{pieOfTheDay.quantity}</p>
            <p>{pieOfTheDay.priceString}</p>
          </React.Fragment>
        ) : (
          <p>No pie of the day</p>
        )}
      </React.Fragment>
    );
  }
}
export default Store;
