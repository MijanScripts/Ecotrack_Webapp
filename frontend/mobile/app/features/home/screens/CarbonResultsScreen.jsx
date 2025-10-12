import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from '../../../components/Spacer';

const CarbonResultsScreen = ({ navigation, route }) => {
  const { carbonFootprint } = route.params;
  
  useEffect(() => {
    storeCarbonData();
  }, []);
  
  const storeCarbonData = async () => {
    try {
      const existingData = await AsyncStorage.getItem('carbonCalculations');
      const data = existingData ? JSON.parse(existingData) : [];
      
      const newEntry = {
        carbon: carbonFootprint,
        date: new Date().toISOString(),
        type: 'manual_input'
      };
      
      data.push(newEntry);
      await AsyncStorage.setItem('carbonCalculations', JSON.stringify(data));
    } catch (error) {
      console.error('Error storing carbon data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={20} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Carbon Results</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Spacer height={60} />
        
        <View style={styles.resultContainer}>
          <FontAwesome name="leaf" size={60} color="#28a745" />
          <Spacer height={30} />
          
          <Text style={styles.resultTitle}>Your Daily Carbon Footprint</Text>
          <Spacer height={20} />
          
          <View style={styles.carbonDisplay}>
            <Text style={styles.carbonValue}>{carbonFootprint}</Text>
            <Text style={styles.carbonUnit}>kg CO₂</Text>
          </View>
          
          <Spacer height={40} />
          
          <Text style={styles.messageText}>
            Great job tracking your carbon usage! Every step towards awareness helps our planet.
          </Text>
        </View>
        
        <Spacer height={60} />
        
        <TouchableOpacity 
          style={styles.doneButton} 
          onPress={() => navigation.reset({
            index: 0,
            routes: [{ name: 'HomeMain' }],
          })}
        >
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.trackAgainButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.trackAgainButtonText}>Track Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  resultContainer: {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  carbonDisplay: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  carbonValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#28a745',
  },
  carbonUnit: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginLeft: 8,
  },
  messageText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  doneButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  trackAgainButton: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#28a745',
  },
  trackAgainButtonText: {
    color: '#28a745',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CarbonResultsScreen;