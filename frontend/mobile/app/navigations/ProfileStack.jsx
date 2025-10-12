import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../features/profile/screens/ProfileScreen";
import EditProfileScreen from "../features/profile/screens/EditProfileScreen";
import CarbonGoalsScreen from "../features/profile/screens/CarbonGoalsScreen";
import NotificationsScreen from "../features/profile/screens/NotificationsScreen";
import DataExportScreen from "../features/profile/screens/DataExportScreen";
import AppSettingsScreen from "../features/profile/screens/AppSettingsScreen";
import HelpSupportScreen from "../features/profile/screens/HelpSupportScreen";
import FAQScreen from "../features/profile/screens/FAQScreen";
import PrivacyPolicyScreen from "../features/profile/screens/PrivacyPolicyScreen";
import TermsOfServiceScreen from "../features/profile/screens/TermsOfServiceScreen";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
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
        name="ProfileMain" 
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen 
        name="EditProfile" 
        component={EditProfileScreen}
        options={{ title: 'Edit Profile' }}
      />
      <Stack.Screen 
        name="CarbonGoals" 
        component={CarbonGoalsScreen}
        options={{ title: 'Carbon Goals' }}
      />
      <Stack.Screen 
        name="Notifications" 
        component={NotificationsScreen}
        options={{ title: 'Notifications' }}
      />
      <Stack.Screen 
        name="DataExport" 
        component={DataExportScreen}
        options={{ title: 'Export Data' }}
      />
      <Stack.Screen 
        name="AppSettings" 
        component={AppSettingsScreen}
        options={{ title: 'Settings' }}
      />
      <Stack.Screen 
        name="HelpSupport" 
        component={HelpSupportScreen}
        options={{ title: 'Help & Support' }}
      />
      <Stack.Screen 
        name="FAQ" 
        component={FAQScreen}
        options={{ title: 'FAQ' }}
      />
      <Stack.Screen 
        name="PrivacyPolicy" 
        component={PrivacyPolicyScreen}
        options={{ title: 'Privacy Policy' }}
      />
      <Stack.Screen 
        name="TermsOfService" 
        component={TermsOfServiceScreen}
        options={{ title: 'Terms of Service' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;