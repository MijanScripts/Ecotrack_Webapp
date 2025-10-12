import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../../../components/Spacer';

const TrackCarbonScreen = ({ navigation }) => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    'Energy & Fuel Use',
    'Transportation',
    'Land Use & Agriculture',
    'Industrial Processes (non-fuel)',
    'Waste'
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={20} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Track Carbon</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <Spacer height={20} />
        
        <Text style={styles.subtitle}>Kindly pick the activity you would love to track</Text>
        
        <Spacer height={30} />
        
        {activities.map((activity) => (
          <TouchableOpacity
            key={activity}
            style={[
              styles.activityButton,
              selectedActivity === activity && styles.selectedActivityButton
            ]}
            onPress={() => setSelectedActivity(activity)}
          >
            <Text style={[
              styles.activityButtonText,
              selectedActivity === activity && styles.selectedActivityButtonText
            ]}>
              {activity}
            </Text>
          </TouchableOpacity>
        ))}
        
        <Spacer height={40} />
        
        <TouchableOpacity 
          style={[
            styles.startTrackingButton,
            !selectedActivity && styles.disabledButton
          ]}
          disabled={!selectedActivity}
          onPress={() => selectedActivity && navigation.navigate('CarbonTrackerActive', { selectedActivity })}
        >
          <Text style={styles.startTrackingText}>Start tracking</Text>
        </TouchableOpacity>
        
        <Spacer height={15} />
        
        <TouchableOpacity style={styles.inputManuallyButton} onPress={() => navigation.navigate('CarbonInputManual')}>
          <Text style={styles.inputManuallyText}>Input manually</Text>
        </TouchableOpacity>
      </ScrollView>
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
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
  },
  activityButton: {
    backgroundColor: '#f5f5f5',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedActivityButton: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  activityButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  selectedActivityButtonText: {
    color: '#fff',
  },
  startTrackingButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  startTrackingText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  inputManuallyButton: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#28a745',
  },
  inputManuallyText: {
    color: '#28a745',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TrackCarbonScreen;