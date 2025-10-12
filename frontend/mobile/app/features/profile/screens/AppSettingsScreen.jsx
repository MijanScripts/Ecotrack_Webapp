import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from '../../../components/Spacer';

const AppSettingsScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [autoSync, setAutoSync] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [crashReports, setCrashReports] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const settings = await AsyncStorage.getItem('appSettings');
      if (settings) {
        const parsed = JSON.parse(settings);
        setDarkMode(parsed.darkMode ?? false);
        setAutoSync(parsed.autoSync ?? true);
        setOfflineMode(parsed.offlineMode ?? false);
        setAnalytics(parsed.analytics ?? true);
        setCrashReports(parsed.crashReports ?? true);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const saveSettings = async () => {
    try {
      const settings = {
        darkMode,
        autoSync,
        offlineMode,
        analytics,
        crashReports
      };
      await AsyncStorage.setItem('appSettings', JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  const handleToggle = (setter, value) => {
    setter(value);
    setTimeout(saveSettings, 100);
  };

  // TODO: API Integration
  // useEffect(() => {
  //   fetchUserSettings();
  // }, []);
  //
  // const fetchUserSettings = async () => {
  //   try {
  //     const response = await fetch('/api/user/settings');
  //     const settings = await response.json();
  //     setDarkMode(settings.darkMode);
  //     setAutoSync(settings.autoSync);
  //     setOfflineMode(settings.offlineMode);
  //     setAnalytics(settings.analytics);
  //     setCrashReports(settings.crashReports);
  //   } catch (error) {
  //     console.error('Error fetching settings:', error);
  //   }
  // };
  //
  // const updateSetting = async (key, value) => {
  //   try {
  //     await fetch('/api/user/settings', {
  //       method: 'PUT',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ [key]: value })
  //     });
  //   } catch (error) {
  //     console.error('Error updating setting:', error);
  //   }
  // };

  const handleClearCache = async () => {
    try {
      await AsyncStorage.multiRemove(['carbonCalculations', 'userData', 'notificationSettings']);
      Alert.alert('Success', 'Cache cleared successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to clear cache');
    }
  };

  const handleClearCacheOld = () => {
    Alert.alert(
      'Clear Cache',
      'This will clear temporary files and free up storage space. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          onPress: async () => {
            // TODO: API call to clear cache
            // try {
            //   await fetch('/api/user/clear-cache', { method: 'POST' });
            //   Alert.alert('Success', 'Cache cleared successfully!');
            // } catch (error) {
            //   Alert.alert('Error', 'Failed to clear cache');
            // }
            Alert.alert('Success', 'Cache cleared successfully!');
          }
        }
      ]
    );
  };

  const handleResetData = () => {
    Alert.alert(
      'Reset App Data',
      'This will permanently delete all your local data and settings. This cannot be undone!',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            // TODO: API call to reset data
            // try {
            //   await fetch('/api/user/reset-data', { method: 'DELETE' });
            //   Alert.alert('Data Reset', 'All local data has been cleared.');
            // } catch (error) {
            //   Alert.alert('Error', 'Failed to reset data');
            // }
            Alert.alert('Data Reset', 'All local data has been cleared.');
          }
        }
      ]
    );
  };

  const handleCheckUpdates = async () => {
    // TODO: API call to check for updates
    // try {
    //   const response = await fetch('/api/app/check-updates');
    //   const { hasUpdate, latestVersion } = await response.json();
    //   if (hasUpdate) {
    //     Alert.alert('Update Available', `Version ${latestVersion} is available!`);
    //   } else {
    //     Alert.alert('Check Updates', 'You are using the latest version of EcoTrack!');
    //   }
    // } catch (error) {
    //   Alert.alert('Error', 'Failed to check for updates');
    // }
    Alert.alert('Check Updates', 'You are using the latest version of EcoTrack!');
  };

  const handleUnitChange = (type) => {
    const options = {
      carbon: ['kg CO2', 'lbs CO2', 'tons CO2'],
      distance: ['Kilometers', 'Miles'],
      language: ['English', 'Spanish', 'French', 'German'],
      timezone: ['GMT+1 (Lagos)', 'GMT+0 (London)', 'GMT-5 (New York)', 'GMT+8 (Beijing)']
    };
    
    Alert.alert(
      `Select ${type.charAt(0).toUpperCase() + type.slice(1)}`,
      'Choose your preferred option:',
      options[type]?.map(option => ({
        text: option,
        onPress: async () => {
          // TODO: API call to update preference
          // try {
          //   await fetch('/api/user/preferences', {
          //     method: 'PUT',
          //     headers: { 'Content-Type': 'application/json' },
          //     body: JSON.stringify({ [type]: option })
          //   });
          //   Alert.alert('Updated', `${type} changed to ${option}`);
          // } catch (error) {
          //   Alert.alert('Error', 'Failed to update preference');
          // }
          Alert.alert('Updated', `${type} changed to ${option}`);
        }
      })) || []
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>App Settings</Text>
        <View style={{ width: 24 }} />
      </View> */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        
        <View style={styles.settingItem}>
          <FontAwesome name="moon-o" size={20} color="#28a745" style={styles.settingIcon} />
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Dark Mode</Text>
            <Text style={styles.settingDescription}>Use dark theme for the app</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={(value) => handleToggle(setDarkMode, value)}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data & Sync</Text>
        
        <View style={styles.settingItem}>
          <FontAwesome name="refresh" size={20} color="#28a745" style={styles.settingIcon} />
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Auto Sync</Text>
            <Text style={styles.settingDescription}>Automatically sync data when online</Text>
          </View>
          <Switch
            value={autoSync}
            onValueChange={(value) => {
              setAutoSync(value);
              // TODO: API call to update setting
              // updateSetting('autoSync', value);
            }}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>

        <View style={styles.settingItem}>
          <FontAwesome name="wifi" size={20} color="#28a745" style={styles.settingIcon} />
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Offline Mode</Text>
            <Text style={styles.settingDescription}>Allow app to work without internet</Text>
          </View>
          <Switch
            value={offlineMode}
            onValueChange={(value) => {
              setOfflineMode(value);
              // TODO: API call to update setting
              // updateSetting('offlineMode', value);
            }}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>

        <TouchableOpacity style={styles.actionItem} onPress={handleClearCache}>
          <FontAwesome name="trash-o" size={20} color="#28a745" style={styles.settingIcon} />
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Clear Cache</Text>
            <Text style={styles.actionDescription}>Free up storage space</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color="#28a745" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem} onPress={handleResetData}>
          <FontAwesome name="warning" size={20} color="#dc3545" style={styles.settingIcon} />
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Reset App Data</Text>
            <Text style={styles.actionDescription}>Clear all local data and settings</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color="#28a745" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy & Analytics</Text>
        
        <View style={styles.settingItem}>
          <FontAwesome name="bar-chart" size={20} color="#28a745" style={styles.settingIcon} />
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Usage Analytics</Text>
            <Text style={styles.settingDescription}>Help improve the app with usage data</Text>
          </View>
          <Switch
            value={analytics}
            onValueChange={(value) => {
              setAnalytics(value);
              // TODO: API call to update setting
              // updateSetting('analytics', value);
            }}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>

        <View style={styles.settingItem}>
          <FontAwesome name="bug" size={20} color="#28a745" style={styles.settingIcon} />
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Crash Reports</Text>
            <Text style={styles.settingDescription}>Send crash reports to help fix bugs</Text>
          </View>
          <Switch
            value={crashReports}
            onValueChange={(value) => {
              setCrashReports(value);
              // TODO: API call to update setting
              // updateSetting('crashReports', value);
            }}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Units & Preferences</Text>
        
        <TouchableOpacity style={styles.preferenceItem} onPress={() => handleUnitChange('carbon')}>
          <FontAwesome name="leaf" size={20} color="#28a745" style={styles.settingIcon} />
          <Text style={styles.preferenceLabel}>Carbon Unit</Text>
          <View style={styles.preferenceRight}>
            <Text style={styles.preferenceValue}>kg CO2</Text>
            <FontAwesome name="chevron-right" size={16} color="#28a745" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.preferenceItem} onPress={() => handleUnitChange('distance')}>
          <FontAwesome name="road" size={20} color="#28a745" style={styles.settingIcon} />
          <Text style={styles.preferenceLabel}>Distance Unit</Text>
          <View style={styles.preferenceRight}>
            <Text style={styles.preferenceValue}>Kilometers</Text>
            <FontAwesome name="chevron-right" size={16} color="#28a745" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.preferenceItem} onPress={() => handleUnitChange('language')}>
          <FontAwesome name="globe" size={20} color="#28a745" style={styles.settingIcon} />
          <Text style={styles.preferenceLabel}>Language</Text>
          <View style={styles.preferenceRight}>
            <Text style={styles.preferenceValue}>English</Text>
            <FontAwesome name="chevron-right" size={16} color="#28a745" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.preferenceItem} onPress={() => handleUnitChange('timezone')}>
          <FontAwesome name="clock-o" size={20} color="#28a745" style={styles.settingIcon} />
          <Text style={styles.preferenceLabel}>Time Zone</Text>
          <View style={styles.preferenceRight}>
            <Text style={styles.preferenceValue}>GMT+1 (Lagos)</Text>
            <FontAwesome name="chevron-right" size={16} color="#28a745" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        
        <View style={styles.infoItem}>
          <FontAwesome name="mobile" size={20} color="#28a745" style={styles.settingIcon} />
          <Text style={styles.infoLabel}>App Version</Text>
          <Text style={styles.infoValue}>1.0.0</Text>
        </View>

        <View style={styles.infoItem}>
          <FontAwesome name="code" size={20} color="#28a745" style={styles.settingIcon} />
          <Text style={styles.infoLabel}>Build Number</Text>
          <Text style={styles.infoValue}>2024.01.15</Text>
        </View>

        <TouchableOpacity style={styles.actionItem} onPress={handleCheckUpdates}>
          <FontAwesome name="download" size={20} color="#28a745" style={styles.settingIcon} />
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Check for Updates</Text>
            <Text style={styles.actionDescription}>Look for app updates</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color="#28a745" />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 50,
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  settingItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  settingIcon: {
    marginRight: 15,
    width: 24,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  actionItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  actionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  preferenceItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  preferenceLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  preferenceValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#28a745',
  },
  infoItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
  },
  preferenceRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default AppSettingsScreen;