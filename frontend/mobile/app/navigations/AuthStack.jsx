// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const AuthStack = () => {
//   return (
//     <View>
//       <Text>AuthStack</Text>
//     </View>
//   )
// }

// export default AuthStack

// const styles = StyleSheet.create({})


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../features/auth/screens/SplashScreen";
import LoginScreen from "../features/auth/screens/LoginScreen";
import RegisterScreen from "../features/auth/screens/RegisterScreen";
import EmailVerificationScreen from "../features/auth/screens/EmailVerificationScreen";
import ForgotPasswordScreen from "../features/auth/screens/ForgotPasswordScreen";
import OnboardingScreen from "../features/auth/screens/OnboardingScreen";
import OnboardingElectricityScreen from "../features/auth/screens/OnboardingElectricityScreen";
import OnboardingCommuteScreen from "../features/auth/screens/OnboardingCommuteScreen";
import OnboardingResultsScreen from "../features/auth/screens/OnboardingResultsScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="OnboardingElectricity" component={OnboardingElectricityScreen} />
      <Stack.Screen name="OnboardingCommute" component={OnboardingCommuteScreen} />
      <Stack.Screen name="OnboardingResults" component={OnboardingResultsScreen} />
    </Stack.Navigator>
  );
};

export { AuthStack };
export default AuthStack;
