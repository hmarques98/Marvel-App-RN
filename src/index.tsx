import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MarvelProvider } from "./context/Marvel";

import ListCharacters from "./screens/ListCharacters";
import Character from "./screens/CharacterDescription";

type RootStackParamList = {
  ListCharacters: undefined;
  Details: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const Index = () => {
  return (
    <SafeAreaProvider>
      <MarvelProvider>
        <NavigationContainer>
          <Stack.Navigator
            headerMode="none"
            screenOptions={() => ({
              headerShown: false,
            })}
          >
            <Stack.Screen name="ListCharacters" component={ListCharacters} />
            <Stack.Screen name="Details" component={Character} />
          </Stack.Navigator>
        </NavigationContainer>
      </MarvelProvider>
    </SafeAreaProvider>
  );
};

export default Index;
