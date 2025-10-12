import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from '../../../components/Spacer';
import InputField from '../../../components/InputField';
import mockApiService from '../../../services/mockApi';

const EcoTrack = require('../../../../assets/EcoTrack.png');

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      console.log('Starting registration...');
      const response = await mockApiService.register({ name, lastName, email, password });
      console.log('Registration response:', response);
      
      Alert.alert('Registration Successful', response.message, [
        { text: 'OK', onPress: () => {
          console.log('Navigating to EmailVerification with:', response.user);
          navigation.navigate('EmailVerification', { userData: response.user });
        }}
      ]);
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <Spacer height={100} />
      
      <View style={styles.form}>
        <Text style={styles.title}>Create Account</Text>
        
        <InputField
          label="First Name"
          placeholder="Enter your first name"
          value={name}
          onChangeText={setName}
          iconName="person-outline"
          autoCapitalize="words"
        />
        
        <InputField
          label="Last Name"
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
          iconName="person-outline"
          autoCapitalize="words"
        />
        
        <InputField
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          iconName="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <InputField
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          iconName="lock-closed-outline"
          secureTextEntry={!showPassword}
          showPasswordToggle={true}
          onTogglePassword={() => setShowPassword(!showPassword)}
        />
        
        <InputField
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          iconName="lock-closed-outline"
          secureTextEntry={!showConfirmPassword}
          showPasswordToggle={true}
          onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
        />
        
        <TouchableOpacity 
          style={[styles.registerButton, loading && styles.disabledButton]} 
          onPress={handleRegister}
          disabled={loading}
        >
          <Text style={styles.registerButtonText}>{loading ? 'Registering...' : 'Register'}</Text>
        </TouchableOpacity>
        
        <Text style={styles.orText}>Or continue with</Text>
        
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIconFA}>G</Text>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIconFA}></Text>
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.switchText}>
            <Text style={styles.blackText}>Already have an account? </Text>
            <Text style={styles.greenText}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  form: {
    padding: 20,
    borderRadius: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },

  registerButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginVertical: 20,
  },
  socialButtons: {
    gap: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  socialIconFA: {
    marginRight: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  switchText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  blackText: {
    color: '#000',
  },
  greenText: {
    color: '#28a745',
    fontWeight: '600',
  },
});

export default RegisterScreen;