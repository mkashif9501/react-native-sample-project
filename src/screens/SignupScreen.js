// src/screens/LoginScreen.js

import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import CustomButton from './Components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupScreen = ({navigation}) => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require('../../assets/images/Top-Signup.png')}
          style={styles.topImage}></Image>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.homeText}>Create account</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="user" size={24} style={styles.userIcon} />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#9A9A9A"
          style={styles.textInput}
        />
      </View>
      <View style={styles.passwordContainer}>
        <Icon name="lock" size={24} style={styles.userIcon} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
          placeholderTextColor="#9A9A9A"
          style={styles.textInput}
        />
      </View>
      <View style={styles.emailContainer}>
        <Icon name="envelope" size={20} style={styles.userIcon} />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#9A9A9A"
          style={styles.textInput}
        />
      </View>
      <View style={styles.mobileNumberContainer}>
        <Icon name="mobile" size={35} style={styles.userIcon} />
        <TextInput
          placeholder="Mobile"
          placeholderTextColor="#9A9A9A"
          style={styles.textInput}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.loginContainer}>
        <Text style={styles.loginButtonText}>Sign In</Text>
        <Image
          style={styles.loginImage}
          source={require('../../assets/images/Arrow.png')}></Image>
      </Pressable>
      <Text
        style={styles.createAccount}
        onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
      <View style={styles.bottomImageContainer}>
        <ImageBackground
          source={require('../../assets/images/Bottom-Login.png')}
          style={styles.bottomImage}
        />
      </View>
      
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  topImage: {
    width: '70%',
    height: 110,
  },
  homeText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    marginTop: 50,
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
  emailContainer: {
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
  mobileNumberContainer: {
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
  loginContainer: {
    marginTop: 50,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10,
    // flexDirection: 'row',
  },
  loginImage: {
    width: '20%',
    height: 40,
  },
  loginButton: {
    marginTop: 30,
    width: '60%',
    alignItems: 'center',
  },
  createAccount: {
    width: '80%',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
  },
  bottomImageContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  bottomImage: {
    height: 240,
    width: 170,
  },
  
});
