import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../../../components/Spacer';

const TipsScreen = ({ navigation }) => {
  const [showAllTips, setShowAllTips] = useState(false);

  const dailyTips = [
    { icon: '💡', title: 'Smart Transportation', text: 'Use public transport to reduce your carbon footprint by up to 45%' },
    { icon: '🌱', title: 'Plant-Based Diet', text: 'Choose plant-based meals to cut food emissions by 50%' },
    { icon: '♻️', title: 'Proper Recycling', text: 'Recycle properly to reduce waste and environmental impact' },
    { icon: '💧', title: 'Water Conservation', text: 'Take shorter showers and fix leaks to save water and energy' },
    { icon: '🌍', title: 'Energy Efficiency', text: 'Switch to LED bulbs and unplug devices when not in use' },
    { icon: '🌳', title: 'Go Paperless', text: 'Use digital receipts and bills to save trees and reduce waste' }
  ];

  const additionalTips = [
    { icon: '🌡️', title: 'Smart Thermostat', text: 'Adjust your thermostat by 2°C to save up to 10% on energy bills' },
    { icon: '🚲', title: 'Bike to Work', text: 'Cycling instead of driving saves 2.6kg of CO₂ per 10km journey' },
    { icon: '🍿', title: 'Compost Organic Waste', text: 'Composting reduces methane emissions and creates nutrient-rich soil' },
    { icon: '🛍️', title: 'Buy Local Products', text: 'Support local farmers and reduce transportation emissions' },
    { icon: '👕', title: 'Sustainable Fashion', text: 'Buy quality clothes that last longer and donate old items' },
    { icon: '☁️', title: 'Cloud Storage', text: 'Use cloud services instead of physical storage devices' },
    { icon: '🌊', title: 'Rainwater Harvesting', text: 'Collect rainwater for gardening and reduce water consumption' },
    { icon: '🌅', title: 'Solar Power', text: 'Consider solar panels to generate clean renewable energy' }
  ];

  const ecoGuides = [
    {
      title: 'A simple weekly shift with a big climate impact',
      image: '🌍'
    },
    {
      title: 'How to save energy and reduce your carbon footprints instantly',
      image: '⚡'
    },
    {
      title: 'Plant-powered choices:\nLower carbon with more veggies',
      image: '🌱'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={20} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tips</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <Spacer height={20} />
        
        {/* Daily Tips Section */}
        <View style={styles.dailyTipsHeader}>
          <Text style={styles.sectionTitle}>Daily Tips</Text>
          <TouchableOpacity onPress={() => setShowAllTips(!showAllTips)}>
            <Text style={styles.seeAllText}>{showAllTips ? 'Show less' : 'See all'}</Text>
          </TouchableOpacity>
        </View>
        
        <Spacer height={15} />
        
        {dailyTips.map((tip, index) => (
          <View key={index} style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipEmoji}>{tip.icon}</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipText}>{tip.text}</Text>
            </View>
          </View>
        ))}
        
        {showAllTips && additionalTips.map((tip, index) => (
          <View key={`additional-${index}`} style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipEmoji}>{tip.icon}</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipText}>{tip.text}</Text>
            </View>
          </View>
        ))}

        <Spacer height={30} />

        {/* Eco Guides Section */}
        <Text style={styles.sectionTitle}>Eco Guides</Text>
        
        <Spacer height={15} />
        
        {ecoGuides.map((guide, index) => {
          const screenNames = ['WeeklyShift', 'EnergyTips', 'PlantPowered'];
          return (
            <View key={index} style={styles.guideCard}>
              <View style={styles.guideImageContainer}>
                <Text style={styles.guideImage}>{guide.image}</Text>
              </View>
              <View style={styles.guideContent}>
                <Text style={styles.guideTitle}>{guide.title}</Text>
                <TouchableOpacity 
                  style={styles.viewDetailButton}
                  onPress={() => navigation.navigate(screenNames[index])}
                >
                  <Text style={styles.viewDetailText}>View detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        <Spacer height={20} />
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  dailyTipsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '600',
  },
  tipCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  tipIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  tipEmoji: {
    fontSize: 24,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#28a745',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  guideCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  guideImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  guideImage: {
    fontSize: 30,
  },
  guideContent: {
    flex: 1,
  },
  guideTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
  viewDetailButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  viewDetailText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TipsScreen;