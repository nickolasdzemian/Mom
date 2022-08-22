import * as React from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "react-native";
import { window } from "../../theme/main";

export const BottomShadow = addStyles => {
  return <LinearGradient colors={["#FFF0", "#0009"]} style={[styles.shadow, addStyles]} />;
};

const styles = StyleSheet.create({
  shadow: {
    position: "absolute",
    height: 115,
    width: "100%",
    // borderWidth: 1,
    // borderColor: "black",
    //marginTop: "175%",
    marginTop: window.height * 0.85,
  },
  shadowCenter: {
    alignSelf: "center",
    height: 80,
    width: 65,
    marginTop: "5%",
    borderRadius: 80,
  },
});
