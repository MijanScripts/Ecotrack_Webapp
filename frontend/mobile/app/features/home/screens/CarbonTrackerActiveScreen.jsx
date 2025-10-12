import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from '../../../components/Spacer';

const CarbonTrackerActiveScreen = ({ navigation, route }) => {
  const { selectedActivity } = route.params || {};
  const [carbonEmission, setCarbonEmission] = useState(0);
  const [isTracking, setIsTracking] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Carbon emission rates per minute for different activities (kg CO2)
  const emissionRates = {
    'Energy & Fuel Use': 0.5,
    'Transportation': 0.8,
    'Land Use & Agriculture': 0.3,
    'Industrial Processes (non-fuel)': 0.6,
    'Waste': 0.2
  };

  useEffect(() => {
    let interval = null;
    if (!isPaused) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          const newSeconds = seconds + 1;
          // Update carbon emission based on activity and time
          const minutes = newSeconds / 60;
          const rate = emissionRates[selectedActivity] || 0.4;
          setCarbonEmission(Math.round(minutes * rate * 100) / 100);
          return newSeconds;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused, selectedActivity]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = async () => {
    setIsTracking(false);
    
    // Store tracking data
    try {
      const existingData = await AsyncStorage.getItem('carbonCalculations');
      const data = existingData ? JSON.parse(existingData) : [];
      
      const newEntry = {
        carbon: carbonEmission.toString(),
        date: new Date().toISOString(),
        type: 'active_tracking',
        activity: selectedActivity,
        duration: seconds
      };
      
      data.push(newEntry);
      await AsyncStorage.setItem('carbonCalculations', JSON.stringify(data));
    } catch (error) {
      console.error('Error storing carbon data:', error);
    }
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={20} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Carbon Tracker</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Spacer height={40} />
        
        <Text style={styles.subtitle}>Track your daily carbon usage</Text>
        
        <Spacer height={60} />
        
        <View style={styles.circleContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.carbonValue}>{carbonEmission}kgCO2</Text>
            </View>
          </View>
        </View>
        
        <Spacer height={80} />
        
        <View style={styles.controlsContainer}>
          <TouchableOpacity 
            style={styles.controlButton} 
            onPress={handlePause}
          >
            <FontAwesome 
              name={isPaused ? "play" : "pause"} 
              size={28} 
              color="#000" 
            />
            <Text style={styles.buttonLabel}>{isPaused ? "Play" : "Pause"}</Text>
          </TouchableOpacity>
          
          <Text style={styles.timerBetweenButtons}>{formatTime(seconds)}</Text>
          
          <TouchableOpacity 
            style={styles.controlButton} 
            onPress={handleStop}
          >
            <FontAwesome name="stop" size={28} color="#000" />
            <Text style={styles.buttonLabel}>Stop</Text>
          </TouchableOpacity>
        </View>
        
        <Spacer height={40} />
        
        <Text style={styles.statusText}>
          {isPaused ? 'Tracking paused' : 'Tracking in progress...'}
        </Text>
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
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#28a745',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 10,
  },
  innerCircle: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#28a745',
  },
  carbonValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#28a745',
  },
  timeText: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
    fontWeight: '600',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  timerBetweenButtons: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    minWidth: 100,
    textAlign: 'center',
  },
  controlButton: {
    width: 80,
    height: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    margin: 10,
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd',
  },
  buttonLabel: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  statusText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default CarbonTrackerActiveScreen;