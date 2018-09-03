import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Store from './Store';
import Pagination from './Pagination';

class StoreList extends Component {
  state = {
    stores: null,
    pagination: {
      currentPage: 1,
      storeLimit: 5
    }
  };

  changePage = (page) => {
    this.setState((prevState) => ({
      pagination: {
        currentPage: page,
        storeLimit: prevState.pagination.storeLimit
      }
    }));
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

    // 'Loading' if no stores
    if (stores === null) {
      return <p>Loading stores...</p>;
    }

    // Pagination calculator
    const endIndex = pagination.currentPage * pagination.storeLimit;
    const startIndex = endIndex - pagination.storeLimit + 1;

    // Filter the stores - get stores between startIndex and endIndex
    const filteredStores = stores.filter((store) => {
      return store.id >= startIndex && store.id <= endIndex;
    });
    // Render the filtered stores
    const storeInfo = filteredStores.map((storeData) => {
      return <Store key={storeData.id} storeData={storeData} />;
    });

    return (
      <Fragment>
        {storeInfo}
        <Pagination
          pagination={pagination}
          storeLength={stores.length}
          changePage={this.changePage}
        />
      </Fragment>
    );
  }
}
export default StoreList;
