// src/screens/LoginScreen.js

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, TextInput, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from './Components/Button';
const LoginScreen = ({navigation}) => {
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
    <View style={styles.container} >
      <View style={styles.topImageContainer}>
        <Image
          source={require('../../assets/images/Top-Login.png')}
          style={styles.topImage}></Image>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.homeText}>Hello</Text>
      </View>
      <View>
        <Text style={styles.signinText}>Sign in to your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="user" size={24} style={styles.userIcon} />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#9A9A9A"
          style={styles.textInput}></TextInput>
      </View>
      <View style={styles.passwordContainer}>
        <Icon name="lock" size={24} style={styles.userIcon} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
          placeholderTextColor="#9A9A9A"
          style={styles.textInput}></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Login"
          onPress={() => navigation.navigate('Home')}></CustomButton>
      </View>
      {/* <View style={styles.bottomImageContainer}>
        <Image source={require("../../assets/images/Bottom-Login.png")} style={styles.bottomImage}></Image>
      </View> */}
    </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    // marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // zIndex: 1,
  },
  topImage: {
    width: '100%',
    height: 130,
  },
  homeText: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: '500',
    marginTop: 50,
  },
  signinText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 50,
    borderRadius: 20,
    elevation: 10,
    paddingHorizontal: 15,
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
    overflow: 'hidden',
  },
  userIcon: {
    color: '#9A9A9A',
  },
  textInput: {
    color: '#000',
    letterSpacing: 2,
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    padding: 10,
  },
  passwordContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 50,
    borderRadius: 20,
    elevation: 10,
    paddingHorizontal: 15,
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bottomImage: {
    position: 'absolute',
    top: 0,
    // width: '100%',
    // height: 130,
    // resizeMode: 'contain'
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  loginButton: {
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 30,
  },
});
