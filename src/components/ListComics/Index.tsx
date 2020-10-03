import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import Comics from "../Comics";
import { Result } from "./interfaces";

import { FONT_800 } from "../../fonts/types";
import BarUpdate from "../BarUpdate";
import { MarvelContext } from "../../context/Marvel";

const ListComics = () => {
  const { navigate } = useNavigation();

  const { comics, ŕefreshing, onRefresh } = useContext(MarvelContext);

  return (
    <>
      <BarUpdate />
      {comics.length > 0 ? (
        <>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item: Result, index) => item.id.toString()}
            data={comics}
            renderItem={({ item, index, separators }) => (
              <Comics
                extensionImage={item.images.map((items) => items.extension)}
                keyItemTouchable={item.id}
                onPress={() => {
                  navigate("Personagem", {
                    name: item.title,
                    id: item.id,
                  });
                }}
                uriImageThumbnail={item.images.map((items) => items.path)}
                nameCharacters={item.series.name}
              />
            )}
          />
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            // ItemSeparatorComponent={() => <Seperators />}
            refreshControl={
              <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item: Result, index) => item.id.toString()}
            data={comics}
            renderItem={({ item, index, separators }) => (
              <Comics
                extensionImage={item.images.map((items) => items.extension)}
                keyItemTouchable={item.id}
                onPress={() => {
                  navigate("Personagem", {
                    name: item.title,
                    id: item.id,
                  });
                }}
                uriImageThumbnail={item.images.map((items) => items.path)}
                nameCharacters={item.series.name}
              />
            )}
          />
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            // ItemSeparatorComponent={() => <Seperators />}
            refreshControl={
              <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item: Result, index) => item.id.toString()}
            data={comics}
            renderItem={({ item, index, separators }) => (
              <Comics
                extensionImage={item.images.map((items) => items.extension)}
                keyItemTouchable={item.id}
                onPress={() => {
                  navigate("Personagem", {
                    name: item.title,
                    id: item.id,
                  });
                }}
                uriImageThumbnail={item.images.map((items) => items.path)}
                nameCharacters={item.series.name}
              />
            )}
          />
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            // ItemSeparatorComponent={() => <Seperators />}
            refreshControl={
              <RefreshControl refreshing={ŕefreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item: Result, index) => item.id.toString()}
            data={comics}
            renderItem={({ item, index, separators }) => (
              <Comics
                extensionImage={item.images.map((items) => items.extension)}
                keyItemTouchable={item.id}
                onPress={() => {
                  navigate("Personagem", {
                    name: item.title,
                    id: item.id,
                  });
                }}
                uriImageThumbnail={item.images.map((items) => items.path)}
                nameCharacters={item.series.name}
              />
            )}
          />
        </>
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
export default ListComics;
