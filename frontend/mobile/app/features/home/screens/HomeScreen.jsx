import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from '../../../components/Spacer';
import mockApiService from '../../../services/mockApi';
import DataManager from '../../../utils/DataManager';

const HomeScreen = ({ navigation }) => {
  const [showAllTips, setShowAllTips] = useState(false);
  const [userName, setUserName] = useState('User');
  const [userInsights, setUserInsights] = useState({ emission: 0, timeSpent: 0, majorActivity: 'None' });
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUserData();
  }, []);
  
  useFocusEffect(
    React.useCallback(() => {
      fetchUserData();
    }, [])
  );
  
  useEffect(() => {
    const handleDataUpdate = () => {
      fetchUserData();
    };
    
    DataManager.onDataUpdate(handleDataUpdate);
    
    return () => {
      DataManager.offDataUpdate(handleDataUpdate);
    };
  }, []);
  
  const fetchUserData = async () => {
    try {
      setLoading(true);
      // Get user data from AsyncStorage first
      const userData = await AsyncStorage.getItem('userData');
      let userName = 'User';
      
      if (userData) {
        const user = JSON.parse(userData);
        userName = user.name || 'User';
        setProfileImage(user.profileImage || null);
      } else {
        // Fallback to mock API if no stored user data
        const userProfile = await mockApiService.getUserProfile();
        userName = userProfile.name;
      }
      
      // Get insights from mock API
      const insights = await mockApiService.getTodayInsights();
      
      setUserName(userName);
      setUserInsights(insights);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // TODO: API Integration - Uncomment when backend is ready
  // const [userInsights, setUserInsights] = useState({ emission: 0, timeSpent: 0, majorActivity: 'None' });
  // const [userName, setUserName] = useState('UserName');
  // const [dailyTips, setDailyTips] = useState([]);
  // const [loading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   fetchHomeData();
  // }, []);
  //
  // const fetchHomeData = async () => {
  //   try {
  //     setLoading(true);
  //     const [userRes, insightsRes, tipsRes] = await Promise.all([
  //       fetch('/api/user/profile'),
  //       fetch('/api/user/insights/today'),
  //       fetch('/api/tips/daily')
  //     ]);
  //     const user = await userRes.json();
  //     const insights = await insightsRes.json();
  //     const tips = await tipsRes.json();
  //     setUserName(user.name);
  //     setUserInsights(insights);
  //     setDailyTips(tips);
  //   } catch (error) {
  //     console.error('Error fetching home data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  //
  // const trackTipInteraction = async (tipId, action) => {
  //   try {
  //     await fetch('/api/tips/interaction', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ tipId, action, timestamp: new Date().toISOString() })
  //     });
  //   } catch (error) {
  //     console.error('Error tracking tip interaction:', error);
  //   }
  // };
  
  return (
    <ScrollView style={styles.container}>
      <Spacer height={40} />
      
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <View style={styles.avatar}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.avatarImage} />
          ) : (
            <Text style={styles.avatarText}>{userName.split(' ').map(n => n[0]).join('').toUpperCase()}</Text>
          )}
        </View>
      </View>
      
      <Spacer height={20} />
      
      {/* Welcome Message */}
      <Text style={styles.welcomeMessage}>Welcome {userName},</Text>
      
      <Spacer height={10} />
      
      <Text style={styles.saveEarthMessage}>Let's save the earth together</Text>
      
      <Spacer height={30} />
      
      {/* Track Carbon Button */}
      <TouchableOpacity 
        style={styles.trackCarbonButton} 
        onPress={() => {
          // TODO: Track button interaction
          // trackTipInteraction('track_carbon_button', 'click');
          navigation.navigate('TrackCarbon');
        }}
      >
        <Text style={styles.trackCarbonText}>Track Carbon</Text>
      </TouchableOpacity>
      
      <Spacer height={30} />
      
      {/* Today's Insight */}
      <Text style={styles.sectionTitle}>Today's Insight</Text>
      
      <Spacer height={15} />
      
      <View style={styles.insightsContainer}>
        <View style={styles.insightItem}>
          <Text style={styles.insightIcon}>🌱</Text>
          <Text style={styles.insightTitle}>Emission</Text>
          <Text style={styles.insightNumber}>{userInsights.emission}kg</Text>
        </View>
        
        <View style={styles.insightItem}>
          <Text style={styles.insightIcon}>⏰</Text>
          <Text style={styles.insightTitle}>Time Spent</Text>
          <Text style={styles.insightNumber}>{userInsights.timeSpent}hrs</Text>
        </View>
        
        <View style={styles.insightItem}>
          <Text style={styles.insightIcon}>⚙️</Text>
          <Text style={styles.insightTitle}>Major Activity</Text>
          <Text style={styles.insightNumber}>{userInsights.majorActivity}</Text>
        </View>
      </View>
      
      <Spacer height={30} />
      
      {/* Daily Tips */}
      <View style={styles.dailyTipsHeader}>
        <Text style={styles.sectionTitle}>Daily Tips</Text>
        <TouchableOpacity onPress={() => {
          setShowAllTips(!showAllTips);
          // TODO: Track tips expansion
          // trackTipInteraction('daily_tips_expand', showAllTips ? 'collapse' : 'expand');
        }}>
          <Text style={styles.seeAllText}>{showAllTips ? 'Show less' : 'See all'}</Text>
        </TouchableOpacity>
      </View>
      
      <Spacer height={15} />
      
      <View style={styles.tipCard}>
        <View style={styles.tipIconContainer}>
          <Text style={styles.tipEmoji}>💡</Text>
        </View>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Smart Transportation</Text>
          <Text style={styles.tipText}>Use public transport to reduce your carbon footprint by up to 45%</Text>
        </View>
      </View>
      
      <View style={styles.tipCard}>
        <View style={styles.tipIconContainer}>
          <Text style={styles.tipEmoji}>🌱</Text>
        </View>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Plant-Based Diet</Text>
          <Text style={styles.tipText}>Choose plant-based meals to cut food emissions by 50%</Text>
        </View>
      </View>
      
      <View style={styles.tipCard}>
        <View style={styles.tipIconContainer}>
          <Text style={styles.tipEmoji}>♻️</Text>
        </View>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Proper Recycling</Text>
          <Text style={styles.tipText}>Recycle properly to reduce waste and environmental impact</Text>
        </View>
      </View>
      
      <View style={styles.tipCard}>
        <View style={styles.tipIconContainer}>
          <Text style={styles.tipEmoji}>💧</Text>
        </View>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Water Conservation</Text>
          <Text style={styles.tipText}>Take shorter showers and fix leaks to save water and energy</Text>
        </View>
      </View>
      
      <View style={styles.tipCard}>
        <View style={styles.tipIconContainer}>
          <Text style={styles.tipEmoji}>🌍</Text>
        </View>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Energy Efficiency</Text>
          <Text style={styles.tipText}>Switch to LED bulbs and unplug devices when not in use</Text>
        </View>
      </View>
      
      <View style={styles.tipCard}>
        <View style={styles.tipIconContainer}>
          <Text style={styles.tipEmoji}>🌳</Text>
        </View>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Go Paperless</Text>
          <Text style={styles.tipText}>Use digital receipts and bills to save trees and reduce waste</Text>
        </View>
      </View>
      
      {showAllTips && (
        <>
          <View style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipEmoji}>🌡️</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Smart Thermostat</Text>
              <Text style={styles.tipText}>Adjust your thermostat by 2°C to save up to 10% on energy bills</Text>
            </View>
          </View>
          
          <View style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipEmoji}>🚲</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Bike to Work</Text>
              <Text style={styles.tipText}>Cycling instead of driving saves 2.6kg of CO₂ per 10km journey</Text>
            </View>
          </View>
          
          <View style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipEmoji}>🍿</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Compost Organic Waste</Text>
              <Text style={styles.tipText}>Composting reduces methane emissions and creates nutrient-rich soil</Text>
            </View>
          </View>
          
          <View style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipEmoji}>🛍️</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Buy Local Products</Text>
              <Text style={styles.tipText}>Support local farmers and reduce transportation emissions</Text>
            </View>
          </View>
          
          <View style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipEmoji}>👕</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Sustainable Fashion</Text>
              <Text style={styles.tipText}>Buy quality clothes that last longer and donate old items</Text>
            </View>
          </View>
          
          <View style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipEmoji}>☁️</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Cloud Storage</Text>
              <Text style={styles.tipText}>Use cloud services instead of physical storage devices</Text>
            </View>
          </View>
          
          <View style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipEmoji}>🌊</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Rainwater Harvesting</Text>
              <Text style={styles.tipText}>Collect rainwater for gardening and reduce water consumption</Text>
            </View>
          </View>
          
          <View style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Text style={styles.tipEmoji}>🌅</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Solar Power</Text>
              <Text style={styles.tipText}>Consider solar panels to generate clean renewable energy</Text>
            </View>
          </View>
        </>
      )}

      <Spacer height={20} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  profilePictureContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#28a745',
  },
  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#28a745',
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  saveEarthMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  trackCarbonButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
  },
  trackCarbonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  insightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    padding: 20,
    margin: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  insightItem: {
    alignItems: 'center',
    flex: 1,
  },
  insightIcon: {
    fontSize: 32,
    marginBottom: 8,
    color: '#000',
  },

  insightTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  insightNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
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
});

export default HomeScreen;