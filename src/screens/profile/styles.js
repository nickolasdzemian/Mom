import { StyleSheet } from "react-native";
import { COLORS, BUTTON, BLUETXT, fonts, window } from "../../theme/main";

export const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  background: {
    flex: 1,
  },

  // Profile
  profileContent: {
    margin: 12,
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 11,
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 25,
    marginBottom: -36,
  },
  nocomments: {
    marginTop: 7,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginHorizontal: 11,
    backgroundColor: "white",
    borderRadius: 10,
  },
  nocommentsTxt: {
    ...BLUETXT,
    alignSelf: "center",
    marginTop: "10%",
    //marginLeft: "35%" // for big list only
  },
  userImg: {
    width: 150,
    height: 150,
    borderRadius: 360,
    marginLeft: window.width / 2 - 212 / 2,
    marginVertical: -(150 / 2),
  },
  userImgEditView: {
    width: 150,
    height: 150,
    borderRadius: 360,
    marginTop: "13%",
  },
  editIco: {
    position: "absolute",
    marginLeft: window.width / 1.8,
    marginTop: 57,
  },
  name: {
    ...BLUETXT,
    fontSize: 20,
    alignSelf: "center",
    marginTop: 90,
  },
  nick: {
    fontFamily: fonts.Poppins,
    color: COLORS.blue_text,
    fontSize: 14,
    alignSelf: "center",
    marginTop: 4,
  },
  subInfo: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 8,
  },
  subInfoTxt: {
    fontFamily: fonts.Poppins,
    fontSize: 11,
    color: COLORS.gray1,
    marginHorizontal: 4,
    alignSelf: "center",
  },
  counters: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },
  border: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: COLORS.blue_darling,
    borderLeftColor: COLORS.blue_darling,
  },
  counterTxt: {
    ...BLUETXT,
    fontSize: 18,
    alignSelf: "center",
  },
  counterSubTxt: {
    fontFamily: fonts.Poppins,
    fontSize: 13,
    color: COLORS.gray1,
    marginHorizontal: 6,
    alignSelf: "center",
  },
  title: {
    ...BLUETXT,
    fontSize: 18,
    marginTop: 32,
  },
  family: {
    flexDirection: "row",
    marginTop: 10,
  },
  pregState: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 120,
    height: 90,
  },
  pregCount: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 360,
    backgroundColor: COLORS.blue_text,
    width: 48,
    height: 48,
  },
  pregCountTxt: {
    fontFamily: fonts.Poppins,
    fontSize: 18,
    color: "white",
  },
  pregCountSubTxt: {
    fontFamily: fonts.Poppins,
    fontSize: 12,
    color: COLORS.gray1,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 36,
  },
  button: {
    ...BUTTON,
    width: 150,
    backgroundColor: COLORS.yellow,
  },
  btnTxt: {
    ...BLUETXT,
  },

  // Settings
  block: {
    marginTop: 25,
    marginBottom: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.gray_buttons,
  },
  settingsBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
  },
  divider: {
    alignSelf: "center",
    width: window.width - 19,
    height: 1,
    backgroundColor: "rgba(83, 141, 190, 0.2)",
  },
  settingsBtnTxt: {
    ...BLUETXT,
  },
  settingValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValueTxt: {
    fontFamily: fonts.Poppins,
    fontSize: 13,
    color: COLORS.gray1,
    marginRight: 14,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    ...BUTTON,
    ...BLUETXT,
    backgroundColor: COLORS.gray_buttons,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  modalBtn: {
    ...BUTTON,
    backgroundColor: COLORS.yellow,
    marginTop: 40,
  },

  // Children
  sex: {
    ...BUTTON,
    flexDirection: "row",
    justifyContent: "center",
    height: 32,
    marginTop: 50,
    borderRadius: 9,
    backgroundColor: COLORS.gray_buttons,
    alignSelf: "center",
    marginVertical: window.height / 20,
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
});
