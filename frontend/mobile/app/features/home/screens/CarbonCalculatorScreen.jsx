import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Spacer from '../../../components/Spacer';

const CarbonCalculatorScreen = ({ navigation }) => {
  const [transport, setTransport] = useState('');
  const [energy, setEnergy] = useState('');
  const [food, setFood] = useState('');
  const [totalEmissions, setTotalEmissions] = useState(0);

  const calculateEmissions = () => {
    const transportCO2 = parseFloat(transport) * 0.21 || 0; // kg CO2 per km
    const energyCO2 = parseFloat(energy) * 0.5 || 0; // kg CO2 per kWh
    const foodCO2 = parseFloat(food) * 2.5 || 0; // kg CO2 per meal
    
    const total = transportCO2 + energyCO2 + foodCO2;
    setTotalEmissions(total.toFixed(2));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.title}>🧮 Carbon Calculator</Text> */}
        <Text style={styles.subtitle}>Calculate your daily carbon footprint</Text>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.sectionTitle}>Transportation</Text>
        <Text style={styles.label}>Distance traveled by car (km)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter kilometers"
          keyboardType="numeric"
          value={transport}
          onChangeText={setTransport}
        />

        <Text style={styles.sectionTitle}>Energy Usage</Text>
        <Text style={styles.label}>Electricity consumed (kWh)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter kWh"
          keyboardType="numeric"
          value={energy}
          onChangeText={setEnergy}
        />

        <Text style={styles.sectionTitle}>Food</Text>
        <Text style={styles.label}>Number of meat meals</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number of meals"
          keyboardType="numeric"
          value={food}
          onChangeText={setFood}
        />

        <TouchableOpacity style={styles.calculateButton} onPress={calculateEmissions}>
          <Text style={styles.calculateButtonText}>Calculate Emissions</Text>
        </TouchableOpacity>

        {totalEmissions > 0 && (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>Your Daily Footprint</Text>
            <Text style={styles.resultValue}>{totalEmissions} kg CO2</Text>
            <Text style={styles.resultDescription}>
              {totalEmissions < 10 ? 'Great job! Low emissions day 🌱' : 
               totalEmissions < 20 ? 'Good effort! Room for improvement 🌿' : 
               'High emissions. Consider eco-friendly alternatives 🌍'}
            </Text>
          </View>
        )}
      </View>

      <Spacer height={20} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#28a745',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#e8f5e8',
    marginTop: 5,
  },
  inputSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    marginBottom: 15,
  },
  calculateButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  resultTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 8,
  },
  resultDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default CarbonCalculatorScreen;