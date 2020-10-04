import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import Character from "../Character";
import { ResultMarvel, IThumbnail } from "./interfaces";

import { FONT_800 } from "../../fonts/types";
import NavBarMarvel from "../NavBarMarvel";
import { MarvelContext } from "../../context/Marvel";

const FlatListCharacter = () => {
  const { navigate } = useNavigation();

  const { comics, ŕefreshing, onRefresh } = useContext(MarvelContext);

  return (
    <>
      <NavBarMarvel />
      {comics.length > 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item: ResultMarvel, index) => item.id.toString()}
          data={comics}
          renderItem={({ item, index, separators }) => (
            <Character
              extensionImage={item.thumbnail.extension}
              keyItemTouchable={item.id}
              onPress={() => {
                navigate("Personagem", {
                  name: item.name,
                  id: item.id,
                  thumbnail: item.thumbnail,
                  description: item.description,
                  comics: item.comics,
                  series: item.series,
                  stories: item.stories,
                });
              }}
              uriImageThumbnail={item.thumbnail.path}
              nameCharacters={item.name}
            />
          )}
        />
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.textUpdate}>Aguarde</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textUpdate: {
    color: "#000",
    fontSize: 24,
    fontFamily: FONT_800,
  },
});
export default FlatListCharacter;
