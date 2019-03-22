import React,{Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView
}from 'react-native';
import {Icon,Avatar} from 'react-native-elements'

export default class Home extends Component{
    static navigationOptions = {
        title : 'Home'
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.accountInformation.avatar}>
                        <Avatar
                            rounded
                            source={{
                                uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                            size='medium'
                        />


                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    accountInformation:{
        
    }
});