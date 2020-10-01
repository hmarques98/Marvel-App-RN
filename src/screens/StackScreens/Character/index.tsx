import React from "react";
import { Text, View } from "react-native";

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
// import { Container } from './styles';

type RouteParams = {
  DetailsCharacter: { name: string; id: number };
};

const Character = () => {
  const navigation = useNavigation();
  const { params, name } = useRoute<
    RouteProp<RouteParams, "DetailsCharacter">
  >();
  return (
    <View>
      <RectButton
        style={{ padding: 14, backgroundColor: "red", width: 180 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "whitesmoke" }}>
          Voltar para todos
        </Text>
      </RectButton>
      <Text>
        {params.name}... {"\n"} {params.id}
      </Text>
    </View>
  );
};

export default Character;
