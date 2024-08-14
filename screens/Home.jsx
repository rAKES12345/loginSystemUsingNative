import React, { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Sidebar from '../screens/SideBar'; // Ensure the correct path
import Header from '../screens/Header';   // Ensure the correct path

const Home = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.container}>
      <Text>Home Component </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#e0e0e0',
  },
});

export default Home;
