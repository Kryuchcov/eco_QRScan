// App.js

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IniciarSesion from "./src/Components/IniciarSesion";
import CrearCuenta from "./src/Components/CrearCuenta";
import PrincipalUser from "./src/Components/PrincipalUser";
import QRScanner from "./src/Components/QRScanner";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#3740FE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="CrearCuenta"
        component={CrearCuenta}
        options={{ title: "CrearCuenta" }}
      />
      <Stack.Screen
        name="IniciarSesion"
        component={IniciarSesion}
        options={({ title: "IniciarSesion" }, { headerLeft: null })}
      />
      <Stack.Screen
        name="PrincipalUser"
        component={PrincipalUser}
        options={({ title: "Perfil" }, { headerLeft: null })}
      />
      <Stack.Screen
        name="QRScanner"
        component={QRScanner}
        options={({ title: "QRScanner" }, { headerLeft: null })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
