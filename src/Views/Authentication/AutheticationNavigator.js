import React from 'react'
import {createStackNavigator,createAppContainer} from 'react-navigation'
import LoginScreen from '../Authentication/LoginScreen'
import SignUpScreen from '../Authentication/SignUpScreen'


const AutheticationStack = createStackNavigator({
    LoginScreen:{
        screen:props=><LoginScreen actio={props.action}/>
    },
    SignUpScreen:{screen:SignUpScreen}
},{
    defaultNavigationOptions:{
        header:null
    }
});

export default createAppContainer(AutheticationStack)