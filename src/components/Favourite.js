import React, { Component } from 'react';

class Favourite extends Component {
  render() {
    if (!this.props.savedlist) return 'no saved items';

    const { savedlist } = this.props;

    const savedItems = savedlist.map((item) => {
      return (
        <div className="savedItems">
          <h2 className="pieName">
            <b>{item.displayName}</b>
          </h2>
          <h3>
            {item.priceString}
            {' for '}
            {item.quantity}
          </h3>
          <h3>I love this deal!</h3>
        </div>
      );
    });

    return <div>{savedItems}</div>;
  }
}

export default Favourite;
