import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeaderboardScreen from "../features/leaderboard/screens/LeaderboardScreen";
import GlobalRankingsScreen from "../features/leaderboard/screens/GlobalRankingsScreen";
import ChallengesScreen from "../features/leaderboard/screens/ChallengesScreen";

const Stack = createNativeStackNavigator();

const LeaderboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#28a745',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen 
        name="LeaderboardMain" 
        component={LeaderboardScreen}
        options={{ title: 'Leaderboard' }}
      />
      <Stack.Screen 
        name="GlobalRankings" 
        component={GlobalRankingsScreen}
        options={{ title: 'Global Rankings' }}
      />
      <Stack.Screen 
        name="Challenges" 
        component={ChallengesScreen}
        options={{ title: 'Challenges' }}
      />
    </Stack.Navigator>
  );
};

export default LeaderboardStack;