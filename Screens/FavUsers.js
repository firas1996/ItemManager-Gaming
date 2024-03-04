import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import UserItem from "../Components/UserItem";
import { FavContextStore } from "../store/context/FavUsersContext";

const FavUsers = () => {
  const favCTX = useContext(FavContextStore);
  const favList = favCTX.users.filter((user) => {
    return user.isFav == true;
  });
  return (
    <View>
      <ScrollView>
        {favList.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FavUsers;

const styles = StyleSheet.create({});
