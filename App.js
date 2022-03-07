import 'react-native-gesture-handler';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import { HomeScreen } from "./app/screens/HomeScreen";


import HeaderBG from './assets/images/bg-cover-1.svg'
import HeaderLogo from './assets/images/logo.svg'
//Constantes de navegación
const NativeStackNav = createNativeStackNavigator();

//Rutas de navegación 

function RootNav() {
  return (
    <NativeStackNav.Navigator initialRouteName="HOME">
      <NativeStackNav.Screen
        name="HOME"
        component={HomeScreen}
        options={{ headerShown: false }}
      ></NativeStackNav.Screen>
        
      </NativeStackNav.Navigator>
  );
}

const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
