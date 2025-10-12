import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../../../components/Spacer';

const WeeklyShiftScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={20} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weekly Climate Shift</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <Spacer height={20} />
        
        <View style={styles.heroSection}>
          <Text style={styles.heroEmoji}>🌍</Text>
          <Text style={styles.heroTitle}>A Simple Weekly Shift with a Big Climate Impact</Text>
          <Text style={styles.heroSubtitle}>Small changes in your weekly routine can create massive environmental benefits</Text>
        </View>

        <Spacer height={30} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🚗 Transportation Changes</Text>
          <Text style={styles.sectionText}>
            Replace just 2 car trips per week with walking, cycling, or public transport. This simple shift can reduce your carbon footprint by up to 2.6kg CO₂ weekly - that's 135kg per year!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🥗 Meal Planning Impact</Text>
          <Text style={styles.sectionText}>
            Choose plant-based meals for 3 days a week. This reduces food-related emissions by 50% and saves approximately 4.2kg CO₂ weekly. Plus, it's healthier for you!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚡ Energy Efficiency</Text>
          <Text style={styles.sectionText}>
            Unplug devices when not in use and switch to LED bulbs. This weekly habit can cut your energy consumption by 15% and reduce emissions by 3.1kg CO₂ weekly.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>♻️ Waste Reduction</Text>
          <Text style={styles.sectionText}>
            Implement proper recycling and composting for one week. This prevents 2.8kg of waste from landfills and reduces methane emissions significantly.
          </Text>
        </View>

        <View style={styles.impactCard}>
          <Text style={styles.impactTitle}>Weekly Impact Summary</Text>
          <Text style={styles.impactText}>Total CO₂ Reduction: <Text style={styles.impactNumber}>12.7kg per week</Text></Text>
          <Text style={styles.impactText}>Annual Impact: <Text style={styles.impactNumber}>660kg CO₂ saved</Text></Text>
          <Text style={styles.impactSubtext}>Equivalent to planting 30 trees annually!</Text>
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
    backgroundColor: '#e8f5e8',
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
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  impactCard: {
    backgroundColor: '#28a745',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  impactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  impactText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  impactNumber: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  impactSubtext: {
    fontSize: 14,
    color: '#e8f5e8',
    fontStyle: 'italic',
    marginTop: 10,
  },
});

export default WeeklyShiftScreen;