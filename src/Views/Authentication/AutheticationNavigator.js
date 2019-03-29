import react from 'react'
import {createStackNavigator,createAppContainer} from 'react-navigation'
import LoginScreen from '../Authentication/LoginScreen'
import SignUpScreen from '../Authentication/SignUpScreen'


const AutheticationStack = createStackNavigator({
    LoginScreen:{screen:LoginScreen},
    SignUpScreen:{screen:SignUpScreen}
},{
    defaultNavigationOptions:{
        header:null
    }
});

export default createAppContainer(AutheticationStack)