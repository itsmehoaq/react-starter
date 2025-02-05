import React from 'react';
import {View,StyleSheet} from 'react-native';

const Avatar = ()=>{
    return
        <View style={styles.avatarComponent}></View>
    
};

const styles = StyleSheet.create({
    avatarComponent: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: 'blue',
    }
});

export default Avatar