import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomButton from './Components/Button';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ABC</Text>
      <CustomButton
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      ></CustomButton>
      <CustomButton
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      ></CustomButton>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
