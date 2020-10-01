import React from "react";

import { NavigationContainer } from "@react-navigation/native";
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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Stack.Screen
          name="ListCharacters"
          component={ListCharacters}
          options={{
            title: "Personagens",
          }}
        />
        <Stack.Screen
          name="Personagem"
          component={Character}
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
