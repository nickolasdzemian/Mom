import { StyleSheet, Platform } from "react-native";
import { COLORS, BUTTON, BLUETXT, fonts } from "../../theme/main";

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
    marginHorizontal: 13,
    marginVertical: 2,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },

  // No comments
  nocomments: {},
  nocommentsTxt: {
    ...BLUETXT,
    alignSelf: "center",
    marginTop: "45%",
  },


  ftop: {
    flex: 0.25,
    flexDirection: "row",
  },
  topimg: {
    marginVertical: "-5%",
    marginHorizontal: "-7%",
  },
  star1: {
    position: "absolute",
    marginLeft: 141, // X from figma
    marginTop: 52, // Y from figma
  },
  star2: {
    position: "absolute",
    marginLeft: 284,
    marginTop: 76,
  },
  center: {
    flex: 0.5,
    alignItems: "center",
    // paddingTop: 80,
  },
  btn: {
    ...BUTTON,
    marginTop: 30,
  },
  btnTXT: BLUETXT,
  bottom: {
    flex: 0.25,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  bottomimg: {},
  star3: {
    position: "absolute",
    marginLeft: 19,
    marginTop: 110,
  },
  star4: {
    position: "absolute",
    marginLeft: 130,
    marginTop: 80,
  },
  // Status
  fly: {
    position: "absolute",
    marginLeft: 75,
    marginTop: 100,
  },
  smoky: {
    position: "absolute",
    marginLeft: "55%",
    marginTop: 200,
  },
  shirt: {
    position: "absolute",
    marginLeft: 30,
    marginTop: -40,
  },
  btn3: {
    ...BUTTON,
    marginTop: 20,
    backgroundColor: COLORS.gray_buttons,
  },
  title: {
    ...BLUETXT,
    fontSize: 20,
    textAlign: "center",
    width: BUTTON.width,
  },
  subTitle: {
    ...BLUETXT,
    textAlign: "center",
    width: BUTTON.width,
    marginTop: 10,
  },
  // Pregnant
  bantic: {
    position: "absolute",
    marginLeft: 95,
    marginTop: 95,
  },
  lshirt: {
    position: "absolute",
    marginLeft: 30,
    marginTop: -40,
  },
  wheel: {
    marginTop: -45,
    marginBottom: -75,
    width: BUTTON.width,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  selectedIndicatorStyle: {
    width: 250,
    height: 35,
    backgroundColor: "rgba(234, 243, 252, 0.7)",
    borderRadius: 10,
  },
  wheelItem: {
    height: 28,
  },
  itemTextStyle: {
    color: COLORS.blue_text,
    fontSize: 22,
    fontWeight: "400",
  },
  bottle: {
    position: "absolute",
    marginLeft: "80%",
    marginTop: 380,
  },
  // RegistrationScreen
  bear: {
    position: "absolute",
    width: 50,
    height: 150,
    marginLeft: "43%",
    marginTop: 70,
  },
  pchel: {
    position: "absolute",
    marginLeft: 45,
    marginTop: 10,
  },
  input: {
    ...BUTTON,
    ...BLUETXT,
    backgroundColor: COLORS.gray_buttons,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  smoky2: {
    position: "absolute",
    marginLeft: "75%",
    marginTop: 380,
  },

  // AddChild
  cloud: {
    position: "absolute",
    width: 47,
    marginLeft: "40%",
    marginTop: 95,
  },
  horse: {
    position: "absolute",
    width: 100,
    marginLeft: 45,
    marginTop: 10,
  },
  btnCAL: {
    ...BUTTON,
    flexDirection: "row",
    backgroundColor: COLORS.gray_buttons,
    borderRadius: 10,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  sex: {
    ...BUTTON,
    flexDirection: "row",
    justifyContent: "center",
    height: 32,
    marginTop: 20,
    borderRadius: 9,
    backgroundColor: COLORS.yellow,
  },
  selBtn: {
    width: 141.5,
    height: 28.5,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
  },
  selTxt: {
    ...BLUETXT,
    color: COLORS.black1,
  },

  babyShirt: {
    position: "absolute",
    width: 47,
    marginLeft: "79%",
    marginTop: 445,
  },
});
