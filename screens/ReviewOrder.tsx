import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header';
import Sidebar from './SideBar';
import ProgressBar from './ProgressBar';

const ReviewOrder = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [tests, setTests] = useState([
    { id: '1', name: 'Test 1', details: 'Test details 1', price: '$50', sampleSelected: '128' },
    { id: '2', name: 'Test 2', details: 'Test details 2', price: '$70', sampleSelected: '128' },
    { id: '3', name: 'Test 3', details: 'Test details 3', price: '$90', sampleSelected: '128' },
  ]);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleDelete = (id) => {
    setTests(tests.filter(test => test.id !== id));
  };

  // Calculate the total price
  const totalPrice = tests.reduce((total, test) => {
    const price = parseFloat(test.price.replace('$', ''));
    return total + price;
  }, 0);

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
        <Text style={styles.mainHead}>Review Order</Text>
        <Text style={styles.subText}>Review the tests you have selected before proceeding.</Text>
        <View style={{width:'100%',height:1,backgroundColor:'#808080'}}></View>

        {tests.map((test) => (
          <View key={test.id} style={styles.testCardOuter}>
            <View style={styles.testCard}>
              <View style={styles.imageOuter}>
                <Text style={styles.imageText}>{test.name.charAt(0)}</Text>
              </View>
              <View style={styles.testInfo}>
                <Text style={styles.testName}>{test.name}</Text>
                <Text style={styles.testDetails}>{test.details}</Text>
                <Text>{test.sampleSelected} samples Selected</Text>
              </View>
              <View style={styles.testPriceContainer}>
                <Text style={styles.testPrice}>{test.price}</Text>
              </View>
            </View>
            <View style={styles.editDeleteButtons}>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(test.id)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editButton} onPress={() => {/* Add edit action */}}>
                <Text style={styles.editButtonText}>Edit Test</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}


        
      </ScrollView>

      <View style={styles.lineSeparator} />

      <View style={styles.stickyBtnGroup}>
      <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>Total Price: ${totalPrice.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.orderBtn]}
          onPress={() => { navigation.navigate('AddSamples') }}>
          <Text style={styles.orderButtonText}>Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.selectTestBtn]}
          onPress={() => { navigation.navigate('OrderConfirmation') }}>
          <Text style={styles.buttonText}>Submit Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexGrow: 1, // Ensure the content container fills available space
    alignItems: 'center',
  },
  mainHead: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  subText: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 17,
    fontWeight: '600',
    color: '#666',
  },
  editDeleteButtons: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  lineSeparator: {
    height: 1,
    backgroundColor: '#ddd',
    width: '100%',
  },
  stickyBtnGroup: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
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
  testCardOuter:{
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
    marginVertical:5
  },
  testCard: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageOuter: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  testInfo: {
    flex: 1,
    marginRight: 10,
  },
  testName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  testDetails: {
    fontSize: 14,
    color: '#666',
  },
  testPriceContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  testPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  deleteButton: {
    padding: 5,
    backgroundColor: '',
  },
  editButton: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderColor: '#007bff',
    borderRadius: 5,
    borderWidth: 1,
  },
  deleteButtonText: {
    color: '#007bff',
  },
  editButtonText: {
    color: '#007bff',
  },
  backText: {
    marginTop: 40,
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalPriceContainer: {
    position:'absolute',
    bottom:90,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
  },
  totalPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign:'center',
  },
});

export default ReviewOrder;
