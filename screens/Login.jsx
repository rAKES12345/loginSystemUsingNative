import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Login = ({ navigation }) => {
    const [loginData, setLoginData] = useState({ userName: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (name, text) => {
        setLoginData(prevData => ({ ...prevData, [name]: text }));
    };

    const validate = () => {
        const errors = {};
        if (!loginData.userName) errors.userName = 'Username is required';
        if (!loginData.password) errors.password = 'Password is required';
        return errors;
    };

    const handleLogin = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Login data:', loginData); 
            navigation.navigate('Home'); 
        } else {
            setErrors(validationErrors);
            console.log('Validation errors:', validationErrors); 
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.title}>Login System</Text>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.jpg')} style={styles.logo} />
            </View>
            <Text style={styles.subtitle}>Account Login</Text>

            <TextInput
                style={[styles.input, errors.userName && styles.errorInput]}
                placeholder="Enter Username"
                placeholderTextColor="#888"
                value={loginData.userName}
                onChangeText={(text) => handleChange('userName', text)}
            />
            {errors.userName && <Text style={styles.errorText}>{errors.userName}</Text>}

            <TextInput
                style={[styles.input, errors.password && styles.errorInput]}
                placeholder="Enter Password"
                placeholderTextColor="#888"
                secureTextEntry
                value={loginData.password}
                onChangeText={(text) => handleChange('password', text)}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Pressable style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f4f8',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 20,
        color: '#666',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: '#fff',
        fontSize: 16,
        width: '100%',
    },
    errorInput: {
        borderColor: '#e74c3c',
    },
    errorText: {
        color: '#e74c3c',
        marginBottom: 10,
        fontSize: 14,
        textAlign: 'left',
        width: '100%',
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    signUpText: {
        color: '#3498db',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#3498db',
    },
});

export default Login;
