import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import GeoController from '../../viewController/tabs/GeoController';
import SearchController from '../../viewController/tabs/SearchController';
import TopController from '../../viewController/tabs/TopController';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Geo" component={GeoController}
                options={{
                    tabBarLabel: 'Cerca de ti!',
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="location-pin" color={tintColor} size={25} />
                    )
                }} />
            <Tab.Screen name="Top" component={TopController} options={{
                tabBarLabel: 'Top mundial',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="fire" color={tintColor} size={25} />
                )
            }} />
            <Tab.Screen name="Search" component={SearchController}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="search" color={tintColor} size={25} />
                    )
                }} />
        </Tab.Navigator>
    );
}

export default Home;