/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View} from 'react-native';
import MainNavigation from './MainNavigation'
import WelcomeScreen from '../Views/WelcomeScreen';
import LoginScreen from './../Views/Authentication/LoginScreen'

export default class Main extends Component {
    render() {
        return (
            <Loading/>
        );
    }
}

class Loading extends Component{
    constructor(props){
        super(props);
        this.LoggedInRequest = this.LoggedInRequest.bind(this);
        this.state={
            initialLoading:true,
            LoggedIn:false
        };
        setTimeout(()=>(
            this.setState(previouseState=>(
                {initialLoading:!previouseState.initialLoading}
            ))
        ),300);
    }

    LoggedInRequest(){
        this.setState({
            LoggedIn:!this.state.LoggedIn
        })
    }

    render() {
        if(this.state.initialLoading){
            return <WelcomeScreen/>
        }else{
            if(this.state.LoggedIn){
                return <MainNavigation/>
            }else{
                return <LoginScreen action={this.LoggedInRequest}/>
            }
        }
    }
}

