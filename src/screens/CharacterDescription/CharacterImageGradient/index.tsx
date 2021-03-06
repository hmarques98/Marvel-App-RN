import React from "react";
import { Dimensions, View, Image, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome5";
import CharacterCard from "../CharacterCard";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { CharactersDetails } from "../interfaces";

type RouteParams = {
  DetailsCharacter: CharactersDetails;
};

export const CharacterImageGradient = () => {
  const {
    params: { name, comics, description, thumbnail, stories, title },
  } = useRoute<RouteProp<RouteParams, "DetailsCharacter">>();

  const { height, width } = Dimensions.get("screen");

  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        resizeMethod="resize"
        resizeMode="stretch"
        source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }}
        style={{ height: height }}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,1)"]}
          start={[1, 0]}
          end={[0.5, 1]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
          }}
        />
        <LinearGradient
          style={{
            position: "absolute",
            width: "100%",
          }}
          colors={["transparent", "rgba(0,0,0,0.25)"]}
        >
          <Icon
            style={{
              padding: 25,
            }}
            name="arrow-left"
            color="white"
            size={22}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </LinearGradient>
      </ImageBackground>
      <CharacterCard
        comicsItem={
          comics && comics.items.map((item) => item.name).join(`${"\n"}`)
        }
        description={description ? description : ""}
        storiesItem={stories.items
          ?.map((item) => item.name)
          .slice(0, 1)
          .join(`${"\n"}`)
          .replace(/[\()]/gi, "")}
        name={name}
        title={title}
      />
    </View>
  );
};

export default CharacterImageGradient;
