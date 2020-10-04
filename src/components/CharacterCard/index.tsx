import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome5";
import { FONT_300, FONT_400, FONT_700 } from "../../fonts/types";

interface ICharacterCard {
  name: string;
  description: string;
  comicsItem: string;
  storiesItem: string;
}

const { height, width } = Dimensions.get("window");

const marginToTop = height / 1.45;
const CharacterCard = ({
  description,
  comicsItem,
  storiesItem,
  name,
}: ICharacterCard) => {
  return (
    <View
      style={{
        flex: 1,
        height: height,
        paddingHorizontal: 12,
        marginTop: -marginToTop,
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: FONT_400,
          fontSize: 16,
          opacity: 0.75,
        }}
      >
        {name}
        {"\n"}
      </Text>
      <Text
        style={{
          color: "white",
          fontFamily: FONT_700,
          fontSize: 40,
        }}
      >
        {storiesItem}
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontFamily: FONT_400,
          marginVertical: 12,
        }}
      >
        {description}
      </Text>
      <Text style={{ fontSize: 21, fontFamily: FONT_700, color: "white" }}>
        Comics - Históras em Quadrinhos{"\n"}
      </Text>
      <Text
        numberOfLines={12}
        style={{
          fontFamily: FONT_300,
          fontSize: 14,
          color: "white",
        }}
      >
        {comicsItem}
      </Text>
    </View>
  );
};

export default CharacterCard;
