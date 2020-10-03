import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import { LinearGradient } from "expo-linear-gradient";

import { FONT_400, FONT_700, FONT_800 } from "../../fonts/types";

interface IComics {
  keyItemTouchable: number;
  onPress: () => void;
  uriImageThumbnail: string[];
  extensionImage: string[];
  nameCharacters: string;
}

const Comics = ({
  keyItemTouchable,
  onPress,
  nameCharacters,
  uriImageThumbnail,
  extensionImage,
}: IComics) => {
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
          style={styles.image}
          source={
            uriImageThumbnail.length > 0
              ? {
                  uri: `${uriImageThumbnail}.${extensionImage}`,
                }
              : require("../../assets/images/5f7216d797e38.jpg")
          }
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
            {nameCharacters}
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

export default Comics;
