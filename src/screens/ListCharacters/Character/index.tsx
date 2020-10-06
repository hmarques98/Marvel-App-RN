import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import { LinearGradient } from "expo-linear-gradient";

import { FONT_400, FONT_700, FONT_800 } from "../../../fonts/types";

interface ICharacter {
  keyItemTouchable: number;
  onPress: () => void;
  uriImageThumbnail: string | any;
  extensionImage: string | any;
  nameCharacters: string;
  titleComics: string;
}

const Character = ({
  keyItemTouchable,
  onPress,
  nameCharacters,
  uriImageThumbnail,
  extensionImage,
  titleComics,
}: ICharacter) => {
  return (
    <TouchableHighlight
      containerStyle={styles.containerStyleButton}
      underlayColor="transparent"
      activeOpacity={0.9}
      key={keyItemTouchable}
      onPress={onPress}
    >
      <View style={styles.containerImage}>
        <Image
          defaultSource={require("../../../assets/images/5f7216d797e38.jpg")}
          style={styles.image}
          source={{
            uri: `${uriImageThumbnail}.${extensionImage}`,
          }}
        />
        <LinearGradient
          colors={["rgba(0,0,010, 0.05)", "rgba(0,0,0, 0.6)"]}
          start={{ x: 0.5, y: 0.75 }}
          end={{ x: 0.47, y: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            height: "100%",
            width: "100%",
            padding: 8,
            borderRadius: 19,
            justifyContent: "flex-end",
          }}
        >
          <Text numberOfLines={2} style={styles.nameCharacters}>
            {nameCharacters} {titleComics}
          </Text>
        </LinearGradient>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  containerStyleButton: {
    alignItems: "center",
  },
  containerImage: {
    position: "relative",
    marginHorizontal: 8,
    marginVertical: 16,
  },
  image: {
    borderRadius: 19,
    width: 140,
    height: 220,
    backgroundColor: "rgba(0,0,0, 0.1)",
  },
  nameCharacters: {
    fontSize: 17,
    color: "#FFFFFF",
    fontFamily: FONT_700,
  },
});

export default Character;
