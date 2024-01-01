import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthScreen } from "../screens/AuthScreen";

const Stack = createNativeStackNavigator();

export function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={AuthScreen} />
        </Stack.Navigator>
    )
}