import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mockApiService from '../../../services/mockApi';

const EmailVerificationScreen = ({ navigation, route }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);
  const userData = route?.params?.userData;

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerifyCode = async () => {
    const fullCode = code.join('');
    if (fullCode.length !== 4) {
      Alert.alert('Error', 'Please enter a valid 4-digit code');
      return;
    }

    try {
      const response = await mockApiService.verifyEmail(fullCode);
      setIsVerified(true);
      Alert.alert('Success', response.message);
    } catch (error) {
      Alert.alert('Error', error.message || 'Invalid verification code');
    }
  };

  const handleResendCode = () => {
    // TODO: Replace with actual API call to resend code
    Alert.alert('Code Sent', 'A new verification code has been sent to your email');
  };

  const handleCreateAccount = async () => {
    try {
      const response = await mockApiService.verifyEmail(code.join(''));
      await AsyncStorage.setItem('authToken', response.token);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      
      navigation.navigate('Onboarding');
    } catch (error) {
      Alert.alert('Error', 'Account creation failed');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <FontAwesome name="envelope" size={60} color="#28a745" />
        <Text style={styles.title}>Verify Your Email</Text>
        <Text style={styles.subtitle}>
          We've sent a 4-digit verification code to your email address. Please enter the code below to verify your account. Use code: 1234
        </Text>
        
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.codeInput}
              value={digit}
              onChangeText={(value) => handleCodeChange(value, index)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>
        
        {!isVerified ? (
          <>
            <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyCode}>
              <Text style={styles.buttonText}>Verify Code</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
              <Text style={styles.resendText}>Didn't receive code? Resend</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.backText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: 10,
  },
  codeInput: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#28a745',
    borderRadius: 10,
    width: 50,
    height: 60,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 200,
    marginBottom: 15,
  },
  createAccountButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 200,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resendButton: {
    marginBottom: 20,
  },
  resendText: {
    color: '#28a745',
    fontSize: 14,
    fontWeight: '500',
  },
  backButton: {
    marginTop: 10,
  },
  backText: {
    color: '#666',
    fontSize: 14,
  },
});

export default EmailVerificationScreen;