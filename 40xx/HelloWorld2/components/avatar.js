import React from 'react'
import {View, StyleSheet} from "react-native";

const Avatar = () => {
    return (
        <View style={styles.avatar}></View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'green',
    }
})

export default Avatar;