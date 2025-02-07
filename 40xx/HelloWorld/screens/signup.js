import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {UserRegistration} from '../components/userRegistration';

const SignUp = ({navigation}) => {
    function navigateSignIn() {
        navigation.navigate('SignIn');
    }

    return (<View style={styles.mainView}>
            <Text>Sign up</Text>
            <UserRegistration />
            <Button title={'Click here to Sign in'}
                    onPress={navigateSignIn}/>
        </View>)
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 20, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }, textStyle: {
        // color: #ababab,
    }
})

export default SignUp