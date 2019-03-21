import React,{Component} from 'react';
import {
    View,
    Text
} from 'react-native'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer, getActiveChildNavigationOptions} from 'react-navigation'
import HomeIndex from '../../Views/Home/Index'
import InboxScreen from '../../Views/Inbox/inbox';

const btmNavigator =  createMaterialBottomTabNavigator({
    Home:{
        screen:HomeIndex,
    },
    Inbox:{
        screen:InboxScreen
    }
},{
    activeTintColor:'#f0edf6',
    inactiveTintColor:'#3e2465',
    animationEnabled:true,
    barStyle: { backgroundColor: '#694fad' },
});



export default createAppContainer(btmNavigator);