import * as React from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "react-native";

export const BottomShadow = addStyles => {
  return <LinearGradient colors={["#FFF0", "#0005"]} style={[styles.shadow, addStyles]} />;
};

const styles = StyleSheet.create({
  shadow: {
    position: "absolute",
    height: 115,
    width: "100%",
    marginTop: "175%",
  },
  shadowCenter: {
    alignSelf: "center",
    height: 80,
    width: 65,
    marginTop: "5%",
    borderRadius: 80,
  },
});
