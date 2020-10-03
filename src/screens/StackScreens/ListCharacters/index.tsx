import React from "react";
import {
  Platform,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import SafeAreaView from "react-native-safe-area-view";
import ListComics from "../../../components/ListComics/Index";

const ListCharacters = () => {
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor="#F8F8F8" barStyle="dark-content" />
      <ScrollView style={{ width: "100%" }}>
        <ListComics />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
});

export default ListCharacters;
