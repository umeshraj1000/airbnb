import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Post(props) {
  const post = props.post;
  // console.log(post);

  return (
    <View style={styles.container}>
      <Image source={{ uri: post.image }} style={styles.image} />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedrooms
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>₹{post.oldPrice}</Text>
        <Text style={styles.price}> ₹{post.newPrice} </Text>
        /night
      </Text>
      <Text style={styles.totalPrice}>₹{post.totalPrice} total</Text>
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
