import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, ScrollView, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeScreen/>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#f2f2f7',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop : StatusBar.currentHeight,
  },
});
