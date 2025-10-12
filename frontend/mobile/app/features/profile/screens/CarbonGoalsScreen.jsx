import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const CarbonGoalsScreen = ({ navigation }) => {
  const [dailyGoal, setDailyGoal] = useState('10');
  const [weeklyGoal, setWeeklyGoal] = useState('70');
  const [monthlyGoal, setMonthlyGoal] = useState('300');
  const [yearlyGoal, setYearlyGoal] = useState('3650');

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    try {
      const savedGoals = await AsyncStorage.getItem('carbonGoals');
      if (savedGoals) {
        const goals = JSON.parse(savedGoals);
        setDailyGoal(goals.daily || '10');
        setWeeklyGoal(goals.weekly || '70');
        setMonthlyGoal(goals.monthly || '300');
        setYearlyGoal(goals.yearly || '3650');
      }
    } catch (error) {
      console.error('Error loading goals:', error);
    }
  };

  const handleSave = async () => {
    try {
      const goals = {
        daily: dailyGoal,
        weekly: weeklyGoal,
        monthly: monthlyGoal,
        yearly: yearlyGoal
      };
      await AsyncStorage.setItem('carbonGoals', JSON.stringify(goals));
      Alert.alert('Success', 'Carbon goals updated successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to save goals');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Carbon Goals</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.currentProgress}>
        <Text style={styles.sectionTitle}>Current Progress</Text>
        <View style={styles.progressCard}>
          <Text style={styles.progressValue}>8.5 kg CO2</Text>
          <Text style={styles.progressLabel}>Today (Goal: {dailyGoal} kg)</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '85%' }]} />
          </View>
        </View>
      </View>

      <View style={styles.goalsSection}>
        <Text style={styles.sectionTitle}>Set Your Goals</Text>
        
        <View style={styles.goalCard}>
          <Text style={styles.goalEmoji}>📅</Text>
          <View style={styles.goalContent}>
            <Text style={styles.goalTitle}>Daily Goal</Text>
            <Text style={styles.goalDescription}>Maximum CO2 emissions per day</Text>
          </View>
          <View style={styles.goalInput}>
            <TextInput
              style={styles.input}
              value={dailyGoal}
              onChangeText={setDailyGoal}
              keyboardType="numeric"
              placeholder="10"
            />
            <Text style={styles.unit}>kg</Text>
          </View>
        </View>

        <View style={styles.goalCard}>
          <Text style={styles.goalEmoji}>📊</Text>
          <View style={styles.goalContent}>
            <Text style={styles.goalTitle}>Weekly Goal</Text>
            <Text style={styles.goalDescription}>Maximum CO2 emissions per week</Text>
          </View>
          <View style={styles.goalInput}>
            <TextInput
              style={styles.input}
              value={weeklyGoal}
              onChangeText={setWeeklyGoal}
              keyboardType="numeric"
              placeholder="70"
            />
            <Text style={styles.unit}>kg</Text>
          </View>
        </View>

        <View style={styles.goalCard}>
          <Text style={styles.goalEmoji}>🗓️</Text>
          <View style={styles.goalContent}>
            <Text style={styles.goalTitle}>Monthly Goal</Text>
            <Text style={styles.goalDescription}>Maximum CO2 emissions per month</Text>
          </View>
          <View style={styles.goalInput}>
            <TextInput
              style={styles.input}
              value={monthlyGoal}
              onChangeText={setMonthlyGoal}
              keyboardType="numeric"
              placeholder="300"
            />
            <Text style={styles.unit}>kg</Text>
          </View>
        </View>

        <View style={styles.goalCard}>
          <Text style={styles.goalEmoji}>🎯</Text>
          <View style={styles.goalContent}>
            <Text style={styles.goalTitle}>Yearly Goal</Text>
            <Text style={styles.goalDescription}>Maximum CO2 emissions per year</Text>
          </View>
          <View style={styles.goalInput}>
            <TextInput
              style={styles.input}
              value={yearlyGoal}
              onChangeText={setYearlyGoal}
              keyboardType="numeric"
              placeholder="3650"
            />
            <Text style={styles.unit}>kg</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Goals</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 50,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  currentProgress: {
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
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  progressValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#28a745',
  },
  progressLabel: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginTop: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#28a745',
    borderRadius: 4,
  },
  goalsSection: {
    padding: 20,
  },
  goalCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  goalEmoji: {
    fontSize: 24,
    marginRight: 15,
  },
  goalContent: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  goalDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  goalInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 8,
    width: 60,
    textAlign: 'center',
    fontSize: 16,
  },
  unit: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
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
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CarbonGoalsScreen;