import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.full}</Text>
      <Image style={styles.image} source={{ uri: route.params.img }} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});
