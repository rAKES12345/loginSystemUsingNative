import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea
} from './../components/styles';

const SignUp = ({ navigation }) => {
    const [loginData, setLoginData] = useState({ userName: '', email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (name, text) => {
        setLoginData(prevData => ({ ...prevData, [name]: text }));
    };

    const validate = () => {
        const errors = {};
        if (!loginData.userName) errors.userName = 'Username is required';
        if (!loginData.email) errors.email = 'Email is required';
        if (!loginData.password) errors.password = 'Password is required';
        return errors;
    };

    const handleSignUp = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log(loginData);
            alert("Sign-Up Success");
            // Navigate to Login screen after successful sign-up
            navigation.navigate('Login');
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Sign Up</PageTitle>
                <SubTitle>Create an Account</SubTitle>
                
                <StyledFormArea>
                    <TextInput
                        style={[styles.input, errors.userName && styles.errorInput]}
                        placeholder="Enter Username"
                        value={loginData.userName}
                        onChangeText={(text) => handleChange('userName', text)}
                        accessibilityLabel="Username Input"
                        accessibilityHint="Enter your username"
                    />
                    {errors.userName && <Text style={styles.errorText}>{errors.userName}</Text>}

                    <TextInput
                        style={[styles.input, errors.email && styles.errorInput]}
                        placeholder="Enter Email"
                        value={loginData.email}
                        onChangeText={(text) => handleChange('email', text)}
                        accessibilityLabel="Email Input"
                        accessibilityHint="Enter your email"
                    />
                    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                    <TextInput
                        style={[styles.input, errors.password && styles.errorInput]}
                        placeholder="Enter Password"
                        secureTextEntry
                        value={loginData.password}
                        onChangeText={(text) => handleChange('password', text)}
                        accessibilityLabel="Password Input"
                        accessibilityHint="Enter your password"
                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </StyledFormArea>

                <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.signInText}>Already have an account? Login</Text>
                </TouchableOpacity>
            </InnerContainer>
        </StyledContainer>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
    },
    errorInput: {
        borderColor: '#d9534f',
    },
    errorText: {
        color: '#d9534f',
        marginBottom: 10,
        fontSize: 14,
        textAlign: 'left',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 10,
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
        color: '#007bff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default SignUp;
