import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrawerC = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 100 }}>
      <DrawerItem
        label="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Favs"
        onPress={() => {
          navigation.navigate("FavUsers");
        }}
      />
    </View>
  );
};

export default DrawerC;

const styles = StyleSheet.create({});
