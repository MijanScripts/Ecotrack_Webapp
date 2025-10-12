import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Spacer from '../../../components/Spacer';

const GlobalRankingsScreen = ({ navigation }) => {
  const globalUsers = [
    { rank: 1, name: 'EcoWarrior2024', score: 2847, country: '🇸🇪', reduction: '67%' },
    { rank: 2, name: 'GreenGuru', score: 2756, country: '🇩🇰', reduction: '64%' },
    { rank: 3, name: 'CarbonCrusher', score: 2698, country: '🇳🇴', reduction: '62%' },
    { rank: 4, name: 'EcoChampion', score: 2634, country: '🇫🇮', reduction: '59%' },
    { rank: 5, name: 'PlanetSaver', score: 2587, country: '🇨🇭', reduction: '58%' },
    { rank: 6, name: 'GreenMachine', score: 2543, country: '🇳🇱', reduction: '56%' },
    { rank: 7, name: 'EcoMaster', score: 2498, country: '🇦🇹', reduction: '55%' },
    { rank: 8, name: 'ClimateHero', score: 2456, country: '🇩🇪', reduction: '53%' },
    { rank: 9, name: 'SustainableSam', score: 2412, country: '🇫🇷', reduction: '52%' },
    { rank: 10, name: 'EcoExpert', score: 2378, country: '🇧🇪', reduction: '51%' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.yourRank}>
        <Text style={styles.yourRankTitle}>Your Global Rank</Text>
        <View style={styles.yourRankCard}>
          <Text style={styles.yourRankNumber}>#1,247</Text>
          <Text style={styles.yourRankScore}>1,856 points</Text>
          <Text style={styles.yourRankReduction}>42% reduction</Text>
        </View>
      </View>

      <View style={styles.leaderboardSection}>
        <Text style={styles.sectionTitle}>Top 10 Global</Text>
        
        {globalUsers.map((user, index) => (
          <View key={index} style={[styles.userCard, index < 3 && styles.topThree]}>
            <View style={styles.rankSection}>
              <Text style={[styles.rankNumber, index < 3 && styles.topRankNumber]}>
                #{user.rank}
              </Text>
              {index === 0 && <Text style={styles.crown}>👑</Text>}
              {index === 1 && <Text style={styles.medal}>🥈</Text>}
              {index === 2 && <Text style={styles.medal}>🥉</Text>}
            </View>
            
            <View style={styles.userInfo}>
              <View style={styles.userHeader}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.country}>{user.country}</Text>
              </View>
              <Text style={styles.userScore}>{user.score} points</Text>
              <Text style={styles.userReduction}>{user.reduction} carbon reduction</Text>
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
  yourRank: {
    padding: 20,
    paddingTop: 20,
  },
  yourRankTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  yourRankCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  yourRankNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#28a745',
  },
  yourRankScore: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  yourRankReduction: {
    fontSize: 14,
    color: '#666',
  },
  leaderboardSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  topThree: {
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  rankSection: {
    width: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rankNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  topRankNumber: {
    color: '#28a745',
  },
  crown: {
    fontSize: 20,
    marginLeft: 5,
  },
  medal: {
    fontSize: 16,
    marginLeft: 5,
  },
  userInfo: {
    flex: 1,
    marginLeft: 15,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  country: {
    fontSize: 20,
  },
  userScore: {
    fontSize: 14,
    fontWeight: '600',
    color: '#28a745',
    marginBottom: 2,
  },
  userReduction: {
    fontSize: 12,
    color: '#666',
  },
});

export default GlobalRankingsScreen;