import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from "../../../components/Spacer";
import mockApiService from '../../../services/mockApi';
import DataManager from '../../../utils/DataManager';

const InsightScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('Weekly');
  const [showDropdown, setShowDropdown] = useState(false);
  const [carbonData, setCarbonData] = useState([]);
  const [weeklyTotal, setWeeklyTotal] = useState(0);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // TODO: API Integration - Uncomment when backend is ready
  // const [analyticsData, setAnalyticsData] = useState(null);
  // const [activitiesBreakdown, setActivitiesBreakdown] = useState([]);
  // const [weeklyReport, setWeeklyReport] = useState(null);
  // const [loading, setLoading] = useState(true);
  
  const weeklyLimit = 100;
  
  useEffect(() => {
    loadCarbonData();
    fetchInsightsData();
  }, [selectedPeriod]);
  
  useFocusEffect(
    React.useCallback(() => {
      fetchInsightsData();
    }, [selectedPeriod])
  );
  
  useEffect(() => {
    const handleDataUpdate = () => {
      fetchInsightsData();
    };
    
    DataManager.onDataUpdate(handleDataUpdate);
    
    return () => {
      DataManager.offDataUpdate(handleDataUpdate);
    };
  }, [selectedPeriod]);
  
  const fetchInsightsData = async () => {
    try {
      setLoading(true);
      const storedData = await AsyncStorage.getItem('carbonCalculations');
      const carbonData = storedData ? JSON.parse(storedData) : [];
      
      // Calculate real analytics from stored data
      const realAnalytics = calculateRealAnalytics(carbonData, selectedPeriod);
      const realActivities = calculateRealActivities(carbonData);
      
      setAnalyticsData(realAnalytics);
      setActivities(realActivities);
      setWeeklyTotal(parseFloat(realAnalytics.totalEmissions));
    } catch (error) {
      console.error('Error fetching insights data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const calculateRealAnalytics = (carbonData, period) => {
    const now = new Date();
    const days = period === 'weekly' ? 7 : period === 'monthly' ? 30 : 365;
    
    // Filter data by period
    const filteredData = carbonData.filter(entry => {
      const entryDate = new Date(entry.date);
      const daysDiff = (now - entryDate) / (1000 * 60 * 60 * 24);
      return daysDiff <= days;
    });
    
    const totalEmissions = filteredData.reduce((sum, entry) => sum + parseFloat(entry.carbon), 0);
    const averageDaily = filteredData.length > 0 ? totalEmissions / Math.min(days, filteredData.length) : 0;
    
    // Create chart data for the period
    const chartData = [];
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const dateStr = date.toISOString().split('T')[0];
      const dayData = filteredData.filter(entry => entry.date === dateStr);
      const dayEmissions = dayData.reduce((sum, entry) => sum + parseFloat(entry.carbon), 0);
      
      chartData.push({
        date: dateStr,
        emissions: Math.round(dayEmissions * 10) / 10
      });
    }
    
    // If no data, provide sample chart data
    if (chartData.every(item => item.emissions === 0)) {
      const sampleData = [15, 12, 18, 8, 22, 16, 14];
      chartData.forEach((item, index) => {
        item.emissions = sampleData[index] || 10;
      });
    }
    
    return {
      period,
      totalEmissions: totalEmissions > 0 ? totalEmissions.toFixed(1) : '27.0',
      averageDaily: averageDaily > 0 ? averageDaily.toFixed(1) : '15.0',
      reduction: '0.0',
      chartData
    };
  };
  
  const calculateRealActivities = (carbonData) => {
    if (carbonData.length === 0) {
      return [
        { name: 'High Energy Appliances', value: 12.5, percentage: 45, color: '#ff6b6b' },
        { name: 'Heating/Cooling', value: 8.0, percentage: 30, color: '#ffd93d' },
        { name: 'Lighting', value: 6.5, percentage: 25, color: '#6bcf7f' }
      ];
    }
    
    let appliancesTotal = 0;
    let heatingTotal = 0;
    let lightingTotal = 0;
    
    carbonData.forEach(entry => {
      if (entry.highEnergyAppliances === 'Yes') appliancesTotal += 5;
      if (entry.heatingCooling === 'Yes') heatingTotal += 8;
      if (entry.lightsHours) lightingTotal += parseFloat(entry.lightsHours) * 0.5;
    });
    
    const total = appliancesTotal + heatingTotal + lightingTotal;
    
    if (total === 0) {
      return [
        { name: 'High Energy Appliances', value: 12.5, percentage: 45, color: '#ff6b6b' },
        { name: 'Heating/Cooling', value: 8.0, percentage: 30, color: '#ffd93d' },
        { name: 'Lighting', value: 6.5, percentage: 25, color: '#6bcf7f' }
      ];
    }
    
    return [
      {
        name: 'High Energy Appliances',
        value: parseFloat(appliancesTotal.toFixed(1)),
        percentage: Math.round((appliancesTotal / total) * 100),
        color: '#ff6b6b'
      },
      {
        name: 'Heating/Cooling',
        value: parseFloat(heatingTotal.toFixed(1)),
        percentage: Math.round((heatingTotal / total) * 100),
        color: '#ffd93d'
      },
      {
        name: 'Lighting',
        value: parseFloat(lightingTotal.toFixed(1)),
        percentage: Math.round((lightingTotal / total) * 100),
        color: '#6bcf7f'
      }
    ];
  };
  
  // TODO: API Integration - Uncomment when backend is ready
  // const fetchInsightsData = async () => {
  //   try {
  //     setLoading(true);
  //     const [analyticsRes, activitiesRes, reportRes] = await Promise.all([
  //       fetch(`/api/user/analytics?period=${selectedPeriod.toLowerCase()}`),
  //       fetch('/api/user/activities-breakdown'),
  //       fetch('/api/user/weekly-report')
  //     ]);
  //     
  //     const analytics = await analyticsRes.json();
  //     const activities = await activitiesRes.json();
  //     const report = await reportRes.json();
  //     
  //     setAnalyticsData(analytics);
  //     setActivitiesBreakdown(activities);
  //     setWeeklyReport(report);
  //     setWeeklyTotal(report.totalEmissions);
  //   } catch (error) {
  //     console.error('Error fetching insights data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  //
  // const updatePeriod = async (period) => {
  //   setSelectedPeriod(period);
  //   setShowDropdown(false);
  //   try {
  //     const response = await fetch(`/api/user/analytics?period=${period.toLowerCase()}`);
  //     const analytics = await response.json();
  //     setAnalyticsData(analytics);
  //   } catch (error) {
  //     console.error('Error updating analytics period:', error);
  //   }
  // };
  
  const loadCarbonData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('carbonCalculations');
      if (storedData) {
        const data = JSON.parse(storedData);
        setCarbonData(data);
        
        // Calculate weekly total
        const total = data.reduce((sum, entry) => sum + parseFloat(entry.carbon), 0);
        setWeeklyTotal(Math.round(total * 10) / 10);
      }
    } catch (error) {
      console.error('Error loading carbon data:', error);
    }
  };
  


  return (
    <ScrollView style={styles.container}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <View style={styles.leftSection}>
          <View style={styles.reportTitleContainer}>
            <Text style={styles.todayIcon}>📅</Text>
            <Text style={styles.reportTitle}>This week report</Text>
          </View>
          <Text style={styles.reportSubtitle}>
            You are almost there at your weekly average emission limit. Check out these tips to help you reduce or stay on track
          </Text>
          <View style={styles.tipsButtonContainer}>
            <TouchableOpacity 
              style={styles.tipsButton} 
              onPress={() => {
                // TODO: Track tips button interaction
                // trackUserInteraction('tips_button_click', { source: 'weekly_report' });
                navigation.navigate('Tips');
              }}
            >
              <Text style={styles.appleIcon}>🍏</Text>
              <Text style={styles.tipsButtonText}>Tips</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.rightSection}>
          <View style={styles.circularDisplay}>
            <View style={styles.carbonCircle}>
              <Text style={styles.carbonValue}>{weeklyTotal}</Text>
              <Text style={styles.carbonUnit}>kg CO₂</Text>
            </View>
          </View>
          <Text style={styles.limitText}>{weeklyTotal}/{weeklyLimit} kg weekly limit</Text>
        </View>
      </View>

      {/* CO2 Analytics Section */}
      <View style={styles.analyticsSection}>
        <View style={styles.analyticsHeader}>
          <Text style={styles.analyticsTitle}>CO2 Analytics</Text>
          <TouchableOpacity 
            style={styles.dropdown}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={styles.dropdownText}>{selectedPeriod}</Text>
            <FontAwesome name="chevron-down" size={14} color="#666" />
          </TouchableOpacity>
        </View>
        
        {showDropdown && (
          <View style={styles.dropdownOptions}>
            {['Weekly', 'Monthly', 'Yearly'].map((period) => (
              <TouchableOpacity 
                key={period}
                style={styles.dropdownOption}
                onPress={() => {
                  setSelectedPeriod(period);
                  setShowDropdown(false);
                  fetchInsightsData();
                }}
              >
                <Text style={styles.optionText}>{period}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        
        {/* CO2 Analytics Chart */}
        <View style={styles.graphContainer}>
          {analyticsData && analyticsData.chartData ? (
            <View style={styles.chartWrapper}>
              <View style={styles.chartHeader}>
                <Text style={styles.chartTitle}>Daily Emissions (kg CO₂)</Text>
                <Text style={styles.chartAverage}>Avg: {analyticsData.averageDaily} kg/day</Text>
              </View>
              <View style={styles.chart}>
                {analyticsData.chartData.slice(-7).map((data, index) => {
                  const height = Math.max((data.emissions / 25) * 80, 10); // Scale to max 80px
                  return (
                    <View key={index} style={styles.barContainer}>
                      <View style={[styles.bar, { height }]} />
                      <Text style={styles.barLabel}>{new Date(data.date).getDate()}</Text>
                      <Text style={styles.barValue}>{data.emissions}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          ) : (
            <Text style={styles.graphPlaceholder}>Loading chart data...</Text>
          )}
        </View>
      </View>

      {/* Activities Section */}
      <View style={styles.activitiesSection}>
        <Text style={styles.sectionTitle}>Activities</Text>
        
        {activities.map((activity, index) => (
          <View key={index} style={styles.activityCard}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityName}>{activity.name}</Text>
              <Text style={styles.activityPercentage}>{activity.percentage}%</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: `${activity.percentage}%`, backgroundColor: activity.color }]} />
            </View>
            <Text style={styles.activityValue}>{activity.value} kg CO₂</Text>
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
  topContainer: {
    backgroundColor: '#e8f5e8',
    margin: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  leftSection: {
    flex: 1,
    paddingRight: 15,
  },
  reportTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  todayIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  reportSubtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  tipsButtonContainer: {
    // alignItems: 'center',
    width: '60%',
  },
  tipsButton: {
    backgroundColor: '#28a745',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  appleIcon: {
    fontSize: 16,
    marginRight: 8,
    color: '#000',
  },
  tipsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  rightSection: {
    alignItems: 'center',
  },
  circularDisplay: {
    marginBottom: 10,
  },
  carbonCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  carbonValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
  },
  carbonUnit: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  limitText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  analyticsSection: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  analyticsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  analyticsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
    marginRight: 8,
  },
  dropdownOptions: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    zIndex: 1000,
    minWidth: 100,
  },
  dropdownOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  graphContainer: {
    height: 180,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 10,
  },
  graphPlaceholder: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 50,
  },
  chartWrapper: {
    flex: 1,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  chartTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  chartAverage: {
    fontSize: 12,
    color: '#666',
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 80,
    paddingHorizontal: 10,
  },
  barContainer: {
    alignItems: 'center',
    width: 35,
  },
  bar: {
    backgroundColor: '#28a745',
    width: 16,
    borderRadius: 2,
    marginBottom: 3,
  },
  barLabel: {
    fontSize: 9,
    color: '#666',
    marginTop: 1,
  },
  barValue: {
    fontSize: 7,
    color: '#999',
  },
  activitiesSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  activityCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  activityName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  activityPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
    marginBottom: 8,
  },
  progress: {
    height: '100%',
    borderRadius: 3,
  },
  activityValue: {
    fontSize: 12,
    color: '#666',
  },
});

export default InsightScreen;