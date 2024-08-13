import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.container}>
      {sidebarVisible && (
        <View style={styles.sideBar}>
          <View style={styles.sideBarBtn}>
            <Button title="Home" onPress={() => alert('Download 1 Pressed')} />
          </View>
          <View style={styles.sideBarBtn}>
            <Button title="Create Order" onPress={() => alert('Download 2 Pressed')} />
          </View>
          <View style={styles.sideBarBtn}>
            <Button title="Orders" onPress={() => alert('Download 2 Pressed')} />
          </View>
          <View style={styles.sideBarBtn}>
            <Button title="Invoices" onPress={() => alert('Download 2 Pressed')} />
          </View>
          <View style={styles.sideBarBtn}>
            <Button title="Reports" onPress={() => alert('Download 2 Pressed')} />
          </View>
          <View style={styles.sideBarBtn}>
            <Button title="Settings" onPress={() => alert('Download 2 Pressed')} />
          </View>
        </View>
      )}
      <View style={styles.heading}>
        <Text style={styles.text}>Prabha Tech</Text>
      </View>
      <View style={styles.menuButton}>
        <Button title="Menu" onPress={toggleSidebar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#e0e0e0',
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
    marginVertical: 20,
    zIndex: 2,
    backgroundColor:'transparent',
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
    backgroundColor: '#fff',
    zIndex: 1,
  },
  navigationButtons: {
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default HomeScreen;
