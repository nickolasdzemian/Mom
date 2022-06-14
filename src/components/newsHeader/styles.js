import { StyleSheet, Platform } from "react-native";
import { COLORS, BUTTON, BLUETXT } from "../../theme/main";

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 12,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 41,
    width: 41,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#0001",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  titleTxt: {
    ...BLUETXT,
    fontSize: 20,
  },
});
