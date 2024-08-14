import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SignUp = ({ navigation }) => {
    const [signUpData, setSignUpData] = useState({ userName: '', email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (name, text) => {
        setSignUpData(prevData => ({ ...prevData, [name]: text }));
    };

    const validate = () => {
        const errors = {};
        if (!signUpData.userName) errors.userName = 'Username is required';
        if (!signUpData.email) errors.email = 'Email is required';
        if (!signUpData.password) errors.password = 'Password is required';
        return errors;
    };

    const handleSignUp = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log(signUpData);
            alert("Sign-Up Success");
            navigation.navigate('Login');
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.jpg')} style={styles.logo} />
            </View>
            <Text style={styles.subtitle}>Create an Account</Text>

            <TextInput
                style={[styles.input, errors.userName && styles.errorInput]}
                placeholder="Enter Username"
                placeholderTextColor="#888"
                value={signUpData.userName}
                onChangeText={(text) => handleChange('userName', text)}
            />
            {errors.userName && <Text style={styles.errorText}>{errors.userName}</Text>}

            <TextInput
                style={[styles.input, errors.email && styles.errorInput]}
                placeholder="Enter Email"
                placeholderTextColor="#888"
                value={signUpData.email}
                onChangeText={(text) => handleChange('email', text)}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
                style={[styles.input, errors.password && styles.errorInput]}
                placeholder="Enter Password"
                placeholderTextColor="#888"
                secureTextEntry
                value={signUpData.password}
                onChangeText={(text) => handleChange('password', text)}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <Pressable style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <Pressable style={styles.signInButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signInText}>Already have an account? Login</Text>
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
        backgroundColor: '#2ecc71',
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
    signInButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    signInText: {
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

export default SignUp;
