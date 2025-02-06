import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const SignUp = ({navigation}) => {
    function navigateSignIn() {
        navigation.navigate('SignIn');
    }

    function navigateHome() {
        navigation.navigate('Home');
    }

    return (<View style={styles.mainView}>
            <Text>Sign up</Text>
            <Button text={'Click here to Sign in'}
                    onPress={navigateSignIn}/>
            {/*<Button text={'Return to Home'}*/}
            {/*        onPress={navigateHome}/>*/}
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