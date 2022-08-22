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

  // Library
  content: {
    margin: 12,
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 11,
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 100,
    marginBottom: -36,
  },
  libTitle: {
    ...BLUETXT,
    fontSize: 18,
    marginBottom: 15,
  },
  cloud: {
    justifyContent: "center",
    width: 130,
    height: 100,
    marginRight: 12,
    marginBottom: 10,
  },
  inCloud: {
    ...BLUETXT,
    fontSize: 14,
    position: "absolute",
    textAlign: "center",
    marginLeft: "22%",
  },
  calItem: {
    width: 66,
    marginRight: 20,
  },
  calItemImg: {
    width: 65,
    height: 65,
    borderRadius: 10,
    flexWrap: "wrap",
  },
  calItemTxt: {
    fontFamily: fonts.Poppins,
    fontSize: 11,
    textAlign: "center",
    color: COLORS.gray1,
    marginBottom: 15,
  },
  valTxtBld: {
    fontFamily: fonts.Poppins,
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.black_txt,
    marginBottom: 15,
  },
  momItemImg: {
    width: 65,
    height: 65,
    flexWrap: "wrap",
    borderRadius: 180,
    marginBottom: 3,
  },

  // Calendar
  calTopImg: {
    marginTop: 15,
    borderRadius: 10,
    width: window.width * 0.8,
    height: window.height * 0.18,
    marginBottom: 20,
  },
  pedia: {
    flexDirection: "row",
    marginBottom: 12,
  },
  pediaIco: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  trimArea: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: window.width * 0.9,
    marginBottom: 20,
  },
  triItem: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 40,
    height: 40,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  triTxt: {
    fontFamily: fonts.Poppins,
    fontSize: 14,
    color: COLORS.blue_text,
  },
  postContentTxt: {
    fontFamily: fonts.Poppins,
    fontSize: 11,
    color: COLORS.black_txt,
    marginBottom: 15,
    alignSelf: "center",
    width: window.width * 0.85,
  },

  // All posts
  searchIco: {
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    margin: 12,
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 11,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
  },
  searchInput: {
    marginLeft: 5,
    padding: 8,
    fontFamily: fonts.Poppins,
    fontSize: 12,
    color: COLORS.blue_text,
  },
  postItem: {
    flexDirection: "row",
    alignContent: "center",
  },
  calPostAv: {
    width: 36,
    height: 36,
    borderRadius: 180,
    marginRight: 15,
  },
  postTitle:{
    //alignItems: "center",
  },
  postTitleTxt: {
    fontFamily: fonts.Poppins,
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.blue_text,
    textAlign: "left",
    maxWidth: window.width * 0.75,
  },
});
