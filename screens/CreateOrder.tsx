import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Header from './Header';
import Sidebar from './SideBar';
import ProgressBar from './ProgressBar';


const CreateOrder = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileBase64, setFileBase64] = useState('');
  const [newOrderData, setNewOrderData] = useState({
    submittedBy: '',
    purchaseOrderNumber: '',
    dropOffMethod: '',
    attachments: ''
  });

  const handlePickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setFileName(result.name);
        const base64 = await uriToBase64(result.uri);
        setFileBase64(base64);
        setNewOrderData(prevData => ({ ...prevData, attachments: base64 }));
      }
    } catch (err) {
      console.error('Error picking file:', err);
    }
  };

  const uriToBase64 = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onloadend = () => {
          const base64data = reader.result.split(',')[1];
          resolve(base64data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error converting file to base64:', error);
    }
  };

  const takeData = (text, name) => {
    setNewOrderData(prevData => ({ ...prevData, [name]: text }));
  };

  const addSample = () => {
    const { submittedBy, purchaseOrderNumber, dropOffMethod, attachments } = newOrderData;

    // if (!submittedBy || !purchaseOrderNumber || !dropOffMethod || !attachments) {
    //   alert('Validation Error', 'All fields are required.');
    //   return;
    // }else{
    //   navigation.navigate('Orders');
    // }
       navigation.navigate('AddSamples');

    console.log('Order Data:', newOrderData);
    console.log('File Base64:', fileBase64);
  };

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
        <Text style={styles.mainHead}>Create New Order</Text>
        <Text style={styles.subText}>Intro Copy/Special Instructions From Lab</Text>
        
        <Text style={styles.label}>SUBMITTED BY*</Text>
        <TextInput 
          onChangeText={(text) => takeData(text, "submittedBy")} 
          value={newOrderData.submittedBy} 
          placeholder='' 
          style={styles.input} 
        />
        
        <Text style={styles.label}>PURCHASE ORDER NUMBER (IF APPLICABLE)</Text>
        <TextInput
          onChangeText={(text) => takeData(text, "purchaseOrderNumber")} 
          value={newOrderData.purchaseOrderNumber} 
          placeholder='' 
          style={styles.input} 
        />
        
        <Text style={styles.label}>DROP-OFF METHOD*</Text>
        <TextInput
          onChangeText={(text) => takeData(text, "dropOffMethod")} 
          value={newOrderData.dropOffMethod} 
          placeholder='' 
          style={styles.input} 
        />
        
        <Text style={styles.label}>ATTACHMENTS*</Text>
        <View style={styles.fileBtn}>
          <TouchableOpacity style={styles.fileButton} onPress={handlePickFile}>
            <Text style={styles.fileButtonText}>Pick a File</Text>
          </TouchableOpacity>
        </View>
        {fileName ? <Text style={styles.fileName}>Selected File: {fileName}</Text> : null}
        
        <Text style={styles.note}>*Indicates required field</Text>
        
        <View style={styles.sampleBtn}>
          <TouchableOpacity style={styles.sampleButton} onPress={addSample}>
            <Text style={styles.sampleButtonText}>Add Sample</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.backText} onPress={() => {navigation.navigate('Home')}}>Back To Custom Portal</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%', // Ensure the content container is at least the height of the screen
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
  label: {
    width: '100%',
    fontSize: 16,
    textAlign: 'left',
    color: '#333',
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  fileName: {
    marginTop: 10,
    color: 'black',
  },
  note: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  fileBtn: {
    width: '100%',
    marginVertical: 10,
  },
  fileButton: {
    backgroundColor: 'transparent',
    borderColor: '#007bff',
    borderWidth: 2,
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
  fileButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sampleBtn: {
    width: '100%',
    marginVertical: 10,
  },
  sampleButton: {
    backgroundColor: '#007bff',
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
  sampleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backText: {
    marginTop: 20,
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateOrder;
