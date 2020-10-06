import React from "react";
import { View, Text } from "react-native";
import { FONT_700 } from "../../../fonts/types";

interface IInfoTextCard {
  infoCard: string;
}

const InfoTextCard = ({ infoCard }: IInfoTextCard) => {
  return (
    <View
      style={{
        backgroundColor: "#F8f8f8",
        paddingHorizontal: 12,
        marginTop: 12,
      }}
    >
      <Text style={{ color: "#F2264B", fontSize: 18, fontFamily: FONT_700 }}>
        {infoCard}
      </Text>
    </View>
  );
};

export default InfoTextCard;
