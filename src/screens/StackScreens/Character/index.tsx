import React from "react";
import { Text, StatusBar } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CharactersDetails } from "./interfaces";
import SafeAreaView from "react-native-safe-area-view";
type RouteParams = {
  DetailsCharacter: CharactersDetails;
};

const Character = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<RouteParams, "DetailsCharacter">>();

  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView style={[{ backgroundColor: "brown" }]}>
      <StatusBar backgroundColor="brown" />
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
        {params.description}... {"\n"} {params.id}
      </Text>
    </SafeAreaView>
  );
};

export default Character;
