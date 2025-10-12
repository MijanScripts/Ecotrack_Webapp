import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const NotificationsScreen = ({ navigation }) => {
  const [dailyReminders, setDailyReminders] = useState(true);
  const [goalAlerts, setGoalAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [achievements, setAchievements] = useState(true);
  const [leaderboard, setLeaderboard] = useState(false);
  const [tips, setTips] = useState(true);
  const [reminderTime, setReminderTime] = useState('8:00 PM');
  const [reportDay, setReportDay] = useState('Sunday');

  useEffect(() => {
    loadNotificationSettings();
  }, []);

  const loadNotificationSettings = async () => {
    try {
      const settings = await AsyncStorage.getItem('notificationSettings');
      if (settings) {
        const parsed = JSON.parse(settings);
        setDailyReminders(parsed.dailyReminders ?? true);
        setGoalAlerts(parsed.goalAlerts ?? true);
        setWeeklyReports(parsed.weeklyReports ?? false);
        setAchievements(parsed.achievements ?? true);
        setLeaderboard(parsed.leaderboard ?? false);
        setTips(parsed.tips ?? true);
        setReminderTime(parsed.reminderTime ?? '8:00 PM');
        setReportDay(parsed.reportDay ?? 'Sunday');
      }
    } catch (error) {
      console.error('Error loading notification settings:', error);
    }
  };

  const saveSettings = async () => {
    try {
      const settings = {
        dailyReminders,
        goalAlerts,
        weeklyReports,
        achievements,
        leaderboard,
        tips,
        reminderTime,
        reportDay
      };
      await AsyncStorage.setItem('notificationSettings', JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving notification settings:', error);
    }
  };

  const handleToggle = (setter, value) => {
    setter(value);
    setTimeout(saveSettings, 100);
  };

  const handleTimePress = () => {
    const times = ['6:00 AM', '7:00 AM', '8:00 AM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];
    Alert.alert('Select Time', 'Choose reminder time', 
      times.map(time => ({
        text: time,
        onPress: () => {
          setReminderTime(time);
          saveSettings();
        }
      }))
    );
  };

  const handleDayPress = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    Alert.alert('Select Day', 'Choose weekly report day',
      days.map(day => ({
        text: day,
        onPress: () => {
          setReportDay(day);
          saveSettings();
        }
      }))
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
        <View style={{ width: 24 }} />
      </View> */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Tracking</Text>
        
        <View style={styles.notificationItem}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Daily Reminders</Text>
            <Text style={styles.notificationDescription}>Remind me to log my daily activities</Text>
          </View>
          <Switch
            value={dailyReminders}
            onValueChange={(value) => handleToggle(setDailyReminders, value)}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>

        <View style={styles.notificationItem}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Goal Alerts</Text>
            <Text style={styles.notificationDescription}>Alert when approaching carbon goals</Text>
          </View>
          <Switch
            value={goalAlerts}
            onValueChange={setGoalAlerts}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reports & Insights</Text>
        
        <View style={styles.notificationItem}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Weekly Reports</Text>
            <Text style={styles.notificationDescription}>Weekly carbon footprint summary</Text>
          </View>
          <Switch
            value={weeklyReports}
            onValueChange={setWeeklyReports}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>

        <View style={styles.notificationItem}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Eco Tips</Text>
            <Text style={styles.notificationDescription}>Daily environmental tips and suggestions</Text>
          </View>
          <Switch
            value={tips}
            onValueChange={setTips}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Social & Achievements</Text>
        
        <View style={styles.notificationItem}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Achievements</Text>
            <Text style={styles.notificationDescription}>Notify when earning new badges</Text>
          </View>
          <Switch
            value={achievements}
            onValueChange={setAchievements}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>

        <View style={styles.notificationItem}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Leaderboard Updates</Text>
            <Text style={styles.notificationDescription}>Notify about ranking changes</Text>
          </View>
          <Switch
            value={leaderboard}
            onValueChange={setLeaderboard}
            trackColor={{ false: '#ddd', true: '#28a745' }}
          />
        </View>
      </View>

      <View style={styles.timeSection}>
        <Text style={styles.sectionTitle}>Notification Times</Text>
        
        <TouchableOpacity style={styles.timeItem} onPress={handleTimePress}>
          <Text style={styles.timeLabel}>Daily Reminder Time</Text>
          <Text style={styles.timeValue}>{reminderTime}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.timeItem} onPress={handleDayPress}>
          <Text style={styles.timeLabel}>Weekly Report Day</Text>
          <Text style={styles.timeValue}>{reportDay}</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
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
  notificationItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  timeSection: {
    padding: 20,
  },
  timeItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeLabel: {
    fontSize: 16,
    color: '#333',
  },
  timeValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#28a745',
  },
});

export default NotificationsScreen;