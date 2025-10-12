import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const EcoTrack = require('../../../../assets/EcoTrack.png');

const OnboardingResultsScreen = ({ navigation }) => {
  // Mock data - will be replaced with backend data
  const carbonFootprint = "12.5 tons CO2/year";
  const ecoPoints = 20;

  const handleBeginJourney = () => {
    // Complete onboarding and go to main app
    global.forceAuthCheck?.();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Your average annual carbon footprint</Text>
        
        <View style={styles.resultContainer}>
          <View style={styles.resultCard}>
            <FontAwesome name="leaf" size={60} color="#28a745" />
            <Text style={styles.resultValue}>{carbonFootprint}</Text>
            <Text style={styles.resultLabel}>Annual Carbon Footprint</Text>
          </View>
        </View>

        <View style={styles.congratsSection}>
          <FontAwesome name="check-circle" size={40} color="#28a745" />
          <Text style={styles.congratsText}>Carbon profile successfully completed!</Text>
        </View>

        <View style={styles.pointsSection}>
          <Text style={styles.pointsText}>You earned {ecoPoints} EcoPoints</Text>
          <Image source={EcoTrack} style={styles.ecoLogo} />
        </View>
      </View>

      <TouchableOpacity style={styles.beginButton} onPress={handleBeginJourney}>
        <Text style={styles.beginText}>Begin your low-carbon journey</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  resultContainer: {
    marginBottom: 40,
  },
  resultCard: {
    backgroundColor: '#f8f9fa',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#28a745',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#28a745',
    marginTop: 15,
    marginBottom: 10,
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  congratsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  congratsText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#28a745',
    flex: 1,
    textAlign: 'center',
  },
  pointsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    gap: 8,
  },
  pointsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  ecoLogo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  beginButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  beginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OnboardingResultsScreen;