import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { BUTTON, BLUETXT } from "../theme/main";

export const YellowButton = ({txt, route, style, nav, event, rdata}) => {
  const action = () => {
    event ? event() : null;
    route ? nav.navigate(route, {rdata: rdata ? rdata : null}) : null;
  }
  return (
    <TouchableOpacity onPress={() => action()}>
      <LinearGradient colors={["#FFE6AF", "#FFE6AF"]} style={[BUTTON, style ? style : null]}>
        <Text style={BLUETXT}>{txt}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
