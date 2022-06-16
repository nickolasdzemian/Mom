import { StyleSheet } from "react-native";
import { BLUETXT, OS } from "../../theme/main";

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    paddingTop: OS ? 40 : 60,
    paddingBottom: 20,
    paddingHorizontal: 12,
  },
  btn: {
    flexDirection: "row",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  titleTxt: {
    ...BLUETXT,
    fontSize: 20,
  },
});
