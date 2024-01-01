import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { CreateItemScreen } from "../screens/CreateItemScreen";

const Stack = createNativeStackNavigator();

export function AppStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CreateItem" 
            component={CreateItemScreen}
            options={{ title: 'Adicionar Item' }} />
        </Stack.Navigator>
    )
}