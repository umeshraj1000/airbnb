import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, FlatList } from "react-native";
import Post from "./src/components/Post";
import feed from "./assets/data/feed";
import SearchResultsScreen from "./src/screens/SearchResultsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DestinationSearchScreen from "./src/screens/DestinationSearchScreen";
import GuestsScreen from "./src/screens/GuestsScreen";

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];
3;
export default function App() {
  return (
    <View>
      <StatusBar translucent={false} backgroundColor="white" />
      {/* <Post post={post1} /> */}
      {/* <SearchResultsScreen /> */}
      {/* <HomeScreen /> */}
      {/* <DestinationSearchScreen /> */}
      <GuestsScreen />
    </View>
  );
}
