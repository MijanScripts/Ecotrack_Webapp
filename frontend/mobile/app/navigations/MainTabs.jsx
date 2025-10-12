import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from 'react-native';
import HomeStack from "./HomeStack";
import InsightStack from "./InsightStack";
import LeaderboardStack from "./LeaderboardStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Home") {
            icon = "⌂";
          } else if (route.name === "Insights") {
            icon = "📈";
          } else if (route.name === "Leaderboard") {
            icon = "🏆";
          } else if (route.name === "Profile") {
            icon = "👤";
          }

          return <Text style={{ fontSize: size, color: '#000' }}>{icon}</Text>;
        },
        tabBarActiveTintColor: "#28a745",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Insights" component={InsightStack} />
      <Tab.Screen name="Leaderboard" component={LeaderboardStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default MainTabs;