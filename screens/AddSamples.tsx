import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Sidebar from './SideBar';
import Header from './Header';
import ProgressBar from './ProgressBar';

const Orders = ({ navigation }) => {
  const [id, setId] = useState("xxxxxx");
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
      <ProgressBar />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Add Samples</Text>
          <Text style={styles.subtitle}>Add multiple samples here.</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sampleRow}>
            <Text style={styles.sampleId}>Sample ID: {id}</Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
                <Ionicons name="copy" size={24} color="#007bff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
                <Ionicons name="pencil" size={24} color="#28a745" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
                <MaterialIcons name="delete" size={24} color="#dc3545" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.addButton} onPress={() => {}}>
            <Text style={styles.addButtonText}>+ Add Another Sample</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton} onPress={() => {}}>
            <Text style={styles.uploadButtonText}>Upload Excel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.orderButtons}>
        <TouchableOpacity style={[styles.button, styles.orderBtn]} onPress={() => {navigation.navigate('CreateOrder')}}>
          <Text style={styles.orderButtonText}>Order Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.selectTestBtn]} onPress={() => {navigation.navigate('SelectTests')}}>
          <Text style={styles.buttonText}>Select Test</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 80, // Add padding to prevent content from being hidden by the buttons
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  sampleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sampleId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
  },
  buttonsContainer: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton:{
    backgroundColor:'transparent',
    borderColor:'#007bff',
    borderWidth:2,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  addButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadButtonText:{
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'

  },
  uploadButton:{
    borderStyle:'dashed',
    borderWidth:2,
    borderColor:'#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',
    color:"#007bff",
    fontSize:16,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop:15,
  },
  orderButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 }, // Shadow on the top
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  orderBtn: {
    flex: 1,
    marginRight: 10,
    backgroundColor: 'transparent',
    borderColor: '#007bff',
    borderWidth: 2,
  },
  selectTestBtn: {
    flex: 1,
    marginLeft: 10,
  },
  orderButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Orders;
