import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          headerMode="none"
          screenOptions={() => ({
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
          })}
        >
          <Stack.Screen
            name="ListCharacters"
            component={ListCharacters}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Personagem"
            component={Character}
            options={({ route }) => ({
              title: route.params.name.substr(0, 14),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Index;
