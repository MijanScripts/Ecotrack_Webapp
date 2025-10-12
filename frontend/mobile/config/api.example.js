// Example usage of API configuration
// Copy this file to api.js and update with your actual API URLs

import apiService from '../services/apiService';

// Example: How to use the API service in your components

// 1. User Profile Example
export const fetchUserProfileExample = async () => {
  try {
    const profile = await apiService.getUserProfile();
    console.log('User profile:', profile);
    return profile;
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    throw error;
  }
};

// 2. Carbon Calculation Example
export const calculateCarbonExample = async (carbonData) => {
  try {
    const result = await apiService.calculateCarbon(carbonData);
    console.log('Carbon calculation result:', result);
    return result;
  } catch (error) {
    console.error('Failed to calculate carbon:', error);
    throw error;
  }
};

// 3. Leaderboard Example
export const fetchLeaderboardExample = async (period = 'week') => {
  try {
    const leaderboard = await apiService.getLeaderboard(period);
    console.log('Leaderboard data:', leaderboard);
    return leaderboard;
  } catch (error) {
    console.error('Failed to fetch leaderboard:', error);
    throw error;
  }
};

// 4. Settings Update Example
export const updateSettingsExample = async (settings) => {
  try {
    const result = await apiService.updateUserSettings(settings);
    console.log('Settings updated:', result);
    return result;
  } catch (error) {
    console.error('Failed to update settings:', error);
    throw error;
  }
};

// 5. Tips Interaction Example
export const trackTipInteractionExample = async (tipId, action) => {
  try {
    const result = await apiService.trackTipInteraction({
      tipId,
      action,
      timestamp: new Date().toISOString()
    });
    console.log('Tip interaction tracked:', result);
    return result;
  } catch (error) {
    console.error('Failed to track tip interaction:', error);
    throw error;
  }
};