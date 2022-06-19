import { StyleSheet } from "react-native";
import { BLUETXT, OS, fonts } from "../../theme/main";

export const styles = StyleSheet.create({
  // Normal
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

  // Search
  search: {
    width: '85%',
    height: 43,
    marginVertical: -1.5,
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#0001",
  },
  input: {
    height: 40,
    width: "90%",
    marginLeft: 5,
  },

  // Top dropdown menu
  centeredView: {
    width: '100%',
    height: '100%',
    // borderColor: "black",
    // borderWidth: 20,
    marginTop: OS ? 65 : 110,
    alignSelf: "flex-start",
    position: "absolute",
    backgroundColor: "rgba(39, 38, 38, 0.35)",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
  },
  modalText: {
    ...BLUETXT,
    fontFamily: OS ? fonts.AlbertThin : fonts.Albert,
    fontWeight: "normal",
    marginVertical: 5,
  }
});
