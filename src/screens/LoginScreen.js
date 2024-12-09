import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({navigation}) => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require('../../assets/images/Top-Login.png')}
          style={styles.topImage}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.homeText}>Hello</Text>
      </View>
      <View>
        <Text style={styles.signinText}>Login to your account</Text>
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
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Pressable onPress={() => navigation.navigate('Signup')}  style={styles.signInContainer}>
        <Text style={styles.signInButtonText}>Login</Text>
        <Image
          style={styles.signInImage}
          source={require('../../assets/images/Arrow.png')}></Image>
      </Pressable>
      <Text
        style={styles.createAccount}
        onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Create
      </Text>
      <View style={styles.bottomImageContainer}>
        <ImageBackground
          source={require('../../assets/images/Bottom-SignIn.png')}
          style={styles.bottomImage}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

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
  },
  topImage: {
    width: '100%',
    height: 130,
  },
  homeText: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: '500',
    marginTop: 100,
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
  forgotPassword: {
    width: '80%',
    fontSize: 15,
    textAlign: 'right',
    color: '#bebebe',
  },
  signInContainer: {
    marginTop: 50,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  signInButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10,
    // flexDirection: 'row',

  },
  signInImage: {
    width: '20%',
    height: 40,
   

  },
  createAccount: {
    width: '80%',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 100,
    fontWeight: 'bold',
  },
  bottomImageContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  bottomImage: {
    height: 270,
    width: 200,
  },
});
