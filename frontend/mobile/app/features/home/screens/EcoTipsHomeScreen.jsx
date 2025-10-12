import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Spacer from '../../../components/Spacer';

const EcoTipsHomeScreen = ({ navigation }) => {
  const quickTips = [
    {
      emoji: '💡',
      title: 'Switch to LED Bulbs',
      description: 'Save 75% energy and reduce emissions',
      category: 'Energy',
      impact: 'Medium'
    },
    {
      emoji: '🚲',
      title: 'Bike to Work',
      description: 'Zero emissions and great exercise',
      category: 'Transport',
      impact: 'High'
    },
    {
      emoji: '🌱',
      title: 'Plant-Based Monday',
      description: 'Reduce food emissions by 50%',
      category: 'Food',
      impact: 'High'
    },
    {
      emoji: '♻️',
      title: 'Recycle Properly',
      description: 'Sort waste to maximize recycling',
      category: 'Waste',
      impact: 'Medium'
    },
    {
      emoji: '💧',
      title: 'Fix Water Leaks',
      description: 'Save water and energy for heating',
      category: 'Water',
      impact: 'Low'
    },
    {
      emoji: '🌡️',
      title: 'Adjust Thermostat',
      description: '2°F change saves 6% on heating',
      category: 'Energy',
      impact: 'Medium'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🌿 Quick Eco Tips</Text>
        <Text style={styles.subtitle}>Simple actions for big impact</Text>
      </View>

      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Today's Recommendations</Text>
        
        {quickTips.map((tip, index) => (
          <View key={index} style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Text style={styles.tipEmoji}>{tip.emoji}</Text>
              <View style={styles.tipInfo}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipCategory}>{tip.category}</Text>
              </View>
              <View style={[styles.impactBadge, 
                tip.impact === 'High' ? styles.highImpact : 
                tip.impact === 'Medium' ? styles.mediumImpact : styles.lowImpact
              ]}>
                <Text style={styles.impactText}>{tip.impact}</Text>
              </View>
            </View>
            <Text style={styles.tipDescription}>{tip.description}</Text>
            
            <TouchableOpacity style={styles.tryButton}>
              <Text style={styles.tryButtonText}>Try This Tip</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.actionSection}>
        <TouchableOpacity 
          style={styles.moreButton}
          onPress={() => navigation.navigate('Insights', { screen: 'EcoTips' })}
        >
          <Text style={styles.moreButtonText}>View All Eco Tips</Text>
        </TouchableOpacity>
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
  tipsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  tipCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tipEmoji: {
    fontSize: 32,
    marginRight: 15,
  },
  tipInfo: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  tipCategory: {
    fontSize: 12,
    color: '#666',
  },
  impactBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  highImpact: {
    backgroundColor: '#d4edda',
  },
  mediumImpact: {
    backgroundColor: '#fff3cd',
  },
  lowImpact: {
    backgroundColor: '#f8d7da',
  },
  impactText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#333',
  },
  tipDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  tryButton: {
    backgroundColor: '#e8f5e8',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  tryButtonText: {
    color: '#28a745',
    fontSize: 14,
    fontWeight: '600',
  },
  actionSection: {
    paddingHorizontal: 20,
  },
  moreButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EcoTipsHomeScreen;