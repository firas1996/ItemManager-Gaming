import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import FavUsers from "../Screens/FavUsers";

const Stack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="FavUsers" component={FavUsers} />
    </stack.Navigator>
  );
};

export default Stack;

const styles = StyleSheet.create({});
