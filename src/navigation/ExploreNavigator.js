import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchResultsTabNavigator from "./SearchResultsTabNavigator";

const Stack = createNativeStackNavigator();

function ExploreNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"Search Results"}
        component={SearchResultsTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default ExploreNavigator;
