import React from "react";
import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Character from "../Character";
import { ResultCharacters } from "./interfaces";

interface IPathMarvel {
  path: ResultCharacters[];
}

const FlatListCharacter = ({ path }: IPathMarvel) => {
  const { navigate } = useNavigation();

  return (
    <>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item: ResultCharacters, index) => item.id.toString()}
        data={path}
        renderItem={({ item, index, separators }) => (
          <Character
            extensionImage={item.thumbnail.extension}
            keyItemTouchable={item.id}
            onPress={() => {
              navigate("Details", {
                name: item.name,
                id: item.id,
                thumbnail: item.thumbnail,
                description: item.description,
                comics: item.comics,
                series: item.series,
                stories: item.stories,
                title: item.title,
              });
            }}
            uriImageThumbnail={item.thumbnail.path}
            nameCharacters={item.name}
            titleComics={item.title}
          />
        )}
      />
    </>
  );
};

export default FlatListCharacter;
