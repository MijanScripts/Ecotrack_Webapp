// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const AppNavigation = () => {
//   return (
//     <View>
//       <Text>AppNavigation</Text>
//     </View>
//   )
// }

// export default AppNavigation

// const styles = StyleSheet.create({})


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack } from "./AuthStack";
import MainTabs from "./MainTabs";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};

export { AppNavigator };
export default AppNavigator;
