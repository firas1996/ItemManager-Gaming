import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Screens/Home";
import FavUsers from "./Screens/FavUsers";
import FavUsersProvider from "./store/context/FavUsersContext";
import Drawer from "./navigation/Drawer";

export default function App() {
  return (
    <>
      <FavUsersProvider>
        <NavigationContainer>
          <Drawer />
        </NavigationContainer>
      </FavUsersProvider>
      <StatusBar style="auto" />
    </>
  );
}
