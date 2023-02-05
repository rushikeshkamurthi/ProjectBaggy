import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import YourCart from '../screens/yourCart/YourCart';


const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="YourCart" options={{title:"Your Cart"}} component={YourCart}></Stack.Screen>

        </Stack.Navigator>
      )
    }

export default HomeNavigation;