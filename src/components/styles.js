import { StyleSheet, Platform } from "react-native";
import { COLORS, BUTTON, BLUETXT } from "../theme/main";

export const styles = StyleSheet.create({
  // Selection
  view: {
    ...BUTTON,
    flexDirection: 'row',
    height: 32,
    marginTop: 20,
    borderRadius: 9,
    backgroundColor: COLORS.yellow,
  },
});
