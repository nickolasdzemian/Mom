import { StyleSheet } from "react-native";
import { COLORS, NICKNAME, fonts, window } from "../../theme/main";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.blue_darling,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    shadowColor: COLORS.blue_darling,
  },
  // Top
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
    marginRight: 8,
  },
  // Middle
  middle: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20,
    borderRadius: 20,
  },
  mainImg: {
    width: window.width - 60,
    borderRadius: 20,
  },
  // Text
  text: {
    marginTop: 15,
  },
  post: {
    fontFamily: fonts.Poppins,
    fontSize: 13,
    color: COLORS.black_txt,
  },
  postShowTxt: {
    marginLeft: 3,
    fontFamily: fonts.Poppins,
    fontSize: 13,
    color: COLORS.blue_text,
  },
  // Actions
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  likecomm: {
    flexDirection: "row",
  },
  count: {
    marginLeft: 2,
    fontFamily: fonts.Poppins,
    fontSize: 13,
    color: COLORS.gray1,
  },
  comments: {
    marginTop: 10,
    paddingBottom: 1,
  }
});
