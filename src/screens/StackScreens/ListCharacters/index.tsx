import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, View, StyleSheet } from "react-native";

// import { Container } from './styles';

import ListComics from "../../../components/ListComics/Index";

const ListCharacters = ({}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="brown" />
      <ListComics />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,99,71 ,0.9 )",
    width: "100%",
    paddingTop: Platform.OS === "android" ? 28 : 4,
  },
});

export default ListCharacters;
