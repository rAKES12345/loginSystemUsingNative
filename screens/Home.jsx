import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.container}>
      {sidebarVisible && (
        <View style={styles.sideBar}>
          <TouchableOpacity style={styles.sideBarBtn} onPress={() => alert('Home Pressed')}>
            <Text style={styles.sideBarBtnText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideBarBtn} onPress={() => alert('Create Order Pressed')}>
            <Text style={styles.sideBarBtnText}>Create Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideBarBtn} onPress={() => alert('Orders Pressed')}>
            <Text style={styles.sideBarBtnText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideBarBtn} onPress={() => alert('Invoices Pressed')}>
            <Text style={styles.sideBarBtnText}>Invoices</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideBarBtn} onPress={() => alert('Reports Pressed')}>
            <Text style={styles.sideBarBtnText}>Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideBarBtn} onPress={() => alert('Settings Pressed')}>
            <Text style={styles.sideBarBtnText}>Settings</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.heading}>
        <Text style={styles.text}>Prabha Tech</Text>
      </View>
      <View style={styles.menuButton}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Icon name="bars" size={30} color="#000" />
        </TouchableOpacity>
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
    alignItems:'start',
  },
  sideBar: {
    width: 150,
    padding: 10,
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
  heading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    width: '100%',
    zIndex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    right: 10,
    zIndex: 1,
  },
});

export default HomeScreen;
