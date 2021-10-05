import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import feed from "../../assets/data/feed";
import Post from "../components/Post";

function SearchResultsScreen(props) {
  return (
    <View style={styles.container}>
      <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SearchResultsScreen;
