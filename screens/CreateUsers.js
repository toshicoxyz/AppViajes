import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { addDoc, collection, CollectionReference } from "firebase/firestore";
import db,{firebase} from "../database/firebase";

export const CreateUsers = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === '') {
      Alert.alert('Porfavor proporcione un nombre del usuario') 
      console.log("DB: ", db);     
    }
    else {
      try {
        firebase.db.collection('users').add({
          name: state.name,
          email: state.email,
          phone: state.phone,
        })
        console.log("Guardado ID ");
      } catch (error) {
        console.log("Error : ", error);
      }
      
      /* try {
        const docRef = await addDoc(CollectionReference(db, "users"), {
          name: state.name,
          email: state.email,
          phone: state.phone,
        });
        console.log("Guardado ID: ", docRef.id);
      } catch (error) {
        console.log("Error : ", error);
        console.log("State: ", state);
      } */
    }
  }
  
  return (
    <ScrollView>
      <View style={style.groupInput}>
        <TextInput
          placeholder="Nombre de Usuario"
          onChangeText={(value) => handleChangeText("name", value)}
        ></TextInput>
      </View>
      <View style={style.groupInput}>
        <TextInput
          placeholder="Correo Electronico"
          onChangeText={(value) => handleChangeText("email", value)}
        ></TextInput>
      </View>
      <View style={style.groupInput}>
        <TextInput
          placeholder="Numero de Celular"
          onChangeText={(value) => handleChangeText("phone", value)}
          
        ></TextInput>
      </View>
      <View style={style.groupInput}>
        <Button
          title="Guardar Usuario"
          onPress={() => saveNewUser()}
        ></Button>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  groupInput: {
    flex: 1,
    margin: "auto",
    padding: 20,
    paddingHorizontal: 30,
  },
});

export default CreateUsers;
