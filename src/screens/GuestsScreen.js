import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function GuestsScreen(props) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.audienceText}>Adults</Text>
          <Text style={styles.ageText}>Ages 13 or above</Text>
        </View>
        <View style={styles.rightContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(Math.max(0, adults - 1))}
          >
            <Text style={styles.plusMinusText}>-</Text>
          </Pressable>
          <Text style={styles.numberText}>{adults}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults + 1)}
          >
            <Text style={styles.plusMinusText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.audienceText}>Children</Text>
          <Text style={styles.ageText}>Ages 2-12</Text>
        </View>
        <View style={styles.rightContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setChildren(Math.max(0, children - 1))}
          >
            <Text style={styles.plusMinusText}>-</Text>
          </Pressable>
          <Text style={styles.numberText}>{children}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setChildren(children + 1)}
          >
            <Text style={styles.plusMinusText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.audienceText}>Infants</Text>
          <Text style={styles.ageText}>Under 2</Text>
        </View>
        <View style={styles.rightContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(Math.max(0, infants - 1))}
          >
            <Text style={styles.plusMinusText}>-</Text>
          </Pressable>
          <Text style={styles.numberText}>{infants}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(infants + 1)}
          >
            <Text style={styles.plusMinusText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  audienceText: {
    fontWeight: "bold",
  },
  ageText: {
    color: "#8d8d8d",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#e7e7e7",
    marginHorizontal: 20,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
  },
  numberText: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  plusMinusText: {
    fontSize: 20,
    color: "#474747",
  },
});

export default GuestsScreen;
