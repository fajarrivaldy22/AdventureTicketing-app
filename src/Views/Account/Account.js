import React,{Component} from 'react';
import {
    View,
    Text
}from 'react-native';

export default class EventList extends Component{
    static navigationOptions = {
        title:'Account',
    };
    render(){
        return(
            <View>
                <Text>EventList</Text>
            </View>
        )
    }
}