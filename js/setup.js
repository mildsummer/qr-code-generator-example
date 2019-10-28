import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "./screens/Main";
import Result from "./screens/Result";

const AppContainer = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        header: null
      }
    },
    Result: {
      screen: Result,
      navigationOptions: {
        header: null
      }
    }
  })
);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
