import React from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  ImagePropTypes,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

// import { Container } from './styles';

import imageDefault from "../../assets/images/5f7216d797e38.jpg";

interface IComics {
  uriImageBackGround: string[];
  keyItemTouchable: number;
  onPress: () => void;
  uriImageThumbnail: string[];
  extensionImage: string[];
  seriesName: string;
  creatorsName: string;
}

const Comics = ({
  creatorsName,
  keyItemTouchable,
  onPress,
  seriesName,
  uriImageBackGround,
  uriImageThumbnail,
  extensionImage,
}: IComics) => {
  return (
    <ImageBackground
      defaultSource={imageDefault}
      resizeMode="contain"
      imageStyle={styles.ImageBackground}
      style={styles.containerImageBG}
      source={
        uriImageBackGround.length > 0
          ? {
              uri: `${uriImageBackGround}.${extensionImage}`,
            }
          : require("../../assets/images/5f7216d797e38.jpg")
      }
    >
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
          <View style={styles.containerDescription}>
            <Text numberOfLines={1} style={styles.seriesName}>
              {seriesName}
            </Text>

            <Text
              numberOfLines={4}
              style={styles.textDescription}
              key={creatorsName}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                Criadores
              </Text>
              {"\n"} {creatorsName} {"\n"}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerImageBG: {
    width: 340,
    marginVertical: 18,
    borderTopStartRadius: 14,
    borderTopEndRadius: 34,
    borderBottomColor: "white",
    borderBottomStartRadius: 8,
    borderWidth: 2,
    backgroundColor: "whitesmoke",
    height: 340,
  },
  textUpdate: { color: "white", fontWeight: "bold", fontSize: 18 },
  ImageBackground: {
    position: "absolute",
    opacity: 0.8,
    borderRadius: 18,
    marginTop: 6,
    height: "95%",
  },
  containerStyleButton: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginVertical: "10%",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    borderRadius: 4,
    marginBottom: 8,
    width: 140,
    height: 190,
  },
  seriesName: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    color: "black",
  },
  containerDescription: {
    backgroundColor: "whitesmoke",
    opacity: 0.8,
    width: 280,
    height: 120,
    marginTop: 8,
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 6,
  },
  textDescription: {
    color: "red",
    margin: 4,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default Comics;
