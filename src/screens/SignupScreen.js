// src/screens/LoginScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require("../../assets/images/Top-Signup.png")} style={styles.topImage}></Image>
      </View>
      <View style={styles.loginButton}>
        <Button title="Go to Login"
        onPress={() => navigation.navigate('Login')}
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
        width: '100%',
        height: 130,
    },
    loginButton: {
        marginTop: 30,
        width: '60%',
        alignItems: 'center',
        
    }
});
