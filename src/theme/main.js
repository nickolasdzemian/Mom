import {Platform } from 'react-native';
export const OS = Platform.OS === 'android';

// Fonts
export const fonts = OS ? {
    Albert: "FSAlbertProNarrow_Bold"
} : {
    Albert: "FSAlbertProNarrow"
}

// Assets
export const bg_blue = require("../../assets/auth/bg_blue.png");

// Colors
export const COLORS = {
  black1: "#4B4B4B",
  gray_buttons: "#EAF3FC",
  blue_text: "#2C78BA",
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
