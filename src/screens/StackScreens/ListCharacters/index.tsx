import React from "react";
import { Platform, View, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import SafeAreaView from "react-native-safe-area-view";
import ListComics from "../../../components/ListComics/Index";

const ListCharacters = () => {
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#E5E5E5" }]}>
      <StatusBar barStyle="light-content" />
      <ListComics />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default ListCharacters;
