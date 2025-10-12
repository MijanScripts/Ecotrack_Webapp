import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from '../../../components/Spacer';
import mockApiService from '../../../services/mockApi';

const ProfileScreen = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState({ name: 'User', email: 'user@example.com', points: 0, level: 1 });
  const [userStats, setUserStats] = useState({ daysTracked: 0, co2Saved: 0, achievements: 0, globalRank: 0 });
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUserData();
  }, []);
  
  useFocusEffect(
    React.useCallback(() => {
      fetchUserData();
    }, [])
  );
  
  const fetchUserData = async () => {
    try {
      setLoading(true);
      // Get user data from AsyncStorage first
      const userData = await AsyncStorage.getItem('userData');
      let profile = { name: 'User', email: 'user@example.com', points: 0, level: 1 };
      
      if (userData) {
        const user = JSON.parse(userData);
        profile = {
          name: user.name || 'User',
          email: user.email || 'user@example.com',
          points: user.points || 0,
          level: user.level || 1,
          profileImage: user.profileImage || null
        };
      } else {
        // Fallback to mock API if no stored user data
        profile = await mockApiService.getUserProfile();
      }
      
      // Get stats from mock API
      const stats = await mockApiService.getUserStats();
      
      console.log('Profile data loaded:', profile);
      setUserProfile(profile);
      setUserStats(stats);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            // TODO: API call for logout - Uncomment when backend is ready
            // try {
            //   await apiService.logout();
            //   await AsyncStorage.removeItem('authToken');
            //   await AsyncStorage.removeItem('userData');
            // } catch (error) {
            //   console.error('Error signing out:', error);
            // }
            
            // Clear all user data
            await AsyncStorage.clear();
            Alert.alert('Success', 'You have been signed out successfully');
            // Trigger auth state change to return to login
            global.forceAuthCheck?.();
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            {userProfile.profileImage ? (
              <Image source={{ uri: userProfile.profileImage }} style={styles.avatarImage} />
            ) : (
              <Text style={styles.avatarText}>{userProfile.name.split(' ').map(n => n[0]).join('').toUpperCase()}</Text>
            )}
          </View>
          <View style={styles.profileCenter}>
            <Text style={styles.userName}>{userProfile.name}</Text>
            <Text style={styles.tagline}>Tracking a greener Lifestyle</Text>
            <View style={styles.pointsRow}>
              <Text style={styles.points}>{userProfile.points} points</Text>
              <Text style={styles.level}>LV.{userProfile.level}</Text>
              <FontAwesome name="trophy" size={16} color="#FFD700" style={styles.awardIcon} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Your Impact</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{userStats.daysTracked}</Text>
            <Text style={styles.statLabel}>Days Tracked</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{userStats.co2Saved}</Text>
            <Text style={styles.statLabel}>Tons CO2 Saved</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{userStats.achievements}</Text>
            <Text style={styles.statLabel}>Achievements</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>#{userStats.globalRank}</Text>
            <Text style={styles.statLabel}>Global Rank</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Settings</Text>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.menuEmoji}>👤</Text>
          <Text style={styles.menuText}>Edit Profile</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CarbonGoals')}>
          <Text style={styles.menuEmoji}>🎯</Text>
          <Text style={styles.menuText}>Carbon Goals</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.menuEmoji}>🔔</Text>
          <Text style={styles.menuText}>Notifications</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DataExport')}>
          <Text style={styles.menuEmoji}>📊</Text>
          <Text style={styles.menuText}>Data Export</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AppSettings')}>
          <Text style={styles.menuEmoji}>⚙️</Text>
          <Text style={styles.menuText}>App Settings</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About</Text>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HelpSupport')}>
          <Text style={styles.menuEmoji}>❓</Text>
          <Text style={styles.menuText}>Help & Support</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text style={styles.menuEmoji}>📜</Text>
          <Text style={styles.menuText}>Privacy Policy</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('TermsOfService')}>
          <Text style={styles.menuEmoji}>📝</Text>
          <Text style={styles.menuText}>Terms of Service</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoutSection}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.versionSection}>
        <Text style={styles.versionText}>EcoTrack v1.0.0</Text>
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
    backgroundColor: '#fff',
    padding: 30,
    margin: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#28a745',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 2,
    borderColor: '#28a745',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28a745',
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileCenter: {
    flex: 1,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 8,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  points: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  level: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  awardIcon: {
    marginLeft: -2,
  },
  statsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '47%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  menuSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  aboutSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  menuEmoji: {
    fontSize: 20,
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  menuArrow: {
    fontSize: 20,
    color: '#28a745',
  },
  logoutSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  versionSection: {
    alignItems: 'center',
    marginBottom: 10,
  },
  versionText: {
    fontSize: 12,
    color: '#999',
  },
});

export default ProfileScreen;