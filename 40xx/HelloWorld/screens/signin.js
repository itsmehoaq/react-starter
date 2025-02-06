import React from 'react';
import {Text, Image, View, Button, StyleSheet} from 'react-native';

const SignIn = ({navigation}) => {
    function navigate(){
        navigation.navigate('SignUp');
    }
    return (
        <View style={styles.mainView}>
            <Text>Sign in</Text>
            <Button title={'Click here to Sign up'}
            onPress={navigate}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        // color: #ababab,
    }
})

export default SignIn