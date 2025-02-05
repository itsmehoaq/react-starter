import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.avatar_container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image 
        style={{marginBottom:10}} 
        source={require('./assets/batman-avatar.png')}/>
        <Text style={{maxWidth:200}}>
          something something batmat quote something
        </Text>
      </View>
    </View>
    <View style={styles.details_container}>
      <View style={styles.items}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.data}>Detail</Text>
      </View>
      <View style={styles.items}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.data}>Detail</Text>
      </View>
      <View style={styles.items}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.data}>Detail</Text>
      </View>
      <View style={styles.items}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.data}>Detail</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  avatar_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  details_container: {
    backgroundColor: '#afafaf',
    flex: 0.6,
  },
  items: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flex: 0.25,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  label: {
    flex: 0.9,
    color: 'orange',
    fontSize: 32,
    fontWeight: 700,
  },
  data: {
    fontSize: 24,
  }
});
