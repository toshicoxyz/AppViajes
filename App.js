import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Users from "./screens/Users";
import UserDetail from "./screens/UserDetail";
import CreateUsers from "./screens/CreateUsers";

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Crear Usuario" component={CreateUsers} />
      <Stack.Screen name="Usuarios" component={Users}/>
      <Stack.Screen name="Detalle de Usuario" component={UserDetail} />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>

    /* <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo!</Text>
      <StatusBar style="inverted" />
    </View> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
