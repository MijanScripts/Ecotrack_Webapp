import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const OnboardingScreen = ({ navigation }) => {
  const handleProceed = () => {
    // Navigate to electricity source selection
    navigation.navigate('OnboardingElectricity');
  };

  const handleSkip = () => {
    // Skip onboarding and go to main app
    global.forceAuthCheck?.();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Average annual footprints</Text>
        
        <Text style={styles.subtitle}>
          Let's calculate your average carbon footprints based on your lifestyle habits
        </Text>
        
        <View style={styles.imageContainer}>
          <FontAwesome name="paw" size={120} color="#28a745" />
        </View>
        
        <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
          <Text style={styles.proceedText}>Proceed</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
        
        <Text style={styles.timeText}>This will take less than 1 minute</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  imageContainer: {
    marginBottom: 60,
  },
  proceedButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  proceedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  skipButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#28a745',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  skipText: {
    color: '#28a745',
    fontSize: 18,
    fontWeight: '600',
  },
  timeText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default OnboardingScreen;