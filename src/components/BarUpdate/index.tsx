import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import imageDefault from "../../assets/images/5f7216d797e38.jpg";

type BarUpdateProps = {
  onRefresh: () => void;
  lengthComics: number;
  offSet: number;
};

const ImageCustomDefault = () => {
  return (
    <Image
      resizeMode="contain"
      style={[{ width: 380, height: 120 }]}
      source={imageDefault}
    />
  );
};

const BarUpdate = ({ onRefresh, lengthComics, offSet }: BarUpdateProps) => {
  return (
    <>
      <RectButton onPress={onRefresh} style={styles.buttonRect}>
        <Text style={styles.textUpdate}>Atualizar com + 5</Text>
      </RectButton>

      <Text style={styles.textUpdate}>
        Estão sendo mostrados {lengthComics} da ordem {offSet}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  buttonRect: {
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 12,
    shadowColor: "white",
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 35,
  },
  textUpdate: { color: "white", fontWeight: "bold", fontSize: 16 },
});
export default BarUpdate;
