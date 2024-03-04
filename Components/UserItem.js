import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FavContextStore } from "../store/context/FavUsersContext";
const UserItem = ({ user }) => {
  // const [isFav, setIsFav] = useState(false);
  const favCTX = useContext(FavContextStore);
  const changeIcon = () => {
    // if (isFav == true) {
    //   setIsFav(false);
    // } else {
    //   setIsFav(true);
    // }
    favCTX.setFav(user.id);
  };
  return (
    <View key={user.id} style={styles.item}>
      <Text style={styles.itemTXT}>{user.value}</Text>
      <Pressable onPress={changeIcon}>
        <Ionicons
          name={user.isFav ? "star" : "star-outline"}
          size={28}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#0219c9",
    marginVertical: 6,
    height: 48,
    borderRadius: 16,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  itemTXT: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
