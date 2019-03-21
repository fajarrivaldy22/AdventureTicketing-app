

import React from 'react';
import {View} from 'react-native';
import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import{ Icon } from 'react-native-elements';
import CustomHeader from '../Component/CustomHeader';
import HeaderStyles from '../../HeaderStyles'
import HomeScreen from '../Views/Home/Home'
import EventList from '../Views/Home/EventList'
import InboxScreen from '../Views/Inbox/inbox'
import WelcomeScreen from '.././Views/WelcomeScreen'


let headerDefaultNavigationConfig = {
    header: props => <CustomHeader {...props}/>,
    HeaderStyles
};

const Tab1 = createStackNavigator(
    {
        Tab1:{
            screen:HomeScreen,
            navigationOptions:{
                headerLeft:null,
                headerTitle:'Home'
            }
        },
        Tab1Details:{
            screen:EventList,
            navigationOptions:{
                headerTitle:'Eventlist'
            }
        },
    },
    {
        initialRouteName:'Tab1',
        navigationOptions:{
            ...headerDefaultNavigationConfig
        }
    }
);

const Tab2 = createStackNavigator(
    {
        Tab2:{
            screen:InboxScreen,
            navigationOptions:{
                headerLeft:null,
                headerTitle:'Inbox'
            }
            
        }
    }
);

Tab1.navigationOptions = ({navigation})=>{
    let tabBarVisible = true;
    if(navigation.state.index>0){
        tabBarVisible = false;
    }
    return{
        tabBarVisible,
    }
}



const DashboardTabRoutes = createMaterialBottomTabNavigator(
    {
        Tab1:{
            screen:Tab1,
        },
        Tab2:Tab2
    },
    {
        animationEnabled:true
        
    });

export default createAppContainer(DashboardTabRoutes);