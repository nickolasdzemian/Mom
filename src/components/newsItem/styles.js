import { StyleSheet, Platform } from "react-native";
import { COLORS, BUTTON, BLUETXT, OS, NICKNAME, fonts } from "../../theme/main";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLORS.blue_darling,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    shadowColor: COLORS.blue_darling,
  },
  topContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  info: {
    flexDirection: "row",
  },
  userImg: {
    width: 36,
    height: 36,
    borderRadius: 150 / 2,
    overflow: "hidden",
    marginRight: 10,
  },
  postInfo: {},
  subInfo: {
    flexDirection: "row",
  },
  subInfoTxt: {
    fontFamily: fonts.Poppins,
    fontSize: 11,
    color: COLORS.gray1,
    marginHorizontal: 5,
  },
  uName: {
    ...NICKNAME,
  },
});
