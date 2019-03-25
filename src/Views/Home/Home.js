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
                    <View style={styles.accountInformation}>
                        <Avatar
                            rounded
                            source={{
                                uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                            size='medium'
                        />
                        <View style={styles.accountDescription}>
                            <Text style={styles.accountName}>adelya</Text>
                            <Text>cantik</Text>
                        </View>
                        <View style={styles.divider}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    accountInformation:{
        padding:5,
        flex:1,
        flexDirection:'row',
        backgroundColor:'#ddd'
    },
    accountDescription:{
        marginLeft:10,
        backgroundColor:'white'
    },
    accountName:{
        fontSize:17,
    },
    divider:{
        height:1,
        backgroundColor:'#ddd'
    }
});