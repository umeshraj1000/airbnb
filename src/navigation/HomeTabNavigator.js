import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import ExploreNavigator from "./ExploreNavigator";

const Tab = createBottomTabNavigator();

function HomeTabNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"Explore"}
        component={ExploreNavigator}
        options={{
          tabBarActiveTintColor: "#f15454",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Saved"}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: "#f15454",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Airbnb"}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: "#f15454",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Messages"}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: "#f15454",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: "#f15454",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;
