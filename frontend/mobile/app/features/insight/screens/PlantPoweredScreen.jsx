import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../../../components/Spacer';

const PlantPoweredScreen = ({ navigation }) => {
  const plantFoods = [
    {
      food: 'Beef',
      plantAlternative: 'Lentils/Beans',
      co2Reduction: '27kg CO₂',
      frequency: 'per meal'
    },
    {
      food: 'Chicken',
      plantAlternative: 'Tofu/Tempeh',
      co2Reduction: '6.9kg CO₂',
      frequency: 'per meal'
    },
    {
      food: 'Dairy Milk',
      plantAlternative: 'Oat/Almond Milk',
      co2Reduction: '3.2kg CO₂',
      frequency: 'per liter'
    },
    {
      food: 'Cheese',
      plantAlternative: 'Nutritional Yeast',
      co2Reduction: '13.5kg CO₂',
      frequency: 'per 100g'
    }
  ];

  const weeklyMeals = [
    {
      day: 'Monday',
      meal: 'Lentil Curry with Rice',
      description: 'Protein-rich lentils with aromatic spices',
      co2Saved: '4.2kg'
    },
    {
      day: 'Wednesday',
      meal: 'Quinoa Buddha Bowl',
      description: 'Complete protein with fresh vegetables',
      co2Saved: '3.8kg'
    },
    {
      day: 'Friday',
      meal: 'Black Bean Tacos',
      description: 'Fiber-rich beans with fresh salsa',
      co2Saved: '5.1kg'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={20} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Plant-Powered Choices</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <Spacer height={20} />
        
        <View style={styles.heroSection}>
          <Text style={styles.heroEmoji}>🌱</Text>
          <Text style={styles.heroTitle}>Plant-Powered Choices: Lower Carbon with More Veggies</Text>
          <Text style={styles.heroSubtitle}>Discover how plant-based meals can dramatically reduce your environmental impact</Text>
        </View>

        <Spacer height={30} />

        <Text style={styles.sectionTitle}>🔄 Smart Food Swaps</Text>
        <Spacer height={15} />

        {plantFoods.map((item, index) => (
          <View key={index} style={styles.swapCard}>
            <View style={styles.swapHeader}>
              <Text style={styles.originalFood}>❌ {item.food}</Text>
              <FontAwesome name="arrow-right" size={16} color="#28a745" />
              <Text style={styles.plantFood}>✅ {item.plantAlternative}</Text>
            </View>
            <View style={styles.swapImpact}>
              <Text style={styles.co2Reduction}>Saves {item.co2Reduction} {item.frequency}</Text>
            </View>
          </View>
        ))}

        <Spacer height={30} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📊 The Numbers Don't Lie</Text>
          <Text style={styles.sectionText}>
            Animal agriculture accounts for 14.5% of global greenhouse gas emissions. By choosing plant-based meals just 3 days a week, you can reduce your food-related carbon footprint by 50%.
          </Text>
        </View>

        <Spacer height={20} />

        <Text style={styles.sectionTitle}>🍽️ Weekly Plant-Based Meal Plan</Text>
        <Spacer height={15} />

        {weeklyMeals.map((meal, index) => (
          <View key={index} style={styles.mealCard}>
            <View style={styles.mealHeader}>
              <Text style={styles.mealDay}>{meal.day}</Text>
              <Text style={styles.co2Badge}>-{meal.co2Saved} CO₂</Text>
            </View>
            <Text style={styles.mealName}>{meal.meal}</Text>
            <Text style={styles.mealDescription}>{meal.description}</Text>
          </View>
        ))}

        <Spacer height={30} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💪 Health Benefits</Text>
          <Text style={styles.sectionText}>
            Plant-based diets are linked to lower risks of heart disease, diabetes, and certain cancers. They're also rich in fiber, vitamins, and antioxidants while being naturally lower in saturated fats.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💰 Budget-Friendly</Text>
          <Text style={styles.sectionText}>
            Beans, lentils, and grains are among the most affordable protein sources. A plant-based diet can reduce your grocery bill by 20-30% while providing complete nutrition.
          </Text>
        </View>

        <View style={styles.impactCard}>
          <Text style={styles.impactTitle}>Your Plant-Powered Impact</Text>
          <Text style={styles.impactText}>Weekly CO₂ Reduction: <Text style={styles.impactNumber}>13.1kg</Text></Text>
          <Text style={styles.impactText}>Annual Impact: <Text style={styles.impactNumber}>681kg CO₂ saved</Text></Text>
          <Text style={styles.impactText}>Water Saved: <Text style={styles.impactNumber}>50,000 liters/year</Text></Text>
          <Text style={styles.impactSubtext}>Equivalent to taking a car off the road for 1,700 miles!</Text>
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
  swapCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  swapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  originalFood: {
    fontSize: 14,
    color: '#dc3545',
    fontWeight: '600',
    flex: 1,
  },
  plantFood: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
  swapImpact: {
    alignItems: 'center',
  },
  co2Reduction: {
    fontSize: 12,
    color: '#17a2b8',
    fontWeight: '600',
  },
  mealCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  mealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  mealDay: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
  },
  co2Badge: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#28a745',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontWeight: '600',
  },
  mealName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  mealDescription: {
    fontSize: 14,
    color: '#666',
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
    textAlign: 'center',
  },
});

export default PlantPoweredScreen;