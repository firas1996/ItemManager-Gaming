import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import UserItem from "../Components/UserItem";
let id = 1;
const Home = () => {
  const [users, setUsers] = useState([]);
  const [impData, setImpData] = useState("");
  const addNew = () => {
    if (impData != "") {
      setUsers([{ value: impData, id: id }, ...users]);
      id++;
      setImpData("");
    }
  };

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
      <View style={styles.elems}>
        <ScrollView>
          {users.map((user, index) => {
            return <UserItem user={user} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
