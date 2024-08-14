import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import Sidebar from '../screens/SideBar';
import Header from '../screens/Header';

const Orders = ({navigation}) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <View>
        <Sidebar 
        navigation={navigation} 
        sidebarVisible={sidebarVisible} 
        toggleSidebar={toggleSidebar} 
      />
      <Header toggleSidebar={toggleSidebar} />
      <View>
        <Text>Orders Page</Text>
      </View>
    </View>
  )
}

export default Orders;