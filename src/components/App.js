import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Favourite from './Favourite';
import StoreList from './StoreList';
import './App.css';

class App extends Component {
  state = {
    savedlist: []
  };

  // some

  handleLike = (pieOfTheDay) => {
    const alreadyLikedCount = this.state.savedlist.reduce((accum, pie) => {
      if (pie.id === pieOfTheDay.id) {
        return accum + 1;
      }
      return accum;
    }, 0);

    if (alreadyLikedCount > 0) {
      return;
    }

    this.setState((prevState) => {
      const list = prevState.savedlist;
      list.push(pieOfTheDay);
      return {
        savedlist: list
      };
    });
  };

  render() {
    const { savedlist } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <StoreList handleLike={this.handleLike} />}
          />
          <Route
            path="/Favourite"
            render={() => <Favourite savedlist={savedlist} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
