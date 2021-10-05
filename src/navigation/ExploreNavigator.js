import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import HomeScreen from "../screens/HomeScreen";

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
        component={SearchResultsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default ExploreNavigator;
