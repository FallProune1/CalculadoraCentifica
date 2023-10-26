import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalculadoraNormal from './screens/CalculadoraNormal';
import CalculadoraCientifica from './screens/CalculadoraCientífica';
import CalculadoraBinaria from './screens/CalculadoraBinaria';
import Change from './screens/Change';

const Stack = createNativeStackNavigator();


export default function MyNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name = 'CalculadoraNormal' component={CalculadoraNormal} options={{headerShown:false}}/>
            <Stack.Screen name = 'CalculadoraCientifica' component={CalculadoraCientifica} options={{headerShown:false}}/>
            <Stack.Screen name = 'Change' component={Change} options={{headerShown:false}}/>
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}