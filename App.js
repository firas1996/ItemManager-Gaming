import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Screens/Home";
import FavUsers from "./Screens/FavUsers";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="FavUsers" component={FavUsers} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
