import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";

import SafeAreaView from "react-native-safe-area-view";
import FlatListCharacter from "../../../components/FlatListCharacter";

const ListCharacters = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor="#F8F8F8" barStyle="dark-content" />
      <ScrollView style={{ width: "100%" }}>
        <FlatListCharacter />
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
