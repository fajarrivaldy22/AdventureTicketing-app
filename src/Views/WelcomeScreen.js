import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
}from 'react-native';

export default class WelcomeScreen extends Component{
    
    render(){
        return(
            <View style = {styles.container}>
                <Text style={styles.welcomeText}>Welcome Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'brown'
    },
    welcomeText:{
        fontSize:25,
        color:'#fff'
    }
});