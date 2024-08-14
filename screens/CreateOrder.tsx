import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Sidebar from '../screens/SideBar';
import Header from '../screens/Header';

const CreateOrder = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.container}>
      <Sidebar 
        navigation={navigation} 
        sidebarVisible={sidebarVisible} 
        toggleSidebar={toggleSidebar} 
      />
      <Header toggleSidebar={toggleSidebar} />
      <View style={styles.content}>
        <Text>Create Orders Component</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateOrder;
