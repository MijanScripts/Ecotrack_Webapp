import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL, API_ENDPOINTS, REQUEST_TIMEOUT, getAuthHeaders } from '../config/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.timeout = REQUEST_TIMEOUT;
  }

  // Get auth token from storage
  async getAuthToken() {
    try {
      return await AsyncStorage.getItem('authToken');
    } catch (error) {
      console.error('Error getting auth token:', error);
      return null;
    }
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const token = await this.getAuthToken();
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      timeout: this.timeout,
      headers: token ? getAuthHeaders(token) : { 'Content-Type': 'application/json' },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // GET request
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    
    return this.request(url, {
      method: 'GET',
    });
  }

  // POST request
  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }

  // Authentication methods
  async login(credentials) {
    return this.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
  }

  async logout() {
    return this.post(API_ENDPOINTS.AUTH.LOGOUT);
  }

  // User methods
  async getUserProfile() {
    return this.get(API_ENDPOINTS.USER.PROFILE);
  }

  async getUserStats() {
    return this.get(API_ENDPOINTS.USER.STATS);
  }

  async updateUserSettings(settings) {
    return this.put(API_ENDPOINTS.USER.SETTINGS, settings);
  }

  async updateUserPreferences(preferences) {
    return this.put(API_ENDPOINTS.USER.PREFERENCES, preferences);
  }

  async clearUserCache() {
    return this.post(API_ENDPOINTS.USER.CLEAR_CACHE);
  }

  async resetUserData() {
    return this.delete(API_ENDPOINTS.USER.RESET_DATA);
  }

  // Carbon tracking methods
  async calculateCarbon(carbonData) {
    return this.post(API_ENDPOINTS.CARBON.CALCULATE, carbonData);
  }

  async getCarbonFactors() {
    return this.get(API_ENDPOINTS.CARBON.FACTORS);
  }

  async saveCarbonHistory(historyData) {
    return this.post(API_ENDPOINTS.USER.CARBON_HISTORY, historyData);
  }

  async getTodayInsights() {
    return this.get(API_ENDPOINTS.USER.INSIGHTS_TODAY);
  }

  // Analytics methods
  async getAnalytics(period) {
    return this.get(API_ENDPOINTS.USER.ANALYTICS, { period });
  }

  async getActivitiesBreakdown() {
    return this.get(API_ENDPOINTS.USER.ACTIVITIES_BREAKDOWN);
  }

  async getWeeklyReport() {
    return this.get(API_ENDPOINTS.USER.WEEKLY_REPORT);
  }

  // Leaderboard methods
  async getLeaderboard(period) {
    return this.get(API_ENDPOINTS.LEADERBOARD, { period });
  }

  async getUserAchievements() {
    return this.get(API_ENDPOINTS.USER.ACHIEVEMENTS);
  }

  // Tips methods
  async getDailyTips() {
    return this.get(API_ENDPOINTS.TIPS.DAILY);
  }

  async trackTipInteraction(interactionData) {
    return this.post(API_ENDPOINTS.TIPS.INTERACTION, interactionData);
  }

  // System methods
  async checkForUpdates() {
    return this.get(API_ENDPOINTS.APP.CHECK_UPDATES);
  }

  async trackUserInteraction(action, data) {
    return this.post(API_ENDPOINTS.USER.INTERACTIONS, { action, data, timestamp: new Date().toISOString() });
  }
}

// Export singleton instance
export default new ApiService();