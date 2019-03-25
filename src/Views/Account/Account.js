import React,{Component} from 'react';
import {
    View,
    Text
}from 'react-native';

export default class AccountScreen extends Component{
    static navigationOptions = {
        title:'Account',
    };
    render(){
        return(
            <View>
                <Text>AccountScreen</Text>
            </View>
        )
    }
}