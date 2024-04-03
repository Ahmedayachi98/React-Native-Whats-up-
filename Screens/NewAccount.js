import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

import firebase from '../Config';
const auth=firebase.auth();

export default function NewAccount(props) {
  var email,pwd ,pwdconfirm;
  return (
    <ImageBackground source={require("../assets/back.jpg")} style={styles.container}>
      <View style={{
        backgroundColor:"#0003",
        width :"95%",
        alignItems:"center",
        padding :5,
        borderColor :"white",
        borderWidth: 1,
        borderRadius:8
      }}> 

        <Text style={{
          fontSize: 30,
          marginBottom:15,
          color: "white",
          fontWeight: "bold",
          fontStyle: "italic"
        }}>Creér un nouveau compte</Text>

        <TextInput onChangeText={(ch)=>{email=ch}} keyboardType='email-address' placeholder='email' style={styles.textinput}></TextInput>
        <TextInput onChangeText={(ch)=>{pwd=ch}} secureTextEntry={true} placeholder='password' style={styles.textinput}></TextInput>
        <TextInput onChangeText={(ch)=>{pwdconfirm=ch}} secureTextEntry={true} placeholder='Confirme password' style={styles.textinput}></TextInput>

        <View style={{
          flexDirection: "row",
          width: "55%",
          justifyContent: "space-between"
        }}>
          <Button title="S'inscrire" onPress={()=>{
            if(pwd === pwdconfirm && pwd.length >= 6)
            {
              auth.createUserWithEmailAndPassword(email, pwd)
              .then(()=>{props.navigation.replace("accueil")})
              .catch((err)=>{ alert(err) });
            }
          }}></Button>
          <Button title="Reture" onPress={()=>{props.navigation.goBack();}} ></Button>
        </View>



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
