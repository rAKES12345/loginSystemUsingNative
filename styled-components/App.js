import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'; // SafeAreaView added
import Login from './screens/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
