import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Header from './Header';
import Sidebar from './SideBar'; // Ensure this import matches your file naming
import ProgressBar from './ProgressBar';

const tests = [
  { id: '1', name: 'Test 1', details: 'Test details 1', price: '$50' },
  { id: '2', name: 'Test 2', details: 'Test details 2', price: '$70' },
  { id: '3', name: 'Test 3', details: 'Test details 3', price: '$90' },
];

const SelectTests = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredTests = tests.filter(test =>
    test.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTestItem = ({ item }) => (
    <View style={styles.testCard}>
      <View style={styles.imageOuter}>
        <Text style={styles.imageText}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.testInfo}>
        <Text style={styles.testName}>{item.name}</Text>
        <Text style={styles.testDetails}>{item.details}</Text>
      </View>
      <View style={styles.testPriceContainer}>
        <Text style={styles.testPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Sidebar
        navigation={navigation}
        sidebarVisible={sidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <Header toggleSidebar={toggleSidebar} />
      <ProgressBar />

      <View style={styles.content}>
        <Text style={styles.mainHead}>Select Tests</Text>
        <Text style={styles.subText}>Choose the tests you want to perform.</Text>
        <TextInput 
          placeholder='Search tests'
          style={styles.searchInput}
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <FlatList
          data={filteredTests}
          renderItem={renderTestItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.testList}
        />
      </View>

      <View style={styles.stickyBtnGroup}>
        <TouchableOpacity
          style={[styles.button, styles.orderBtn]}
          onPress={() => navigation.navigate('AddSamples')}
        >
          <Text style={styles.orderButtonText}>Samples</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.selectTestBtn]}
          onPress={() => navigation.navigate('ReviewOrder')}
        >
          <Text style={styles.buttonText}>Review Order</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backText}>Back To Custom Portal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    position:'absolute',
    top:200,
    width:'100%',
  },
  mainHead: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
    color: '#343a40',
  },
  subText: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 16,
    color: '#6c757d',
  },
  searchInput: {
    width: '100%',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical:15,
    fontSize: 18,
    fontWeight:500,
  },
  testList: {
    paddingBottom: 120, // Extra space for sticky buttons
  },
  testCard: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
  imageOuter: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 35,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  testInfo: {
    flex: 1,
    marginRight: 15,
  },
  testName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#343a40',
  },
  testDetails: {
    fontSize: 14,
    color: '#6c757d',
  },
  testPriceContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  testPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007bff',
  },
  backText: {
    marginTop: 20,
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  stickyBtnGroup: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
  orderBtn: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#ffffff',
    borderColor: '#007bff',
    borderWidth: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectTestBtn: {
    flex: 1,
    marginLeft: 10,
  },
  orderButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default SelectTests;
