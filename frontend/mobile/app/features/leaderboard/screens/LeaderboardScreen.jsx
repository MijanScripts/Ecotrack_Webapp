import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import Spacer from "../../../components/Spacer";
import mockApiService from '../../../services/mockApi';

const LeaderboardScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchLeaderboard();
  }, [selectedPeriod]);
  
  useFocusEffect(
    React.useCallback(() => {
      fetchLeaderboard();
    }, [selectedPeriod])
  );
  
  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const data = await mockApiService.getLeaderboard(selectedPeriod);
      setLeaderboardData(data);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // TODO: API Integration - Uncomment when backend is ready
  // const [leaderboardData, setLeaderboardData] = useState([]);
  // const [userAchievements, setUserAchievements] = useState([]);
  // const [loading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   fetchLeaderboardData();
  //   fetchUserAchievements();
  // }, [selectedPeriod]);
  //
  // const fetchLeaderboardData = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(`/api/leaderboard?period=${selectedPeriod}`);
  //     const data = await response.json();
  //     setLeaderboardData(data.rankings);
  //   } catch (error) {
  //     console.error('Error fetching leaderboard:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  //
  // const fetchUserAchievements = async () => {
  //   try {
  //     const response = await fetch('/api/user/achievements');
  //     const achievements = await response.json();
  //     setUserAchievements(achievements);
  //   } catch (error) {
  //     console.error('Error fetching achievements:', error);
  //   }
  // };
  //
  // const trackLeaderboardInteraction = async (action, data) => {
  //   try {
  //     await fetch('/api/user/interactions', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ action, data, timestamp: new Date().toISOString() })
  //     });
  //   } catch (error) {
  //     console.error('Error tracking interaction:', error);
  //   }
  // };
  


  const currentUser = leaderboardData.find(user => user.isCurrentUser);

  return (
    <ScrollView style={styles.container}>
      <Spacer height={20} />
      
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <FontAwesome name="trophy" size={40} color="#28a745" />
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>EcoLeaderboard</Text>
            <Text style={styles.headerSubtitle}>Compete with eco-warriors worldwide</Text>
          </View>
        </View>
      </View>

      <Spacer height={20} />

      {/* Period Selector */}
      <View style={styles.periodSelector}>
        <TouchableOpacity 
          style={[styles.periodButton, selectedPeriod === 'week' && styles.activePeriod]}
          onPress={() => {
            setSelectedPeriod('week');
            fetchLeaderboard();
          }}
        >
          <Text style={[styles.periodText, selectedPeriod === 'week' && styles.activePeriodText]}>This Week</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.periodButton, selectedPeriod === 'month' && styles.activePeriod]}
          onPress={() => {
            setSelectedPeriod('month');
            fetchLeaderboard();
          }}
        >
          <Text style={[styles.periodText, selectedPeriod === 'month' && styles.activePeriodText]}>This Month</Text>
        </TouchableOpacity>
      </View>

      {/* User Rank Card */}
      {currentUser && (
        <View style={styles.userRankCard}>
          <View style={styles.userRankHeader}>
            <FontAwesome name="user-circle" size={24} color="#28a745" />
            <Text style={styles.userRankTitle}>Your Ranking</Text>
          </View>
          <View style={styles.userRankContent}>
            <View style={styles.rankCircle}>
              <Text style={styles.userRank}>#{currentUser.rank}</Text>
            </View>
            <View style={styles.userStats}>
              <Text style={styles.userEmissions}>{currentUser.emissions} kg CO₂</Text>
              <View style={styles.reductionContainer}>
                <FontAwesome name="arrow-down" size={12} color="#28a745" />
                <Text style={styles.userReduction}>{Math.abs(currentUser.reduction)}% reduction</Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {/* Top 3 Podium */}
      <View style={styles.podiumSection}>
        <Text style={styles.sectionTitle}>🏆 Top Eco-Warriors</Text>
        
        {leaderboardData.slice(0, 3).map((user) => (
          <View key={user.rank} style={[styles.podiumCard, user.rank === 1 && styles.firstPlace]}>
            <View style={styles.rankBadge}>
              <FontAwesome 
                name={user.rank === 1 ? "trophy" : user.rank === 2 ? "star" : "star-o"} 
                size={24} 
                color={user.rank === 1 ? "#ffd700" : user.rank === 2 ? "#c0c0c0" : "#cd7f32"} 
              />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userEmissionsText}>{user.emissions} kg CO₂</Text>
            </View>
            <View style={styles.reductionBadge}>
              <FontAwesome name="leaf" size={12} color="#fff" />
              <Text style={styles.reductionText}>{Math.abs(user.reduction)}%</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Other Rankings */}
      <View style={styles.leaderboardSection}>
        <Text style={styles.othersTitle}>Other Rankings</Text>
        
        {leaderboardData.slice(3).map((user) => (
          <View key={user.rank} style={[styles.userCard, user.isCurrentUser && styles.currentUserCard]}>
            <View style={styles.rankNumber}>
              <Text style={styles.userRankNumber}>#{user.rank}</Text>
            </View>
            <FontAwesome name="user-circle" size={20} color="#666" style={styles.userIcon} />
            <View style={styles.userDetails}>
              <Text style={[styles.userNameRegular, user.isCurrentUser && styles.currentUserName]}>
                {user.name} {user.isCurrentUser && '(You)'}
              </Text>
              <Text style={styles.userEmissionsSmall}>{user.emissions} kg CO₂</Text>
            </View>
            <View style={styles.reductionSmallContainer}>
              <FontAwesome name="arrow-down" size={10} color="#28a745" />
              <Text style={styles.reductionSmall}>{Math.abs(user.reduction)}%</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Actions Section */}
      <View style={styles.actionsSection}>
        <Text style={styles.sectionTitle}>Explore More</Text>
        
        <TouchableOpacity 
          style={styles.actionCard}
          onPress={() => {
            // TODO: Track navigation
            // trackLeaderboardInteraction('navigate_global_rankings');
            navigation.navigate('GlobalRankings');
          }}
        >
          <View style={styles.actionIcon}>
            <FontAwesome name="globe" size={24} color="#28a745" />
          </View>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Global Rankings</Text>
            <Text style={styles.actionDescription}>See how you rank worldwide</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color="#28a745" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionCard}
          onPress={() => {
            // TODO: Track navigation
            // trackLeaderboardInteraction('navigate_challenges');
            navigation.navigate('Challenges');
          }}
        >
          <View style={styles.actionIcon}>
            <FontAwesome name="trophy" size={24} color="#28a745" />
          </View>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Eco Challenges</Text>
            <Text style={styles.actionDescription}>Join challenges and earn rewards</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color="#28a745" />
        </TouchableOpacity>
      </View>

      {/* Achievements Section */}
      <View style={styles.achievementSection}>
        <Text style={styles.sectionTitle}>Your Achievements</Text>
        <View style={styles.achievementCard}>
          <View style={styles.achievementIconContainer}>
            <FontAwesome name="leaf" size={20} color="#28a745" />
          </View>
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>Eco Beginner</Text>
            <Text style={styles.achievementDescription}>Reduced emissions for 7 consecutive days</Text>
          </View>
          <FontAwesome name="check-circle" size={16} color="#28a745" />
        </View>
        <View style={styles.achievementCard}>
          <View style={styles.achievementIconContainer}>
            <FontAwesome name="bicycle" size={20} color="#28a745" />
          </View>
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>Green Commuter</Text>
            <Text style={styles.achievementDescription}>Used sustainable transport 10 times</Text>
          </View>
          <FontAwesome name="check-circle" size={16} color="#28a745" />
        </View>
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
  headerContainer: {
    backgroundColor: '#e8f5e8',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  periodSelector: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 4,
  },
  periodButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  activePeriod: {
    backgroundColor: '#28a745',
  },
  periodText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  activePeriodText: {
    color: '#fff',
  },
  userRankCard: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  userRankHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  userRankTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  userRankContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  userRank: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
  },
  reductionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  userStats: {
    flex: 1,
  },
  userEmissions: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  userReduction: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '600',
  },
  podiumSection: {
    paddingHorizontal: 20,
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
  podiumCard: {
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
  firstPlace: {
    borderLeftWidth: 4,
    borderLeftColor: '#ffd700',
  },
  rankBadge: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  userEmissionsText: {
    fontSize: 14,
    color: '#666',
  },
  reductionBadge: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reductionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  othersTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginTop: 20,
    marginBottom: 10,
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  currentUserCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  rankNumber: {
    width: 40,
    alignItems: 'center',
  },
  userRankNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  userIcon: {
    marginRight: 10,
  },
  reductionSmallContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetails: {
    flex: 1,
    marginLeft: 10,
  },
  userNameRegular: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  currentUserName: {
    fontWeight: 'bold',
    color: '#28a745',
  },
  userEmissionsSmall: {
    fontSize: 12,
    color: '#666',
  },
  reductionSmall: {
    fontSize: 12,
    color: '#28a745',
    fontWeight: '600',
  },
  actionsSection: {
    paddingHorizontal: 20,
  },
  actionCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },

  achievementSection: {
    padding: 20,
  },
  achievementCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  achievementIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#28a745',
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default LeaderboardScreen;