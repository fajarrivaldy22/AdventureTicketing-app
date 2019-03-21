import {createAppContainer,createStackNavigator} from 'react-navigation'
import EventList from './EventList';
import HomeScreen from './Home';

const HomeIdx = createStackNavigator({
    Home:HomeScreen,
    EventList:EventList
},{
    animationEnabled:true,
    headerMode:'screen',
});

export default HomeIndex = createAppContainer(HomeIdx)