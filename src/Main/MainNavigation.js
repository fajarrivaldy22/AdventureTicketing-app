

import React from 'react';
import {View} from 'react-native';
import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import{ Icon } from 'react-native-elements';
import HomeScreen from '../Views/Home/Home'
import EventList from '../Views/Home/EventList'
import InboxScreen from '../Views/Inbox/inbox'


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
            
            }
        },
    },
    {
        initialRouteName:'Tab1',
        navigationOptions:{
            
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
            navigationOptions:{
                labeled:false,
                tabBarIcon:({tintColor,focused})=><Icon name='home' color={tintColor} focused={focused} size={27}/>
            }
        },
        Tab2:{
            screen:Tab2,
            navigationOptions:{
                labeled:false,
                tabBarIcon:({tintColor,focused})=><Icon name='mail' color={tintColor} focused={focused} size={27}/>
            }
        }
    },
    {
        animationEnabled:true,
        
        barStyle:{
            backgroundColor:'#7c4325'
        }
    });

export default createAppContainer(DashboardTabRoutes);