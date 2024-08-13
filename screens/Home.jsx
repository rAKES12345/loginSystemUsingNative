import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [pressedButton, setPressedButton] = useState(null);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handlePressIn = (buttonName) => {
    setPressedButton(buttonName);
  };

  const handlePressOut = () => {
    setPressedButton(null);
  };

  return (
    <View style={styles.container}>
      {sidebarVisible && (
        <View style={styles.sideBar}>
          <Pressable
            style={[
              styles.sideBarBtn,
              pressedButton === 'Home' && styles.sideBarBtnPressed
            ]}
            onPressIn={() => handlePressIn('Home')}
            onPressOut={handlePressOut}
            onPress={() => setSidebarVisible(!sidebarVisible)}
          >
            <Text style={styles.sideBarBtnText}>Home</Text>
          </Pressable>
          <Pressable
            style={[
              styles.sideBarBtn,
              pressedButton === 'Create Order' && styles.sideBarBtnPressed
            ]}
            onPressIn={() => handlePressIn('Create Order')}
            onPressOut={handlePressOut}
            onPress={() => setSidebarVisible(!sidebarVisible)}
          >
            <Text style={styles.sideBarBtnText}>Create Order</Text>
          </Pressable>
          <Pressable
            style={[
              styles.sideBarBtn,
              pressedButton === 'Orders' && styles.sideBarBtnPressed
            ]}
            onPressIn={() => handlePressIn('Orders')}
            onPressOut={handlePressOut}
            onPress={() => setSidebarVisible(!sidebarVisible)}
          >
            <Text style={styles.sideBarBtnText}>Orders</Text>
          </Pressable>
          <Pressable
            style={[
              styles.sideBarBtn,
              pressedButton === 'Invoices' && styles.sideBarBtnPressed
            ]}
            onPressIn={() => handlePressIn('Invoices')}
            onPressOut={handlePressOut}
            onPress={() => setSidebarVisible(!sidebarVisible)}
          >
            <Text style={styles.sideBarBtnText}>Invoices</Text>
          </Pressable>
          <Pressable
            style={[
              styles.sideBarBtn,
              pressedButton === 'Reports' && styles.sideBarBtnPressed
            ]}
            onPressIn={() => handlePressIn('Reports')}
            onPressOut={handlePressOut}
            onPress={() => setSidebarVisible(!sidebarVisible)}
          >
            <Text style={styles.sideBarBtnText}>Reports</Text>
          </Pressable>
          <Pressable
            style={[
              styles.sideBarBtn,
              pressedButton === 'Settings' && styles.sideBarBtnPressed
            ]}
            onPressIn={() => handlePressIn('Settings')}
            onPressOut={handlePressOut}
            onPress={() => setSidebarVisible(!sidebarVisible)}
          >
            <Text style={styles.sideBarBtnText}>Settings</Text>
          </Pressable>
        </View>
      )}
      <View style={styles.heading}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo} />
        <Text style={styles.text}>Prabha Tech</Text>
      </View>
      <View style={styles.menuButton}>
        <Pressable onPress={toggleSidebar}>
          <Icon name="bars" size={30} color="#000" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#e0e0e0',
    alignItems: 'flex-start',
  },
  sideBar: {
    width: 150,
    padding: 10,
    paddingVertical: 30,
    backgroundColor: '#2f3f59',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 2,
  },
  sideBarBtn: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'transparent',
  },
  sideBarBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  sideBarBtnPressed: {
    backgroundColor: '#1a2b41',
    borderRadius: 5,
  },
  heading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    width: '100%',
    zIndex: 1,
    position: 'relative',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    right: 10,
    zIndex: 1,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
