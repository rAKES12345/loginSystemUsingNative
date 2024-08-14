// components/Sidebar.js
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Sidebar = ({ navigation, sidebarVisible, toggleSidebar }) => {
  const [pressedButton, setPressedButton] = React.useState(null);

  const handlePressIn = (buttonName) => {
    setPressedButton(buttonName);
  };

  const handlePressOut = () => {
    setPressedButton(null);
  };

  return (
    <>
      {sidebarVisible && (
        <View style={styles.sideBar}>
          <Pressable
            style={styles.closeBtn}
            onPress={toggleSidebar}
          >
            <Icon name="times" size={30} color="#fff" />
          </Pressable>
          <Pressable
            style={[
              styles.sideBarBtn,
              styles.sideBarHomeBtn,
              pressedButton === 'Home' && styles.sideBarBtnPressed
            ]}
            onPressIn={() => handlePressIn('Home')}
            onPressOut={handlePressOut}
            onPress={() => {
              toggleSidebar();
              navigation.navigate('Home');
            }}
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
            onPress={() => {
              toggleSidebar();
              navigation.navigate('CreateOrder');
            }}
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
            onPress={() => {
              toggleSidebar();
              navigation.navigate('Orders'); // Ensure 'Orders' is a valid route
            }}
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
            onPress={() => {
              toggleSidebar();
              navigation.navigate('Invoices'); // Ensure 'Invoices' is a valid route
            }}
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
            onPress={() => {
              toggleSidebar();
              navigation.navigate('Reports'); // Ensure 'Reports' is a valid route
            }}
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
            onPress={() => {
              toggleSidebar();
              navigation.navigate('Settings'); // Ensure 'Settings' is a valid route
            }}
          >
            <Text style={styles.sideBarBtnText}>Settings</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  sideBar: {
    width: '100%',
    height: '100%',
    padding: 10,
    paddingVertical: 30,
    backgroundColor: '#2f3f59',
    position: 'absolute',
    justifyContent: 'center',
    gap: 16,
    alignItems: 'center',
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
  sideBarHomeBtn: {
    position: 'absolute',
    top: 20,
  },
  sideBarBtnPressed: {
    backgroundColor: '#1a2b41',
    borderRadius: 5,
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default Sidebar;
