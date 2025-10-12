import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Spacer from '../../../components/Spacer';

const DetailedAnalyticsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.chartSection}>
        <Text style={styles.sectionTitle}>Monthly Trends</Text>
        <View style={styles.chartCard}>
          <Text style={styles.chartEmoji}>📊</Text>
          <Text style={styles.chartText}>Interactive charts coming soon</Text>
        </View>
      </View>

      <View style={styles.metricsSection}>
        <Text style={styles.sectionTitle}>Key Metrics</Text>
        
        <View style={styles.metricCard}>
          <Text style={styles.metricEmoji}>🎯</Text>
          <View style={styles.metricContent}>
            <Text style={styles.metricTitle}>Carbon Efficiency</Text>
            <Text style={styles.metricValue}>85%</Text>
            <Text style={styles.metricDescription}>Better than 70% of users</Text>
          </View>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricEmoji}>📈</Text>
          <View style={styles.metricContent}>
            <Text style={styles.metricTitle}>Improvement Rate</Text>
            <Text style={styles.metricValue}>-12%</Text>
            <Text style={styles.metricDescription}>Monthly reduction</Text>
          </View>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricEmoji}>🌱</Text>
          <View style={styles.metricContent}>
            <Text style={styles.metricTitle}>Eco Score</Text>
            <Text style={styles.metricValue}>742</Text>
            <Text style={styles.metricDescription}>Out of 1000 points</Text>
          </View>
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
  chartSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  chartCard: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  chartEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  chartText: {
    fontSize: 16,
    color: '#666',
  },
  metricsSection: {
    paddingHorizontal: 20,
  },
  metricCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  metricEmoji: {
    fontSize: 32,
    marginRight: 20,
  },
  metricContent: {
    flex: 1,
  },
  metricTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 2,
  },
  metricDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default DetailedAnalyticsScreen;