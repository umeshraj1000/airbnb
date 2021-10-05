import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import item from "../../assets/data/search";

function DestinationSearchScreen(props) {
  const [inputText, setinoutText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setinoutText}
      />

      <FlatList
        data={item}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconConatainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#e7e7e7",
  },
  iconConatainer: {
    backgroundColor: "#e7e7e7",
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {},
});

export default DestinationSearchScreen;
