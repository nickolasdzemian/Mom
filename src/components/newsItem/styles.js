import { StyleSheet } from "react-native";
import { COLORS, NICKNAME, BUTTON, BLUETXT, fonts, window } from "../../theme/main";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 11,
    marginTop: 20,
    borderRadius: 10,
    // borderWidth: 2,
    // borderColor: COLORS.blue_darling,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    // shadowColor: COLORS.blue_darling,
  },
  container_P: {
    marginTop: -55,
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 11,
    marginTop: 20,
    borderRadius: 10,
    // borderWidth: 2,
    // borderColor: COLORS.blue_darling,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    // shadowColor: COLORS.blue_darling,
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
    alignSelf: "center",
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
    width: window.width - 65,
    height: window.height / 3,
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
  },

  // Comments for alone post
  commentsContent: {
    backgroundColor: "transparent",
  },

  // Add comment
  input: {
    ...BUTTON,
    ...BLUETXT,
    width: "100%",
    height: 70,
    backgroundColor: COLORS.gray_buttons,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
  },
});
