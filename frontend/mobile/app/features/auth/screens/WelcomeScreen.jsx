// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// const EcoTrack = require('../../../../assets/EcoTrack.png');
// const EcoTrackLife = require('../../../../assets/EcoTrackLife.jpg');

// const WelcomeScreen = ({ navigation }) => {
//   const renderPart1 = () => (
//     <View style={styles.part1}>
//       <Image source={EcoTrack} style={styles.logo} />
//       <Text style={styles.title}>EcoTrack</Text>
//       <Text style={styles.subtitle}>Track your carbon footprint</Text>
//     </View>
//   );

//   const renderPart2 = () => (
//     <View style={styles.part2}>
//       <Text style={styles.welcomeText}>Welcome to a greener future!</Text>
//       <Text style={styles.description}>
//         Join millions of users making a positive impact on our planet.
//       </Text>
//     </View>
//   );

//   // const renderPart3 = () => (
//   //   <View style={styles.part3}>
//   //     <Text style={styles.featuresTitle}>Why EcoTrack?</Text>
//   //     <View style={styles.feature}>
//   //       <Text style={styles.featureIcon}>🌱</Text>
//   //       <Text style={styles.featureText}>Track your daily carbon footprint</Text>
//   //     </View>
//   //     <View style={styles.feature}>
//   //       <Text style={styles.featureIcon}>📊</Text>
//   //       <Text style={styles.featureText}>Get personalized insights</Text>
//   //     </View>
//   //     <View style={styles.feature}>
//   //       <Text style={styles.featureIcon}>🏆</Text>
//   //       <Text style={styles.featureText}>Compete with friends</Text>
//   //     </View>
//   //   </View>
//   // );

//   const renderPart4 = () => (
//     <View style={styles.part4}>
//       <Image source={EcoTrackLife} style={styles.welcomeImage} />
//       <Text style={styles.actionText}>Ready to make a difference?</Text>
//     </View>
//   );



//   return (
//     <View style={styles.container}>
//       {renderPart1()}
//       {renderPart2()}
//       {renderPart3()}
//       {renderPart4()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingHorizontal: 20,
//   },
//   part1: {
//     alignItems: 'center',
//     paddingTop: 60,
//     paddingBottom: 30,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     resizeMode: 'contain',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#28a745',
//     marginTop: 15,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginTop: 5,
//   },
//   part2: {
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 10,
//     lineHeight: 24,
//   },
//   part3: {
//     paddingVertical: 20,
//   },
//   featuresTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   feature: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//     paddingHorizontal: 20,
//   },
//   featureIcon: {
//     fontSize: 24,
//     marginRight: 15,
//   },
//   featureText: {
//     fontSize: 16,
//     color: '#333',
//     flex: 1,
//   },
//   part4: {
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   welcomeImage: {
//     width: 300,
//     height: 150,
//     resizeMode: 'cover',
//     borderRadius: 15,
//   },
//   actionText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#28a745',
//     marginTop: 15,
//     textAlign: 'center',
//   },

// });

// export default WelcomeScreen;