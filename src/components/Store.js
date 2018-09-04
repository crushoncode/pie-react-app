import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Store extends Component {
  state = {
    pieOfTheDay: null
  };

  handleLike = (pieOfTheDay) => {
    this.props.handleLike(pieOfTheDay);
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
    const { pieOfTheDay } = this.state;
    const likeButton = (
      <button
        onClick={() => {
          this.handleLike(pieOfTheDay);
        }}
      >
        Like
      </button>
    );

    return (
      <Fragment>
        {pieOfTheDay ? (
          <Fragment>
            <h1 className="pieName">
              <b>{pieOfTheDay.displayName}</b>
            </h1>
            <h3>
              {pieOfTheDay.priceString} {'for'} {pieOfTheDay.quantity}
            </h3>
          </Fragment>
        ) : (
          <Fragment>
            <h1 className="soldOut">
              <b>Sold Out</b>
            </h1>
          </Fragment>
        )}
        <h3>{displayName}</h3>
        <h3>
          {'Quality: '}
          {rating}
          {'/10'}
        </h3>
        <h3>{address}</h3>
        <h3>{mobile}</h3>
        <h3>{likeButton}</h3>
      </Fragment>
    );
  }
}
export default Store;
