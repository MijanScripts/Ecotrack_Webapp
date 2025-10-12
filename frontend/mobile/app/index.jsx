// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Ecotrack Mobile App</Text>
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#E6E6FA',
//     },
//     text: {
//         color: 'green',
//         fontSize: 24,
//         fontWeight: 'bold',
//     }
// })

import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './navigations/AuthStack';
import MainTabs from './navigations/MainTabs';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setLoading(false);
    }
  };

  // Global function to force auth recheck
  global.forceAuthCheck = () => {
    checkAuthStatus();
  };

  if (loading) {
    return null;
  }

  return isAuthenticated ? <MainTabs /> : <AuthStack />;
}
