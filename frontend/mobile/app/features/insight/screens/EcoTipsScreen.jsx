import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Spacer from '../../../components/Spacer';

const EcoTipsScreen = ({ navigation }) => {
  const tips = [
    {
      category: 'Transportation',
      emoji: '🚗',
      title: 'Use Public Transport',
      description: 'Taking the bus or train can reduce your carbon footprint by up to 45%',
      impact: 'High Impact'
    },
    {
      category: 'Energy',
      emoji: '💡',
      title: 'Switch to LED Bulbs',
      description: 'LED bulbs use 75% less energy and last 25 times longer',
      impact: 'Medium Impact'
    },
    {
      category: 'Food',
      emoji: '🌱',
      title: 'Eat More Plant-Based Meals',
      description: 'Plant-based meals can reduce food emissions by 50%',
      impact: 'High Impact'
    },
    {
      category: 'Waste',
      emoji: '♻️',
      title: 'Recycle Properly',
      description: 'Proper recycling can reduce waste emissions by 30%',
      impact: 'Medium Impact'
    },
    {
      category: 'Water',
      emoji: '💧',
      title: 'Take Shorter Showers',
      description: 'Reducing shower time by 2 minutes saves 10 gallons of water',
      impact: 'Low Impact'
    },
    {
      category: 'Energy',
      emoji: '🌡️',
      title: 'Adjust Thermostat',
      description: 'Setting thermostat 2°F lower in winter saves 6% on heating',
      impact: 'Medium Impact'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tipsSection}>
        {tips.map((tip, index) => (
          <View key={index} style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Text style={styles.tipEmoji}>{tip.emoji}</Text>
              <View style={styles.tipInfo}>
                <Text style={styles.tipCategory}>{tip.category}</Text>
                <Text style={[styles.impactBadge, 
                  tip.impact === 'High Impact' ? styles.highImpact : 
                  tip.impact === 'Medium Impact' ? styles.mediumImpact : styles.lowImpact
                ]}>
                  {tip.impact}
                </Text>
              </View>
            </View>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipDescription}>{tip.description}</Text>
          </View>
        ))}
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
  tipsSection: {
    padding: 20,
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
  tipCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  impactBadge: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  highImpact: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  mediumImpact: {
    backgroundColor: '#fff3cd',
    color: '#856404',
  },
  lowImpact: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  tipDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default EcoTipsScreen;