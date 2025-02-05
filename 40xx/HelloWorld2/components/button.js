import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({title}) => {
    return (
        <TouchableOpacity style = {styles.button}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'rgb(217,160,160)',
        margin: 5,
    }
});

export default Button;