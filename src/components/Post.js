import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Post(props) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720",
        }}
        style={styles.image}
      />
      <Text style={styles.bedrooms}>1 Bed 1 Bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        Whispering Pines Cottages|treehouse|Tandi
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>₹2000</Text>
        <Text style={styles.price}> ₹999 </Text>
        /night
      </Text>
      <Text style={styles.totalPrice}>₹2500 total</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 25,
    lineHeight: 26,
    fontWeight: "bold",
  },
  prices: {
    fontSize: 18,
    marginVertical: 5,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
    marginRight: 2,
  },
  price: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
});

export default Post;
