import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InsightScreen from "../features/insight/screens/InsightScreen";
import DetailedAnalyticsScreen from "../features/insight/screens/DetailedAnalyticsScreen";
import EcoTipsScreen from "../features/insight/screens/EcoTipsScreen";
import TipsScreen from "../features/insight/screens/TipsScreen";
import WeeklyShiftScreen from "../features/insight/screens/WeeklyShiftScreen";
import EnergyTipsScreen from "../features/insight/screens/EnergyTipsScreen";
import PlantPoweredScreen from "../features/insight/screens/PlantPoweredScreen";

const Stack = createNativeStackNavigator();

const InsightStack = () => {
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
        name="InsightMain" 
        component={InsightScreen}
        options={{ title: 'Insights' }}
      />
      <Stack.Screen 
        name="DetailedAnalytics" 
        component={DetailedAnalyticsScreen}
        options={{ title: 'Detailed Analytics' }}
      />
      <Stack.Screen 
        name="EcoTips" 
        component={EcoTipsScreen}
        options={{ title: 'Eco Tips' }}
      />
      <Stack.Screen 
        name="Tips" 
        component={TipsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="WeeklyShift" 
        component={WeeklyShiftScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="EnergyTips" 
        component={EnergyTipsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="PlantPowered" 
        component={PlantPoweredScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default InsightStack;