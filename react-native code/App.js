import React, { Component } from "react";

// For navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

// import components

import Test from './src/components/test_comp';




// import container

import Login from './src/containers/login_cont';

import Dashboard from './src/containers/dashboard_cont';
import Asset from './src/containers/asset_cont';

// import store
import { combineReducers, createStore, applyMiddleware } from "redux";

// import reducers
import ReducerTest from "./src/reducers/reducer_test";

// import provider
import { Provider } from "react-redux";

// import middleware
import thunk from "redux-thunk";

const allReducers = combineReducers({
  test: ReducerTest,

});

const store = createStore(
  allReducers,
  {
    test: {
      preloader: false,
      data: []
    },


  },
  applyMiddleware(thunk)
);

const RootStack = createStackNavigator(
  {
    Test: {
      screen: Test
    },
    Login: {
      screen: Login
    },
    Dashboard: {
      screen: Dashboard
    },
    Asset: {
      screen: Asset
    },



  },
  {
    initialRouteName: "Asset",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;