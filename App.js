/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View} from 'react-native';
import MainNavigation from './src/Main/MainNavigation'
import WelcomeScreen from './src/Views/WelcomeScreen';

export default class App extends Component {
  render() {
    return (
        <Loading/>
    );
  }
}

class Loading extends Component{
  constructor(props){
    super(props);
      this.state={
        initialLoading:true
      };
      setTimeout(()=>(
        this.setState(previouseState=>(
          {initialLoading:!previouseState.initialLoading}
        ))
      ),300)
  }
  render() {
    if(this.state.initialLoading){
      return <WelcomeScreen/>
    }else{
      return <MainNavigation/>
    }
  }
}

