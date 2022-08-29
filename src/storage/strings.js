import { Platform, NativeModules, DeviceEventEmitter } from "react-native";
import { userLocale } from "./locale";
import { ru, ua } from "./locales";

let locale;

export const Strings = () => {
  userLocale.get("lang").then((response) => {
    if (response !== undefined) {
      locale = response;
    }
  });
  DeviceEventEmitter.addListener(
    "event.locale",
    (eventData) => (locale = eventData)
  );
  if (locale === undefined) {
    const deviceLanguage =
      Platform.OS === "ios"
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;
    locale = deviceLanguage.slice(0, 2);
  }
  if (locale == "ru") {
    return ru;
  } else {
    return ua;
  }
};
