import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MarvelContext, Marvel } from "./context/Marvel";

import ListCharacters from "./screens/StackScreens/ListCharacters";
import Character from "./screens/StackScreens/Character";

type RootStackParamList = {
  ListCharacters: undefined;
  Personagem: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const Index = () => {
  return (
    <SafeAreaProvider>
      <Marvel>
        <NavigationContainer>
          <Stack.Navigator
            headerMode="none"
            screenOptions={() => ({
              headerShown: false,
            })}
          >
            <Stack.Screen name="ListCharacters" component={ListCharacters} />
            <Stack.Screen
              name="Personagem"
              component={Character}
              options={({ route }) => ({
                title: route.params.name.substr(0, 14),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Marvel>
    </SafeAreaProvider>
  );
};

export default Index;
