import React from 'react';
import axios from 'axios';
// import Store from './Store';

class StoreList extends React.Component {
  state = {
    stores: null
  };

  componentDidMount() {
    axios.get('https://pie.now.sh/stores').then((res) => {
      this.setState({
        stores: res.data
      });
      console.log(res);
    });
  }
  render() {
    const stores = this.state.stores;
    if (stores === null) {
      return <p>Loading stores...</p>;
    }
    return <store />;
  }
}
export default StoreList;
