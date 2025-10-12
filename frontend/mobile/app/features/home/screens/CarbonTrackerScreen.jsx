import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const CarbonTrackerScreen = () => {
  const [weeklyData] = useState([
    { day: 'Mon', footprint: 12.5 },
    { day: 'Tue', footprint: 8.3 },
    { day: 'Wed', footprint: 15.2 },
    { day: 'Thu', footprint: 9.7 },
    { day: 'Fri', footprint: 11.4 },
    { day: 'Sat', footprint: 6.8 },
    { day: 'Sun', footprint: 7.9 },
  ]);

  const totalWeekly = weeklyData.reduce((sum, day) => sum + day.footprint, 0);
  const averageDaily = (totalWeekly / 7).toFixed(1);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.summarySection}>
        <Text style={styles.sectionTitle}>Weekly Summary</Text>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total Weekly CO2</Text>
          <Text style={styles.summaryValue}>{totalWeekly.toFixed(1)} kg</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Daily Average</Text>
          <Text style={styles.summaryValue}>{averageDaily} kg</Text>
        </View>
      </View>

      <View style={styles.chartSection}>
        <Text style={styles.sectionTitle}>Daily Tracking</Text>
        {weeklyData.map((day, index) => (
          <View key={index} style={styles.dayRow}>
            <Text style={styles.dayLabel}>{day.day}</Text>
            <View style={styles.barContainer}>
              <View 
                style={[
                  styles.bar, 
                  { width: `${(day.footprint / 20) * 100}%` }
                ]} 
              />
            </View>
            <Text style={styles.dayValue}>{day.footprint} kg</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  summarySection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  summaryCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
  },
  chartSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dayLabel: {
    width: 40,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  barContainer: {
    flex: 1,
    height: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  bar: {
    height: '100%',
    backgroundColor: '#28a745',
    borderRadius: 10,
  },
  dayValue: {
    width: 60,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});

export default CarbonTrackerScreen;