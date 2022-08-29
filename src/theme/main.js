import { Platform, Dimensions, Image } from "react-native";
export const OS = Platform.OS === "android";

// Dimensions
export const window = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

// Fonts
export const fonts = OS
  ? {
      Albert: "FSAlbertProNarrow_Bold",
      AlbertThin: "FSAlbertProNarrow",
      Poppins: "Poppins_Regular",
      PoppinsBold: "Poppins_Bold",
    }
  : {
      Albert: "FSAlbertProNarrow",
      Poppins: "Poppins",
    };

// Assets
export const bg_blue = require("../../assets/auth/bg_blue.png");
export const preg_state = require("../../assets/profile/Puzo.png");
export const child = require("../../assets/profile/Baby.png");

// Colors
export const COLORS = {
  black_txt: "#33393F",
  black1: "#4B4B4B",
  gray1: "#AAACAE",
  gray_buttons: "#EAF3FC",
  blue_text: "#2C78BA",
  blue_darling: "#D0ECFA",
  yellow: "#FFF2C5",
};

// Button props
export const BUTTON = {
  justifyContent: "center",
  alignItems: "center",
  height: 50,
  width: 285,
  borderRadius: 20,
};

// Blue text
export const BLUETXT = {
  fontFamily: fonts.Albert,
  fontSize: 16,
  fontWeight: OS ? null : "700", // bold
  color: COLORS.blue_text,
};

// Blue nickname/title
export const NICKNAME = {
  fontFamily: OS ? fonts.PoppinsBold : fonts.Poppins,
  fontSize: 14,
  fontWeight: OS ? null : "600", // semi-bold
  color: COLORS.blue_text,
};

// Calculate local imgs ratio
export const imageRatio = (url, width = 0) => {
  const image = Image.resolveAssetSource(url);
  const ratio = image.height / image.width;
  const height = ratio * width;
  return { image, ratio, height };
};

export const imageRatioStyle = (url, width = 0) => {
  const image = Image.resolveAssetSource(url);
  const ratio = image.height / image.width;
  const height = ratio * width;
  return { width, height };
};
