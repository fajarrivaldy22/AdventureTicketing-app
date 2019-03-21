import React,{Component} from 'react';
import {
    View,
    Text,
    Button
}from 'react-native';

export default class Home extends Component{
    static navigationOptions = {
        title : 'Home'
    }
    render(){
        return(
            <View>
                <Button raised onPress={() => this.props.navigation.navigate("Tab1Details")} title='bismilah'/>
            
            </View>
        )
    }
    //<Button title='go' onPress={this.props.navigation.navigate('EventList')}/>
}