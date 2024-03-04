import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Screens/Home";
import FavUsers from "./Screens/FavUsers";
import FavUsersProvider from "./store/context/FavUsersContext";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <FavUsersProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="FavUsers" component={FavUsers} />
          </Drawer.Navigator>
        </NavigationContainer>
      </FavUsersProvider>
      <StatusBar style="auto" />
    </>
  );
}
