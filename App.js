import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View>
      <StatusBar translucent={false} backgroundColor="white" />
      <Home />
    </View>
  );
}
