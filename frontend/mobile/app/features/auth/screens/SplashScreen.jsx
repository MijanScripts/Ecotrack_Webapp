import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, Animated } from "react-native";
import Spacer from "../../../components/Spacer";

const EcoTrackLife = require('../../../../assets/EcoTrackLife.jpg');
const EcoTrack = require('../../../../assets/EcoTrack.png');

const SplashScreen = ({ navigation }) => {
  const [currentPart, setCurrentPart] = useState(1);
  const opacity1 = useRef(new Animated.Value(1)).current;
  const opacity2 = useRef(new Animated.Value(0)).current;
  const opacity3 = useRef(new Animated.Value(0)).current;
  const opacity4 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timers = [
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(opacity1, { 
            toValue: 0, 
            duration: 600, 
            useNativeDriver: true 
          }),
          Animated.timing(opacity2, { 
            toValue: 1, 
            duration: 600, 
            useNativeDriver: true 
          })
        ]).start();
      }, 2400),
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(opacity2, { 
            toValue: 0, 
            duration: 600, 
            useNativeDriver: true 
          }),
          Animated.timing(opacity3, { 
            toValue: 1, 
            duration: 600, 
            useNativeDriver: true 
          })
        ]).start();
      }, 5400),
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(opacity3, { 
            toValue: 0, 
            duration: 600, 
            useNativeDriver: true 
          }),
          Animated.timing(opacity4, { 
            toValue: 1, 
            duration: 600, 
            useNativeDriver: true 
          })
        ]).start();
      }, 8400),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [navigation]);

  const renderPart1 = () => (
    <View style={[styles.container, { backgroundColor: "#fff" }]}>
      <Image source={EcoTrack} style={styles.logoImage} />
    </View>
  );

  const renderPart2 = () => (
    <ImageBackground 
      source={EcoTrackLife} 
      style={styles.splashContainer}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.bottomSection}>
          <Text style={styles.appName}>Track Your Carbon</Text>
          <Text style={styles.tagline}>
            Every choice you make has a footprint. We'll help you measure it and cut it down,
            one step at a time.
          </Text>
          <TouchableOpacity
            style={[styles.splashButton, { backgroundColor: "#28a745" }]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.splashButtonText}>Start Tracking</Text>
          </TouchableOpacity>
          <Spacer height={40} />
        </View>
      </View>
    </ImageBackground>
  );

  const renderPart3 = () => (
    <ImageBackground 
      source={EcoTrackLife} 
      style={styles.splashContainer}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.bottomSection}>
          <Text style={styles.appName}>Turn insights into action</Text>
          <Text style={styles.tagline}>
            We'll give you practical health and economical tips that cut carbon without
            cutting convenience.
          </Text>
          <TouchableOpacity
            style={[styles.splashButton, { backgroundColor: "#28a745" }]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.splashButtonText}>Start Tracking</Text>
          </TouchableOpacity>
          <Spacer height={40} />
        </View>
      </View>
    </ImageBackground>
  );

  const renderPart4 = () => (
    <View style={styles.welcomeContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Image source={EcoTrack} style={styles.logo} />
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#28a745" }]}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={[styles.buttonText, { color: "#fff" }]}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#fff", borderWidth: 2, borderColor: "#28a745" }]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.buttonText, { color: "#28a745" }]}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[StyleSheet.absoluteFillObject, { opacity: opacity1 }]}>
        {renderPart1()}
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFillObject, { opacity: opacity2 }]}>
        {renderPart2()}
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFillObject, { opacity: opacity3 }]}>
        {renderPart3()}
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFillObject, { opacity: opacity4 }]}>
        {renderPart4()}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 500,
    height: 350,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: "#e8f5e8",
    textAlign: "center",
    paddingHorizontal: 40,
  },
  welcomeContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholder: {
    // width: 200,
    // height: 200,
    // backgroundColor: "#e8f5e8",
    // borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    // elevation: 4,
  },
  logo: {
    width: 500,
    height: 350,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  button: {
    marginBottom: 15,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  splashButton: {
    marginTop: 30,
    paddingHorizontal: 40,
    paddingVertical: 12,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
  },
  splashButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  splashContainer: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  bottomSection: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default SplashScreen;