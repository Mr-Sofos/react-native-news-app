import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import { gStyle } from "./styles/style";
import * as Font from "expo-font";

import MainStack from "./navigate";

const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (!font) {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={(error) => console.warn(error)}
      />
    );
  }

  return (
    <View style={gStyle.main}>
      <MainStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
