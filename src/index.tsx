import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import ListComics from "./components/ListComics/Index";

const Index = () => {
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
  },
});
export default Index;
