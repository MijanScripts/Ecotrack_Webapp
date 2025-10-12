import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from '../../../components/Spacer';
import DataManager from '../../../utils/DataManager';

const CarbonInputScreen = ({ navigation }) => {
  const [highEnergyAppliances, setHighEnergyAppliances] = useState(null);
  const [heatingCooling, setHeatingCooling] = useState(null);
  const [lightsHours, setLightsHours] = useState(null);
  const [renewableEnergy, setRenewableEnergy] = useState(null);
  
  // TODO: API Integration - Uncomment when backend is ready
  // const [loading, setLoading] = useState(false);
  // const [carbonFactors, setCarbonFactors] = useState(null);
  //
  // useEffect(() => {
  //   fetchCarbonFactors();
  // }, []);
  //
  // const fetchCarbonFactors = async () => {
  //   try {
  //     const response = await fetch('/api/carbon/factors');
  //     const factors = await response.json();
  //     setCarbonFactors(factors);
  //   } catch (error) {
  //     console.error('Error fetching carbon factors:', error);
  //   }
  // };
  
  const [showHighEnergyDropdown, setShowHighEnergyDropdown] = useState(false);
  const [showHeatingDropdown, setShowHeatingDropdown] = useState(false);
  const [showLightsDropdown, setShowLightsDropdown] = useState(false);
  const [showRenewableDropdown, setShowRenewableDropdown] = useState(false);

  const hours = Array.from({ length: 24 }, (_, i) => i + 1);

  const clearFields = () => {
    setHighEnergyAppliances(null);
    setHeatingCooling(null);
    setLightsHours(null);
    setRenewableEnergy(null);
  };

  const calculateCarbon = async () => {
    // Validate all fields are filled
    if (!highEnergyAppliances || !heatingCooling || !lightsHours || !renewableEnergy) {
      return;
    }
    
    // TODO: API Integration - Replace with backend calculation
    // setLoading(true);
    // try {
    //   const carbonData = {
    //     highEnergyAppliances,
    //     heatingCooling,
    //     lightsHours,
    //     renewableEnergy,
    //     date: new Date().toISOString().split('T')[0],
    //     userId: 'current_user_id'
    //   };
    //   
    //   const response = await fetch('/api/carbon/calculate', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(carbonData)
    //   });
    //   
    //   const result = await response.json();
    //   
    //   // Save to user's carbon history
    //   await fetch('/api/user/carbon-history', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ ...carbonData, carbonFootprint: result.totalCarbon })
    //   });
    //   
    //   navigation.navigate('CarbonResults', { 
    //     carbonFootprint: result.totalCarbon.toFixed(1),
    //     breakdown: result.breakdown 
    //   });
    // } catch (error) {
    //   console.error('Error calculating carbon:', error);
    //   Alert.alert('Error', 'Failed to calculate carbon footprint');
    // } finally {
    //   setLoading(false);
    // }
    
    // Local calculation (temporary)
    let totalCarbon = 0;
    
    // High-energy appliances: 5kg CO2 if yes
    if (highEnergyAppliances === 'Yes') {
      totalCarbon += 5;
    }
    
    // Heating/cooling: 8kg CO2 if yes
    if (heatingCooling === 'Yes') {
      totalCarbon += 8;
    }
    
    // Lights: 0.5kg CO2 per hour
    if (lightsHours) {
      totalCarbon += lightsHours * 0.5;
    }
    
    // Renewable energy: -3kg CO2 if yes (reduction)
    if (renewableEnergy === 'Yes') {
      totalCarbon -= 3;
    }
    
    // Ensure minimum of 0
    totalCarbon = Math.max(0, totalCarbon);
    
    // Save to AsyncStorage
    try {
      const carbonEntry = {
        highEnergyAppliances,
        heatingCooling,
        lightsHours,
        renewableEnergy,
        carbon: totalCarbon.toFixed(1),
        date: new Date().toISOString().split('T')[0]
      };
      
      const existingData = await AsyncStorage.getItem('carbonCalculations');
      const carbonData = existingData ? JSON.parse(existingData) : [];
      carbonData.push(carbonEntry);
      
      await AsyncStorage.setItem('carbonCalculations', JSON.stringify(carbonData));
      
      // Notify other screens about data update
      DataManager.notifyDataUpdate();
    } catch (error) {
      console.error('Error saving carbon data:', error);
    }
    
    navigation.navigate('CarbonResults', { carbonFootprint: totalCarbon.toFixed(1) });
    clearFields();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={20} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Carbon Input</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <Spacer height={20} />
        
        <Text style={styles.subtitle}>Track your daily carbon usage</Text>
        
        <Spacer height={30} />
        
        {/* Question 1 */}
        <Text style={styles.questionText}>Did you use high-energy appliances today?</Text>
        <Spacer height={15} />
        <TouchableOpacity 
          style={styles.dropdown}
          onPress={() => setShowHighEnergyDropdown(!showHighEnergyDropdown)}
        >
          <Text style={styles.dropdownText}>
            {highEnergyAppliances || 'Select an option'}
          </Text>
          <FontAwesome name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
        {showHighEnergyDropdown && (
          <View style={styles.dropdownOptions}>
            <TouchableOpacity 
              style={styles.dropdownOption}
              onPress={() => {
                setHighEnergyAppliances('Yes');
                setShowHighEnergyDropdown(false);
              }}
            >
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.dropdownOption}
              onPress={() => {
                setHighEnergyAppliances('No');
                setShowHighEnergyDropdown(false);
              }}
            >
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <Spacer height={30} />
        
        {/* Question 2 */}
        <Text style={styles.questionText}>Did you heat or cool your home today?</Text>
        <Spacer height={15} />
        <TouchableOpacity 
          style={styles.dropdown}
          onPress={() => setShowHeatingDropdown(!showHeatingDropdown)}
        >
          <Text style={styles.dropdownText}>
            {heatingCooling || 'Select an option'}
          </Text>
          <FontAwesome name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
        {showHeatingDropdown && (
          <View style={styles.dropdownOptions}>
            <TouchableOpacity 
              style={styles.dropdownOption}
              onPress={() => {
                setHeatingCooling('Yes');
                setShowHeatingDropdown(false);
              }}
            >
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.dropdownOption}
              onPress={() => {
                setHeatingCooling('No');
                setShowHeatingDropdown(false);
              }}
            >
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <Spacer height={30} />
        
        {/* Question 3 */}
        <Text style={styles.questionText}>How many hours did you keep lights on at home/work today?</Text>
        <Spacer height={15} />
        <TouchableOpacity 
          style={styles.dropdown}
          onPress={() => setShowLightsDropdown(!showLightsDropdown)}
        >
          <Text style={styles.dropdownText}>
            {lightsHours ? `${lightsHours} hours` : 'Select hours'}
          </Text>
          <FontAwesome name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
        {showLightsDropdown && (
          <View style={styles.dropdownOptions}>
            <ScrollView style={styles.hoursScrollView} nestedScrollEnabled={true}>
              {hours.map((hour) => (
                <TouchableOpacity 
                  key={hour}
                  style={[styles.dropdownOption, hour === 24 && styles.lastOption]}
                  onPress={() => {
                    setLightsHours(hour);
                    setShowLightsDropdown(false);
                  }}
                >
                  <Text style={styles.optionText}>{hour} {hour === 1 ? 'hour' : 'hours'}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        
        <Spacer height={30} />
        
        {/* Question 4 */}
        <Text style={styles.questionText}>Did you use renewable energy today (eg, solar panels running)?</Text>
        <Spacer height={15} />
        <TouchableOpacity 
          style={styles.dropdown}
          onPress={() => setShowRenewableDropdown(!showRenewableDropdown)}
        >
          <Text style={styles.dropdownText}>
            {renewableEnergy || 'Select an option'}
          </Text>
          <FontAwesome name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
        {showRenewableDropdown && (
          <View style={styles.dropdownOptions}>
            <TouchableOpacity 
              style={styles.dropdownOption}
              onPress={() => {
                setRenewableEnergy('Yes');
                setShowRenewableDropdown(false);
              }}
            >
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.dropdownOption}
              onPress={() => {
                setRenewableEnergy('No');
                setShowRenewableDropdown(false);
              }}
            >
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <Spacer height={50} />
        
        <TouchableOpacity style={styles.submitButton} onPress={calculateCarbon}>
          <Text style={styles.submitButtonText}>Calculate Carbon</Text>
        </TouchableOpacity>
        
        <Spacer height={30} />
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
  subtitle: {
    fontSize: 16,
    textAlign: 'left',
    color: '#666',
    lineHeight: 24,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    lineHeight: 24,
  },
  dropdown: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  dropdownOptions: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 5,
    maxHeight: 200,
  },
  hoursScrollView: {
    maxHeight: 200,
  },
  dropdownOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CarbonInputScreen;