import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet,Button} from 'react-native'
import {db} from '../../Database/Database'


export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }

        processSignIn = () =>{
            db.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>this.props.action).catch(error=>alert('somthing wrong'))
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    placeholder='Email' 
                    style={styles.textInput} 
                    onChangeText={(text)=>this.setState({email:text})}
                />
                <TextInput 
                    secureTextEntry
                    placeholder='Password' 
                    style={styles.textInput}
                    onChangeText={(text)=>this.setState({password:text})}    
                />
                <Button 
                title='Login'
                onPress={()=> db.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(this.props.action).catch(error=>alert('somthing wrong'))}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ddd'
    },
    textInput:{
        //textAlign:'center',
        fontSize:15,
        width:300,
        backgroundColor:'white',
        margin:10,
        borderRadius:9
    }
})