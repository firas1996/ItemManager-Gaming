import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import UserItem from "../Components/UserItem";
import { useNavigation } from "@react-navigation/native";
import { FavContextStore } from "../store/context/FavUsersContext";

const Home = () => {
  const [impData, setImpData] = useState("");

  const navigation = useNavigation();
  const favCTX = useContext(FavContextStore);

  const addNew = () => {
    if (impData != "") {
      favCTX.saveUser(impData);
      setImpData("");
    }
  };
  // const setFav = (id) => {
  //   setUsers(
  //     users.map((item) => {
  //       return item.id == id ? { ...item, isFav: !item.isFav } : item;
  //     })
  //   );
  // };
  // const favList = users.filter((user) => {
  //   return user.isFav == true;
  // });

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.imp}
          value={impData}
          onChangeText={setImpData}
        />
        <TouchableOpacity style={styles.btn} onPress={addNew}>
          <Text style={styles.btnTXT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "96%", flex: 1 }}>
        <Button
          title="Go To FavUsers"
          onPress={() => {
            navigation.navigate("FavUsers");
          }}
        />
      </View>
      <View style={styles.elems}>
        <ScrollView>
          {favCTX.users.map((user, index) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flex: 1,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  imp: {
    borderWidth: 1,
    borderColor: "gray",
    flex: 3,
    height: 40,
    borderRadius: 12,
  },
  btn: {
    flex: 1,
    backgroundColor: "#9268ed",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: 40,
    borderRadius: 12,
  },
  btnTXT: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  elems: {
    width: "100%",
    flex: 5,
    paddingHorizontal: 10,
  },
});
