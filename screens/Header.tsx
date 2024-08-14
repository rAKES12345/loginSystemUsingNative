// components/Header.js
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ toggleSidebar }) => {
  return (
    <View style={styles.heading}>
      <Pressable
        style={styles.menuButton}
        onPress={toggleSidebar}
        accessibilityLabel="Open Sidebar"
        accessibilityHint="Opens the sidebar menu"
      >
        <Icon name="bars" size={30} color="blue" />
      </Pressable>
      <Text style={styles.text}>Prabha Tech</Text>
      <Image source={require('../assets/logo.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    height: 50,  // Set the height to 50px
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  // Center items vertically
    backgroundColor: '#ffffff',
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 8,
    opacity: 0.5, // Make the image transparent
  },
  menuButton: {
    position: 'absolute',
    left: 10,
    top: 10,  // Adjust as necessary to vertically center
    zIndex: 1,
  },
});

export default Header;
