import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import Home from '../../view/Home/Home';
import NotNetwork from '../../view/utils/NotNetwork/NotNetwork';
import AlbumController from '../../viewController/detail/AlbumController';
import ArtistController from '../../viewController/detail/ArtistController';
import TrackController from '../../viewController/detail/TrackController';
import ShowAllController from '../../viewController/ShowAll/ShowAllController';

const Stack = createStackNavigator();

export default function Provider() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Artist" component={ArtistController} options={{ title: "Artista" }} />
                <Stack.Screen name="Track" component={TrackController} options={{ title: "Cancion" }} />
                <Stack.Screen name="Album" component={AlbumController} options={{ title: "Album" }} />
                <Stack.Screen name="ShowAll" component={ShowAllController} options={{ title: "Ver todo" }} />
                <Stack.Screen name="NotNetwork" component={NotNetwork} options={{ title: "Sin internet" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
