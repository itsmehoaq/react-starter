import {StyleSheet, Image, Text, View} from "react-native";
import React from "react";
const Avatar = () => {
    return (
        <View style={styles.avatar_container}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{marginBottom:10}}
                    source={require('../assets/batman-avatar.png')}/>
                <Text style={{maxWidth:200}}>
                    something something quote something
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar_container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.4,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    }
})

export default Avatar;