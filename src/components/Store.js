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
            <h3 className="pieName">
              <b>{pieOfTheDay.displayName}</b>
            </h3>
            <p>
              {pieOfTheDay.priceString} {'for'} {pieOfTheDay.quantity}
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <h3 className="soldOut">
              <b>Sold Out</b>
            </h3>
          </Fragment>
        )}
        <p>{displayName}</p>
        <p>
          {'Quality: '}
          {rating}
          {'/10'}
        </p>
        <p>{address}</p>
        <p>{mobile}</p>
        <p>{likeButton}</p>
      </Fragment>
    );
  }
}
export default Store;
