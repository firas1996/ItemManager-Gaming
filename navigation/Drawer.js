import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";
import FavUsers from "../Screens/FavUsers";
import Stack from "./Stack";
import DrawerC from "./DrawerC";

const Drawer = () => {
  const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator drawerContent={DrawerC}>
      <drawer.Screen name="Stack" component={Stack} />
    </drawer.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
