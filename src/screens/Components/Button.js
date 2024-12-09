import { TouchableOpacity ,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={onPress}
    >
        <Text 
        style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width: '80%',
        backgroundColor: 'grey',
        borderRadius: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        // elevation: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})