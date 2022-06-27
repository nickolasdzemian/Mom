import { StyleSheet } from "react-native";
import { COLORS, BUTTON, BLUETXT, OS, fonts, window } from "../../theme/main";

export const switcher = {
  false: "rgba(120, 120, 128, 0.16)", 
  true: "rgba(250, 136, 32, 1)"
}

export const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  // News
  background: {
    flex: 1,
  },

  // News settings
  upperTitle: {
    ...BLUETXT,
    fontSize: 14,
    marginLeft: 15,
  },
  field: {
    width: "100%",
    paddingHorizontal: 20,
    height: 45,
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: COLORS.gray_buttons,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fieldTitle: {
    ...BLUETXT,
  },
  fieldSubTitle: {
    fontFamily: fonts.Poppins,
    color: COLORS.black_txt,
    fontSize: 12,
    marginLeft: 20,
    marginTop: 6,
    marginBottom: 8,
  },

  // News search
  btnCont: {
    ...BUTTON,
    alignSelf: "center",
    width: "98%",
    flexDirection: "row",
    justifyContent: "center",
    height: 32,
    borderRadius: 9,
    backgroundColor: COLORS.yellow,
  },
  selBtn2: {
    width: "50%",
    height: 28.5,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
  },
  selTxt2: {
    ...BLUETXT,
    color: COLORS.black1,
  },
  upperTitle2: {
    ...BLUETXT,
    fontSize: 20,
    marginLeft: 10,
    marginTop: 25,
    marginBottom: 17,
  },
  recentReq: {
    ...BLUETXT,
    marginLeft: 10,
    marginBottom: 10,
  },

  // Comments view
  comments: {
    marginBottom: 80,
  },
  commentsItem: {
    marginHorizontal: 11,
    paddingHorizontal: 16,
    paddingRight: 20,
    paddingBottom: 13,
    backgroundColor: "white",
    // borderStartWidth: 2,
    // borderEndWidth: 2,
    // borderColor: COLORS.blue_darling,
  },

  // No comments
  nocomments: {},
  nocommentsTxt: {
    ...BLUETXT,
    alignSelf: "center",
    marginTop: "45%",
    marginLeft: "35%" // for big list only
  },

  // New post
  newContent: {
    margin: 12,
    padding: 10,
    paddingHorizontal: 20,
    height: window.height / 1.4,
    backgroundColor: "white",
    borderRadius: 10,
  },
  newInput: {
    marginTop: 15,
    height: window.height / 1.8,
  },
  gallery: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 18,
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.gray_buttons,
  },
  chList: {
    height: window.height / 1.7,
    marginTop: 20,
    marginHorizontal: 3,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  chItem: {
    flexDirection: "row",
    paddingVertical: 20,
    alignContent: "center",
    justifyContent: "space-between",
    justifyItems: "center",
  },
  chLogo: {
    flexDirection: "row",
    marginVertical: OS ? -5 : -10,
  },
  chLogoImg: {
    width: 36,
    height: 36,
    borderRadius: 360,
    marginRight: 10,
  },
  chTitle: {
    ...BLUETXT,
    fontSize: 15,
    color: COLORS.black1,
    alignSelf: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
  }

});
