import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';

const AuthScreen = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAuth = async () => {
    if (!email || !password || (!isLogin && !name)) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      // TODO: Replace with actual API calls when backend is ready
      const userData = {
        id: '1',
        name: name || 'John Doe',
        email: email,
        points: 0,
        level: 1
      };
      
      await AsyncStorage.setItem('authToken', 'temp_token_123');
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      
      onLogin();
    } catch (error) {
      Alert.alert('Error', isLogin ? 'Login failed' : 'Registration failed');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="leaf" size={60} color="#28a745" />
        <Text style={styles.title}>EcoTrack</Text>
        <Text style={styles.subtitle}>Track your carbon footprint</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>{isLogin ? 'Welcome Back' : 'Create Account'}</Text>
        
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        )}
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.authButton} onPress={handleAuth}>
          <Text style={styles.authButtonText}>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.switchButton} 
          onPress={() => setIsLogin(!isLogin)}
        >
          <Text style={styles.switchText}>
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#28a745',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  form: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  authButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  authButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  switchButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  switchText: {
    color: '#28a745',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default AuthScreen;