import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Store from './Store';

class StoreList extends Component {
  state = {
    stores: null,
    pagination: {
      currentPage: 1,
      storeLimit: 5
    }
  };

  handlePageOne = () => {
    this.setState({
      pagination: {
        currentPage: 1
      }
    });
  };

  handlePageTwo = () => {
    this.setState({
      pagination: {
        currentPage: 2
      }
    });
  };

  componentDidMount() {
    axios.get('https://pie.now.sh/stores').then((res) => {
      this.setState({
        stores: res.data
      });
      console.log(this.state.stores);
    });
  }

  render() {
    const { stores, pagination } = this.state;

    if (stores === null) {
      return <p>Loading stores...</p>;
    }

    const start =
      pagination.currentPage === 1 ? 0 : (pagination.currentPage - 1) * 5;
    const end = pagination.currentPage * 5;
    const visibleStores = stores.slice(start, end);

    const storeInfo = visibleStores.map((storeData) => {
      return <Store storeData={storeData} />;
    });

    return (
      <Fragment>
        <div>{storeInfo}</div>
        <button onClick={() => this.handlePageOne()}>page 1</button>
        <button onClick={() => this.handlePageTwo()}>page 2</button>
      </Fragment>
    );
  }
}
export default StoreList;
