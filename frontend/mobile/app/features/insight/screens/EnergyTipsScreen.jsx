import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../../../components/Spacer';

const EnergyTipsScreen = ({ navigation }) => {
  const energyTips = [
    {
      icon: '💡',
      title: 'LED Lighting Switch',
      description: 'Replace incandescent bulbs with LED lights',
      savings: '75% less energy',
      impact: '0.5kg CO₂ per bulb monthly'
    },
    {
      icon: '🔌',
      title: 'Unplug Devices',
      description: 'Disconnect electronics when not in use',
      savings: '10% energy reduction',
      impact: '2.1kg CO₂ monthly'
    },
    {
      icon: '🌡️',
      title: 'Smart Thermostat',
      description: 'Adjust temperature by 2°C when away',
      savings: '15% heating/cooling costs',
      impact: '8.3kg CO₂ monthly'
    },
    {
      icon: '❄️',
      title: 'Efficient Appliances',
      description: 'Use energy-star rated appliances',
      savings: '20-30% less energy',
      impact: '12.5kg CO₂ monthly'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={20} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Energy Saving Tips</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <Spacer height={20} />
        
        <View style={styles.heroSection}>
          <Text style={styles.heroEmoji}>⚡</Text>
          <Text style={styles.heroTitle}>Save Energy & Reduce Carbon Footprint Instantly</Text>
          <Text style={styles.heroSubtitle}>Immediate actions you can take today to cut energy consumption</Text>
        </View>

        <Spacer height={30} />

        <Text style={styles.sectionTitle}>Quick Energy Savers</Text>
        <Spacer height={15} />

        {energyTips.map((tip, index) => (
          <View key={index} style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipIcon}>{tip.icon}</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipDescription}>{tip.description}</Text>
              <View style={styles.tipMetrics}>
                <Text style={styles.savings}>💰 {tip.savings}</Text>
                <Text style={styles.impact}>🌱 {tip.impact}</Text>
              </View>
            </View>
          </View>
        ))}

        <Spacer height={30} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏠 Home Energy Audit</Text>
          <Text style={styles.sectionText}>
            Conduct a simple energy audit by checking for air leaks around windows and doors. Seal gaps with weatherstripping to reduce heating and cooling costs by up to 20%.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>☀️ Natural Light Optimization</Text>
          <Text style={styles.sectionText}>
            Open curtains during the day and use natural light instead of artificial lighting. This simple habit can reduce electricity usage by 15% during daylight hours.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌊 Water Heating Efficiency</Text>
          <Text style={styles.sectionText}>
            Lower your water heater temperature to 120°F (49°C) and take shorter showers. This can save up to 18% on water heating costs and reduce CO₂ emissions by 6.2kg monthly.
          </Text>
        </View>

        <View style={styles.impactCard}>
          <Text style={styles.impactTitle}>Monthly Energy Impact</Text>
          <Text style={styles.impactText}>Total CO₂ Reduction: <Text style={styles.impactNumber}>29.6kg per month</Text></Text>
          <Text style={styles.impactText}>Annual Savings: <Text style={styles.impactNumber}>$480 - $720</Text></Text>
          <Text style={styles.impactSubtext}>Start with one tip today and add more each week!</Text>
        </View>

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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heroSection: {
    alignItems: 'center',
    backgroundColor: '#fff3cd',
    padding: 30,
    borderRadius: 15,
  },
  heroEmoji: {
    fontSize: 60,
    marginBottom: 15,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  section: {
    marginBottom: 25,
  },
  tipCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  tipIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff3cd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  tipIcon: {
    fontSize: 24,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  tipDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  tipMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  savings: {
    fontSize: 12,
    color: '#28a745',
    fontWeight: '600',
  },
  impact: {
    fontSize: 12,
    color: '#17a2b8',
    fontWeight: '600',
  },
  impactCard: {
    backgroundColor: '#ffc107',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  impactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  impactText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  impactNumber: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  impactSubtext: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default EnergyTipsScreen;