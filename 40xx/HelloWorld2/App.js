import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './components/avatar';
import Button from './components/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World part 2!</Text>
      <StatusBar style="auto" />
      <Avatar />
      <Button title='Previous'/>
      <Button title='Next'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
