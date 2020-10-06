import React from "react";
import { StatusBar, ScrollView, StyleSheet, Text, View } from "react-native";

import SafeAreaView from "react-native-safe-area-view";
import { CharacterImageGradient } from "./CharacterImageGradient";

const Character = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollView>
        <CharacterImageGradient />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
export default Character;
