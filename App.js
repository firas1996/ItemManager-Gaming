import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

let id = 1;
export default function App() {
  const [users, setUsers] = useState([]);
  const [impData, setImpData] = useState("");
  const addNew = () => {
    if (impData != "") {
      setUsers([{ value: impData, id: id }, ...users]);
      id++;
      setImpData("");
    }
  };
  console.log(users);
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
            return (
              <View key={user.id} style={styles.item}>
                <Text style={styles.itemTXT}>{user.value}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
  elems: {
    width: "100%",
    flex: 5,
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
  item: {
    backgroundColor: "#0219c9",
    marginVertical: 6,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  itemTXT: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
