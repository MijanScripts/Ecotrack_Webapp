import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputField from '../../../components/InputField';
import mockApiService from '../../../services/mockApi';

const EcoTrack = require('../../../../assets/EcoTrack.png');

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    try {
      const response = await mockApiService.forgotPassword(email);
      Alert.alert('Success', response.message, [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to send reset link');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={EcoTrack} style={styles.logo} />
      </View>
      
      <View style={styles.form}>
        <Text style={styles.title}>Forget Password</Text>
        <Text style={styles.subtitle}>
          Enter your email address and we'll send you a link to reset your password.
        </Text>
        
        <InputField
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          iconName="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
          <Text style={styles.resetButtonText}>Send Reset Link</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backText}>
            <Text style={styles.blackText}>Remember your password? </Text>
            <Text style={styles.greenText}>Back to Login</Text>
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
    height: 300,
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
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },

  resetButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  backText: {
    textAlign: 'center',
    fontSize: 16,
  },
  blackText: {
    color: '#000',
  },
  greenText: {
    color: '#28a745',
    fontWeight: '600',
  },
});

export default ForgotPasswordScreen;