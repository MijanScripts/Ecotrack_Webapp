import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import Spacer from '../../../components/Spacer';

const GoalsScreen = ({ navigation }) => {
  const [dailyGoal, setDailyGoal] = useState('');
  const [weeklyGoal, setWeeklyGoal] = useState('');
  const [monthlyGoal, setMonthlyGoal] = useState('');

  const currentProgress = {
    daily: { current: 12.5, target: 15 },
    weekly: { current: 85.2, target: 100 },
    monthly: { current: 342.8, target: 400 }
  };

  const saveGoals = () => {
    // TODO: API call to save goals
    Alert.alert('Success', 'Your carbon goals have been updated!');
    
    // Clear input fields after saving
    setDailyGoal('');
    setWeeklyGoal('');
    setMonthlyGoal('');
  };

  const getProgressPercentage = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  const getProgressColor = (current, target) => {
    const percentage = (current / target) * 100;
    if (percentage <= 70) return '#28a745';
    if (percentage <= 90) return '#ffc107';
    return '#dc3545';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.title}>🎯 Carbon Goals</Text> */}
        <Text style={styles.subtitle}>Set and track your emission targets</Text>
      </View>

      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>Current Progress</Text>
        
        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>Daily Goal</Text>
          <View style={styles.progressBar}>
            <View style={[
              styles.progressFill, 
              { 
                width: `${getProgressPercentage(currentProgress.daily.current, currentProgress.daily.target)}%`,
                backgroundColor: getProgressColor(currentProgress.daily.current, currentProgress.daily.target)
              }
            ]} />
          </View>
          <Text style={styles.progressText}>
            {currentProgress.daily.current} / {currentProgress.daily.target} kg CO2
          </Text>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>Weekly Goal</Text>
          <View style={styles.progressBar}>
            <View style={[
              styles.progressFill, 
              { 
                width: `${getProgressPercentage(currentProgress.weekly.current, currentProgress.weekly.target)}%`,
                backgroundColor: getProgressColor(currentProgress.weekly.current, currentProgress.weekly.target)
              }
            ]} />
          </View>
          <Text style={styles.progressText}>
            {currentProgress.weekly.current} / {currentProgress.weekly.target} kg CO2
          </Text>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>Monthly Goal</Text>
          <View style={styles.progressBar}>
            <View style={[
              styles.progressFill, 
              { 
                width: `${getProgressPercentage(currentProgress.monthly.current, currentProgress.monthly.target)}%`,
                backgroundColor: getProgressColor(currentProgress.monthly.current, currentProgress.monthly.target)
              }
            ]} />
          </View>
          <Text style={styles.progressText}>
            {currentProgress.monthly.current} / {currentProgress.monthly.target} kg CO2
          </Text>
        </View>
      </View>

      <View style={styles.goalsSection}>
        <Text style={styles.sectionTitle}>Update Your Goals</Text>
        
        <Text style={styles.label}>Daily Emission Target (kg CO2)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter daily goal"
          keyboardType="numeric"
          value={dailyGoal}
          onChangeText={setDailyGoal}
        />

        <Text style={styles.label}>Weekly Emission Target (kg CO2)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter weekly goal"
          keyboardType="numeric"
          value={weeklyGoal}
          onChangeText={setWeeklyGoal}
        />

        <Text style={styles.label}>Monthly Emission Target (kg CO2)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter monthly goal"
          keyboardType="numeric"
          value={monthlyGoal}
          onChangeText={setMonthlyGoal}
        />

        <TouchableOpacity style={styles.saveButton} onPress={saveGoals}>
          <Text style={styles.saveButtonText}>Save Goals</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Goal Setting Tips</Text>
        
        <View style={styles.tipCard}>
          <Text style={styles.tipEmoji}>💡</Text>
          <Text style={styles.tipText}>Start with achievable goals and gradually reduce them</Text>
        </View>
        
        <View style={styles.tipCard}>
          <Text style={styles.tipEmoji}>📊</Text>
          <Text style={styles.tipText}>Track your progress daily to stay motivated</Text>
        </View>
        
        <View style={styles.tipCard}>
          <Text style={styles.tipEmoji}>🏆</Text>
          <Text style={styles.tipText}>Celebrate when you achieve your targets</Text>
        </View>
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
  progressSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  progressCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  goalsSection: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tipsSection: {
    padding: 20,
  },
  tipCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  tipEmoji: {
    fontSize: 20,
    marginRight: 15,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
});

export default GoalsScreen;