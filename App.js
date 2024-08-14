import React from 'react';
import {View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home'; 
import CreateOrder from './screens/CreateOrder';
import Sidebar from './screens/SideBar'; // Ensure correct import path
import Header from './screens/Header'; // Ensure correct import path
import AddSamples from './screens/AddSamples';
import SelectTests from './screens/SelectTests';
import ReviewOrder from './screens/ReviewOrder';
import OrderConfirmation from './screens/OrderConfirmation';

const Stack = createStackNavigator();

const HomeWithSidebar = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar 
        navigation={navigation} 
        sidebarVisible={sidebarVisible} 
        toggleSidebar={toggleSidebar} 
      />
      <Home />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateOrder" screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ title: 'SignUp' }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeWithSidebar} 
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="CreateOrder" 
          component={CreateOrder} 
          options={{ title: 'CreateOrder' }}
        />
        <Stack.Screen 
          name="AddSamples" 
          component={AddSamples} 
          options={{ title: 'AddSamples' }}
        />
        <Stack.Screen 
          name="SelectTests" 
          component={SelectTests} 
          options={{ title: 'SelectTests' }}
        />
        <Stack.Screen 
          name="ReviewOrder" 
          component={ReviewOrder} 
          options={{ title: 'ReviewOrder' }}
        />
        <Stack.Screen 
          name="OrderConfirmation" 
          component={OrderConfirmation} 
          options={{ title: 'OrderConfirmation' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
