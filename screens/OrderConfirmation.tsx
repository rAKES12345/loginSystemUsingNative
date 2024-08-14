import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header';
import Sidebar from './SideBar';
import ProgressBar from './ProgressBar';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the specific icon set

const OrderConfirmation = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const products = [
    { id: '1', name: 'Acidity Test', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati aspernatur atque.', samplesCount: '128', price: 26 },
    { id: '2', name: 'Cholesterol Test', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati aspernatur atque.', samplesCount: '75', price: 35 },
  ];

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Calculate total price
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

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
        <Text style={styles.mainHead}>Order Confirmation</Text>
        <View style={styles.checkContainer}>
          <Icon name="check" size={30} color="white" style={styles.icon} />
        </View>
        <Text style={styles.subText}>
          Your order has been submitted!
          You'll receive a confirmation email shortly.
          Print labels or chain of custody below.
        </Text>

        <View style={styles.orderSummary}>
          <Text style={styles.orderSummaryTitle}>Order Summary</Text>
          {products.map((product) => (
            <View key={product.id} style={styles.productContainer}>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <Text>{product.samplesCount} samples selected</Text>
              </View>
              <View style={styles.productPriceContainer}>
                <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.stickyBtnGroup}>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPriceText}>Total Price: ${totalPrice.toFixed(2)}</Text>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.orderBtn]}
              onPress={() => { navigation.navigate('AddSamples'); }}>
              <Text style={styles.buttonText}>Chain Of Custody</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitBtn]}
              onPress={() => { navigation.navigate('Home'); }}>
              <Text style={styles.buttonText}>Print Lables</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => { navigation.navigate('Home'); }}>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.backText}>Back To Custom Portal</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    alignItems: 'center',
    paddingBottom: 80, // Add extra padding for the footer
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
    width: '80%',
  },
  checkContainer: {
    backgroundColor: '#adff2f',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    color: '#fff',
    fontSize: 30,
  },
  orderSummary: {
    width: '100%',
    marginVertical: 10,
  },
  orderSummaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  productPriceContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  stickyBtnGroup: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 2, // Add shadow for better visibility on iOS
  },
  totalPriceContainer: {
    marginBottom: 10,
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  orderBtn: {
    backgroundColor: '#007bff',
  },
  submitBtn: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backText: {
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 'bold',
    position:'absolute',
    width:200,
    bottom:-120,
    textAlign:'center'
  },
});

export default OrderConfirmation;
