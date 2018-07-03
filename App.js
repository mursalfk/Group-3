import React from 'react';
import Main from './Components/Screens/Main';
import signup from './Components/Screens/signup';
import {createStackNavigator,} from 'react-navigation';
import user from './Components/Screens/userend';

const MyStack = createStackNavigator({
  Login : {
    screen: Main,
    navigationOptions:{
      header: null,
    }
  },
  Register : {
    screen: signup,
    navigationOptions:{
      header: null,
    }
  },
  User: {
    screen:user,
    navigationOptions:{
      header:null,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <MyStack/>
    );
  }
}
