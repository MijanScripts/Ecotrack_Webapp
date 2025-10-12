import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Spacer from '../../../components/Spacer';

const ChallengesScreen = ({ navigation }) => {
  const activeChallenges = [
    {
      title: 'Car-Free Week',
      description: 'Use only public transport or walk for 7 days',
      progress: 65,
      reward: '500 points',
      timeLeft: '2 days left',
      participants: 1247,
      emoji: '🚶‍♂️'
    },
    {
      title: 'Plant-Based Month',
      description: 'Eat only plant-based meals for 30 days',
      progress: 23,
      reward: '1000 points',
      timeLeft: '23 days left',
      participants: 856,
      emoji: '🌱'
    }
  ];

  const upcomingChallenges = [
    {
      title: 'Zero Waste Weekend',
      description: 'Produce no waste for 48 hours',
      reward: '300 points',
      startDate: 'Starts in 5 days',
      participants: 432,
      emoji: '♻️'
    },
    {
      title: 'Energy Saver Challenge',
      description: 'Reduce energy consumption by 30%',
      reward: '750 points',
      startDate: 'Starts in 12 days',
      participants: 678,
      emoji: '⚡'
    }
  ];

  const completedChallenges = [
    {
      title: 'Plastic-Free Week',
      description: 'Avoid single-use plastics for 7 days',
      reward: '400 points',
      status: 'Completed',
      emoji: '🏆'
    },
    {
      title: 'Bike to Work',
      description: 'Cycle to work for 5 consecutive days',
      reward: '350 points',
      status: 'Completed',
      emoji: '🚴‍♂️'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Challenges</Text>
        {activeChallenges.map((challenge, index) => (
          <View key={index} style={styles.challengeCard}>
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeEmoji}>{challenge.emoji}</Text>
              <View style={styles.challengeInfo}>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <Text style={styles.challengeDescription}>{challenge.description}</Text>
              </View>
            </View>
            
            <View style={styles.progressSection}>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: `${challenge.progress}%` }]} />
              </View>
              <Text style={styles.progressText}>{challenge.progress}% complete</Text>
            </View>
            
            <View style={styles.challengeFooter}>
              <Text style={styles.reward}>🏆 {challenge.reward}</Text>
              <Text style={styles.timeLeft}>{challenge.timeLeft}</Text>
              <Text style={styles.participants}>{challenge.participants} joined</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Challenges</Text>
        {upcomingChallenges.map((challenge, index) => (
          <View key={index} style={styles.challengeCard}>
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeEmoji}>{challenge.emoji}</Text>
              <View style={styles.challengeInfo}>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <Text style={styles.challengeDescription}>{challenge.description}</Text>
              </View>
            </View>
            
            <View style={styles.challengeFooter}>
              <Text style={styles.reward}>🏆 {challenge.reward}</Text>
              <Text style={styles.startDate}>{challenge.startDate}</Text>
              <Text style={styles.participants}>{challenge.participants} interested</Text>
            </View>
            
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Challenge</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Completed</Text>
        {completedChallenges.map((challenge, index) => (
          <View key={index} style={[styles.challengeCard, styles.completedCard]}>
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeEmoji}>{challenge.emoji}</Text>
              <View style={styles.challengeInfo}>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <Text style={styles.challengeDescription}>{challenge.description}</Text>
              </View>
            </View>
            
            <View style={styles.challengeFooter}>
              <Text style={styles.reward}>🏆 {challenge.reward}</Text>
              <Text style={styles.completedStatus}>{challenge.status}</Text>
            </View>
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
  section: {
    padding: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  challengeCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  completedCard: {
    opacity: 0.7,
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  challengeEmoji: {
    fontSize: 32,
    marginRight: 15,
  },
  challengeInfo: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  progressSection: {
    marginBottom: 15,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: 5,
  },
  progress: {
    height: '100%',
    backgroundColor: '#28a745',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  reward: {
    fontSize: 14,
    fontWeight: '600',
    color: '#28a745',
  },
  timeLeft: {
    fontSize: 12,
    color: '#ff6b6b',
    fontWeight: '600',
  },
  startDate: {
    fontSize: 12,
    color: '#666',
  },
  participants: {
    fontSize: 12,
    color: '#666',
  },
  completedStatus: {
    fontSize: 12,
    color: '#28a745',
    fontWeight: '600',
  },
  joinButton: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ChallengesScreen;