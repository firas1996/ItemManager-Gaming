import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserItem from "../Components/UserItem";

const FavUsers = ({ route }) => {
  const { users, setFav } = route.params;
  return (
    <View>
      <ScrollView>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} setFav={setFav} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FavUsers;

const styles = StyleSheet.create({});
