import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../features/home/screens/HomeScreen";
import TrackCarbonScreen from "../features/home/screens/TrackCarbonScreen";
import CarbonTrackerActiveScreen from "../features/home/screens/CarbonTrackerActiveScreen";
import CarbonInputScreen from "../features/home/screens/CarbonInputScreen";
import CarbonResultsScreen from "../features/home/screens/CarbonResultsScreen";
import CarbonTrackerScreen from "../features/home/screens/CarbonTrackerScreen";
import CarbonCalculatorScreen from "../features/home/screens/CarbonCalculatorScreen";
import EcoTipsHomeScreen from "../features/home/screens/EcoTipsHomeScreen";
import GoalsScreen from "../features/home/screens/GoalsScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
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
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen 
        name="HomeMain" 
        component={HomeScreen}
        options={{ title: 'EcoTrack', headerLeft: () => null }}
      />
      <Stack.Screen 
        name="TrackCarbon" 
        component={TrackCarbonScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="CarbonTrackerActive" 
        component={CarbonTrackerActiveScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="CarbonInputManual" 
        component={CarbonInputScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="CarbonResults" 
        component={CarbonResultsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="CarbonTracker" 
        component={CarbonTrackerScreen}
        options={{ title: 'Carbon Tracker' }}
      />
      <Stack.Screen 
        name="CarbonInput" 
        component={CarbonInputScreen}
        options={{ title: 'Log Activity' }}
      />
      <Stack.Screen 
        name="CarbonCalculator" 
        component={CarbonCalculatorScreen}
        options={{ title: 'Carbon Calculator' }}
      />
      <Stack.Screen 
        name="EcoTipsHome" 
        component={EcoTipsHomeScreen}
        options={{ title: 'Eco Tips' }}
      />
      <Stack.Screen 
        name="Goals" 
        component={GoalsScreen}
        options={{ title: 'Carbon Goals' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;