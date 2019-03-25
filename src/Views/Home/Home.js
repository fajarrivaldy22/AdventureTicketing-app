import React,{Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView
}from 'react-native';
import {Icon,Avatar,Badge,Divider} from 'react-native-elements'


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
                            <Text style={styles.accountName}>Muhamad Fajar R</Text>
                            <Text style={styles.accountComunity}>TRACEKCEK</Text>
                        </View>  
                    </View>
                    <Divider style={styles.divider}/>
                    <View>

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
    divider:{
        height:1.3,
        backgroundColor:'#ddd'
    },
    listTicketProduct:{

    }
});