import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Favourities from "./pages/Favourities";
import Jobs from './pages/Jobs';
import Details from './pages/Details';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabBottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="JobsPage" component={Jobs} />
      <Tab.Screen name="FavouritiesPage" component={Favourities} />
    </Tab.Navigator>
  )

}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomNavigation" component={TabBottom} options={{headerShown:false}}/>
        <Stack.Screen name="JobDetails" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;