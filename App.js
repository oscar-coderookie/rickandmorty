import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, StyleSheet,LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// imports screens
import CharactersSection from "./components/Characters/Characters";
import DetailsSection from "./components/CharactersDetails/Details";
import HomeScreen from "./components/Home/Home";
import PlanetsSection from "./components/Planets/Planets";
import EpisodesSection from "./components/Episodes/Episodes";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(['Setting a timer for a long period of time']);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        animationEnabled={true}
        initialRouteName="Home"
        screenOptions={{ title: "Rick and Morty App", presentation: "transparentModal" }}
      >
        <Stack.Screen
          style={styles.mainScreen}
          name="Dashboard"
          component={HomeScreen}
          options={{
            headerTintColor: "#00B0C8",
            headerStyle: { backgroundColor: "#B9D33D" },
            headerTitle: "Home - Rick and Morty",
          }}
        />
        <Stack.Screen
          style={styles.mainScreen}
          name="Characters"
          component={CharactersSection}
          options={{
            headerTintColor: "#00B0C8",
            headerStyle: { backgroundColor: "#B9D33D" },
            headerTitle: "Characters - Rick and Morty",
          }}
        />
        <Stack.Screen 
        style={styles.mainScreen} 
        name="Details" 
        component={DetailsSection}
        options={{
          headerTintColor: '#00B0C8',
          headerStyle: { backgroundColor: '#B9D33D' },
          headerTitle: "Bio - Rick and Morty"
        }}
         />
         <Stack.Screen 
        style={styles.mainScreen} 
        name="Planets" 
        component={PlanetsSection}
        options={{
          headerTintColor: '#00B0C8',
          headerStyle: { backgroundColor: '#B9D33D' },
          headerTitle: "Planets - Rick and Morty"
        }}
         />
         <Stack.Screen 
        style={styles.mainScreen} 
        name="Episodes" 
        component={EpisodesSection}
        options={{
          headerTintColor: '#00B0C8',
          headerStyle: { backgroundColor: '#B9D33D' },
          headerTitle: "Episodes - Rick and Morty"
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    width: "100%",
    height: "100%",
  },
});

export default App;
