import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from '../../../components/Spacer';
import InputField from '../../../components/InputField';
import mockApiService from '../../../services/mockApi';

const EcoTrack = require('../../../../assets/EcoTrack.png');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      const response = await mockApiService.login(email, password);
      
      await AsyncStorage.setItem('authToken', response.token);
      await AsyncStorage.setItem('userData', JSON.stringify(response.user));
      
      navigation.navigate('Onboarding');
    } catch (error) {
      Alert.alert('Error', error.message || 'Login failed');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <Spacer height={100} />
      <View style={styles.logoContainer}>
        <Image source={EcoTrack} style={styles.logo} />
      </View>
      
      <View style={styles.form}>
        {/* <Text style={styles.title}>Welcome Back</Text> */}
        
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
        
        <TouchableOpacity 
          style={styles.forgotPasswordButton}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        
        <Text style={styles.orText}>Or continue with</Text>
        
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIcon}></Text>
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.switchText}>
            <Text style={styles.blackText}>Are you a new user? </Text>
            <Text style={styles.greenText}>Create account</Text>
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
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
    width: 120,
    height: 120,
    borderRadius: 60,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // elevation: 10,
  },
  logo: {
    width: 500,
    height: 200,
    resizeMode: 'contain',
  },
  form: {
    // backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },

  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#28a745',
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
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
  socialIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
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

export default LoginScreen;