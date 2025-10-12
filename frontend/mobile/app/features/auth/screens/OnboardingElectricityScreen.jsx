import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const OnboardingElectricityScreen = ({ navigation }) => {
  const [selectedSource, setSelectedSource] = useState('');

  const electricitySources = [
    'National grid',
    'Solar panels', 
    'Generators',
    'Mixed sources'
  ];

  const handleNext = () => {
    if (selectedSource) {
      // Navigate to commute selection screen
      navigation.navigate('OnboardingCommute');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>What is your main source of home electricity?</Text>
        
        <View style={styles.optionsContainer}>
          {electricitySources.map((source, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedSource === source && styles.selectedOption
              ]}
              onPress={() => setSelectedSource(source)}
            >
              <Text style={styles.optionText}>{source}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity 
        style={[styles.nextButton, !selectedSource && styles.disabledButton]} 
        onPress={handleNext}
        disabled={!selectedSource}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 50,
    marginBottom: 20,
    padding: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 32,
  },
  optionsContainer: {
    gap: 15,
  },
  optionButton: {
    backgroundColor: '#d4edda',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    backgroundColor: '#c3e6cb',
    borderColor: '#28a745',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#155724',
  },
  nextButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OnboardingElectricityScreen;