import "react-native-gesture-handler";
import React from "react";
import Index from "./src";

import { AppLoading } from "expo";

import {
  MerriweatherSans_300Light,
  MerriweatherSans_400Regular,
  MerriweatherSans_800ExtraBold,
  MerriweatherSans_700Bold,
  useFonts,
} from "@expo-google-fonts/merriweather-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    MerriweatherSans_300Light,
    MerriweatherSans_400Regular,
    MerriweatherSans_700Bold,
    MerriweatherSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Index />;
  }
}
