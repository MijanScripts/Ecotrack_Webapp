import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputField from '../../../components/InputField';
import mockApiService from '../../../services/mockApi';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const user = JSON.parse(userData);
        setName(user.name || '');
        setEmail(user.email || '');
        setLocation(user.location || '');
        setProfileImageUrl(user.profileImage || '');
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const pickImageFromGallery = () => {
    const sampleImages = [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face'
    ];
    const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
    setProfileImageUrl(randomImage);
  };

  const pickImageFromCamera = () => {
    const sampleImages = [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face'
    ];
    const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
    setProfileImageUrl(randomImage);
  };



  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Name is required');
      return;
    }

    try {
      setLoading(true);
      const updatedProfile = {
        name: name.trim(),
        email,
        location: location.trim(),
        profileImage: profileImageUrl.trim()
      };

      await mockApiService.updateProfile(updatedProfile);
      
      // Update AsyncStorage
      const userData = await AsyncStorage.getItem('userData');
      const currentUser = userData ? JSON.parse(userData) : {};
      const updatedUser = { ...currentUser, ...updatedProfile };
      await AsyncStorage.setItem('userData', JSON.stringify(updatedUser));

      Alert.alert('Success', 'Profile updated successfully', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity onPress={handleSave} disabled={loading}>
          <Text style={[styles.saveText, loading && styles.disabledText]}>
            {loading ? 'Saving...' : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.imageSection}>
          <TouchableOpacity style={styles.imageContainer} onPress={() => Alert.alert('Image Picker', 'Select image from gallery or camera', [
            { text: 'Gallery', onPress: pickImageFromGallery },
            { text: 'Camera', onPress: pickImageFromCamera },
            { text: 'Cancel', style: 'cancel' }
          ])}>
            {profileImageUrl ? (
              <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
            ) : (
              <View style={styles.placeholderImage}>
                <Text style={styles.placeholderText}>{name.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Image Picker', 'Select image from gallery or camera', [
            { text: 'Gallery', onPress: pickImageFromGallery },
            { text: 'Camera', onPress: pickImageFromCamera },
            { text: 'Cancel', style: 'cancel' }
          ])}>
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>



        <InputField
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
          iconName="person-outline"
          autoCapitalize="words"
        />

        <InputField
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          iconName="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <InputField
          label="Location"
          placeholder="Enter your location"
          value={location}
          onChangeText={setLocation}
          iconName="location-outline"
          autoCapitalize="words"
        />


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  cancelText: {
    fontSize: 16,
    color: '#666',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  saveText: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: '600',
  },
  disabledText: {
    color: '#ccc',
  },
  content: {
    padding: 20,
  },
  imageSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  imageContainer: {
    marginBottom: 15,
    borderRadius: 60,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#28a745',
  },
  placeholderImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f8f9fa',
    borderWidth: 3,
    borderColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: '600',
  },
  changePhotoText: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: '500',
  },
});

export default EditProfileScreen;