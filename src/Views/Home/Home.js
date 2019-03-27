import React,{Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView
}from 'react-native';
import {db} from '../../Database/Database'
import {Icon,Avatar,Badge,Divider} from 'react-native-elements'
import AccountHome from './Component/AccountHome'

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:0,
            logedIn:false
        }
    }
    static navigationOptions = {
        title : 'Home'
    }

    sendTodDatabase = () => {
        db.ref('Users/').push({
            id:this.state.id,
            name:'fajar'
        }).then(
            alert('sent'),
            this.setState({
                id:this.state.id++
            })
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <AccountHome/>
                    <Divider style={styles.divider}/>
                    <View style={styles.containerProduct}>
                            <Icon name='add-circle' color='orange' size={57} onPress={()=>alert('pressed')}/>
                            <Icon name='add-circle' color='orange' size={57}/>
                            <Icon name='add-circle' color='orange' size={57}/>
                            <Icon name='add-circle' color='orange' size={57}/>
                            <Icon name='add-circle' color='orange' size={57}/>
                            <Button title='send' onPress={this.sendTodDatabase}/>
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
    containerProduct:{
        padding:7,
        flexDirection:'row',
        justifyContent:'center'
    }
});

/**<View style={styles.accountInformation}>
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
                    </View> */