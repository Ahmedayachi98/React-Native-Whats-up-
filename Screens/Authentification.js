import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

import firebase from '../Config';
import { useState } from 'react';
const auth=firebase.auth()

export default function Authentification(props) {
  var  email, pwd;   
  //const [email ,setemail]=useState("") 

    return (
        <ImageBackground source={require("../assets/back.jpg")} style={styles.container}>
            <View style={{
                backgroundColor: "#0003",
                width: "95%",
                alignItems: "center",
                padding: 5,
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 8
            }}>

                <Text style={{
                    fontSize: 32,
                    color: "white",
                    fontWeight: "bold",
                    fontStyle: "italic"
                }}>Welcome</Text>

                <TextInput onChangeText={(ch)=>{email = ch}} keyboardType='email-address' placeholder='email' style={styles.textinput}></TextInput>
                <TextInput onChangeText={(ch)=>{pwd = ch}} secureTextEntry={true} placeholder='password' style={styles.textinput}></TextInput>

                <View style={{
                    flexDirection: "row",
                    width: "55%",
                    justifyContent: "space-between"
                }}>
                    <Button 
                        title='Connecter' onPress={() => {
                        auth.signInWithEmailAndPassword(email, pwd)
                        .then(()=>{props.navigation.navigate("accueil")})
                        .catch((err)=>{alert(err)});
                        }}
                        ></Button>
                    <Button title='Quitter' onPress={() => {BackHandler.exitApp();}}></Button>
                </View>


                <Text onPress={()=>{
                    props.navigation.navigate("newaccount");
                }} style={{
                    textAlign: "center",
                    width: "95%",
                    fontSize: 14,
                    fontStyle: "italic",
                    color: "white",
                    marginTop: 15,
                }}>Créer un nouveau compte</Text>

            </View>
            <StatusBar style="light" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textinput: {
        backgroundColor: "white",
        width: "80%",
        height: 48,
        margin: 10,
        textAlign: "center",
        color: "darkgray",
        fontSize: 14,
        fontWeight: "bold",
        borderRadius: 7,
    }
});
