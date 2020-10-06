import React, { useContext } from "react";
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  View,
  Dimensions,
  RefreshControl,
} from "react-native";

import SafeAreaView from "react-native-safe-area-view";
import FlatListCharacter from "./FlatListCharacter";

import NavBarMarvel from "./NavBarMarvel";
import { MarvelContext } from "../../context/Marvel";
import { FONT_800 } from "../../fonts/types";

const ListCharacters = () => {
  const { characters, comics, series, ŕefreshing, onRefresh } = useContext(
    MarvelContext
  );
  return (
    <SafeAreaView style={[styles.container, { flex: 1 }]}>
      <StatusBar backgroundColor="#F8F8F8" barStyle="dark-content" />
      <ScrollView
        style={{ width: "100%" }}
        refreshControl={
          <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
        }
      >
        <NavBarMarvel />
        {characters.length & comics.length & series.length ? (
          <>
            <FlatListCharacter path={characters} />
            <FlatListCharacter path={comics} />
            <FlatListCharacter path={series} />
          </>
        ) : (
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              height: Dimensions.get("screen").height / 2.4,
            }}
          >
            <Text style={styles.textUpdate}>Aguarde</Text>
          </View>
        )}
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
  textUpdate: {
    color: "#000",
    fontSize: 24,
    fontFamily: FONT_800,
  },
});

export default ListCharacters;
