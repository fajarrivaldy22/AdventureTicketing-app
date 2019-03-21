import React,{Component} from 'react';
import {
    View,
    Text,
    Button
}from 'react-native';


export default class InboxScreen extends Component{
    static navigationOptions=({navigation})=>({
        title:navigation.getParam('title','defaultTitle'),
    })
    
    render(){
        return(
            <View>
                <Text>Inbox Screeen</Text>
            </View>
        )
    }
}