import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Avatar} from 'react-native-elements'

export default class AccountHome extends React.Component{
    render(){
        return(
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
                    <Text style={styles.accountName}>Muhamad Fajar R</Text>
                    <Text style={styles.accountComunity}>TRACEKCEK</Text>
                </View>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    accountInformation:{
        padding:9.7,
        flex:1,
        flexDirection:'row',  
    },
    accountDescription:{
        marginLeft:10, 
    },
    accountName:{
        color:'#444444',
        fontSize:17,
        fontWeight:'bold'
    },
    accountComunity:{
        color:'#606060',
        fontSize:17,
    },
})