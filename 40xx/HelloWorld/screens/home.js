import React from "react";
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import Avatar from '../components/avatar.js';
import DetailsContainer from '../components/DetailsContainer.js';

const Home = ({navigation}) => {
    function navigateSignIn() {
        navigation.navigate('SignIn');
    }
    function navigateSignUp() {
        navigation.navigate('SignUp');
    }
    return (
        <SafeAreaView style={styles.container}>
        <Avatar/>
        <DetailsContainer/>
            <Button title={"Sign in"} onPress={navigateSignIn}/>
            {/*<Button title={"Sign up"} onPress={navigateSignUp}/>*/}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    }
});

export default Home;