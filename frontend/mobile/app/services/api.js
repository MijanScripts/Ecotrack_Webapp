// API Service Configuration
// TODO: Replace BASE_URL with your actual API endpoint
const BASE_URL = 'https://your-api-domain.com/api';

// TODO: Implement proper error handling and token management
class ApiService {
  constructor() {
    this.baseURL = BASE_URL;
  }

  // Helper method to get auth token
  // TODO: Implement token storage/retrieval with AsyncStorage
  async getAuthToken() {
    // return await AsyncStorage.getItem('authToken');
    return null;
  }

  // Helper method for making authenticated requests
  async makeRequest(endpoint, options = {}) {
    const token = await this.getAuthToken();
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Authentication APIs
  async login(email, password) {
    return this.makeRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData) {
    return this.makeRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout() {
    return this.makeRequest('/auth/logout', {
      method: 'POST',
    });
  }

  // User Profile APIs
  async getUserProfile() {
    return this.makeRequest('/user/profile');
  }

  async updateUserProfile(profileData) {
    return this.makeRequest('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  async submitOnboardingData(onboardingData) {
    return this.makeRequest('/user/onboarding', {
      method: 'POST',
      body: JSON.stringify(onboardingData),
    });
  }

  // Carbon Tracking APIs
  async getEmissionsSummary() {
    return this.makeRequest('/emissions/summary');
  }

  async logCarbonActivity(activityData) {
    return this.makeRequest('/emissions/log', {
      method: 'POST',
      body: JSON.stringify(activityData),
    });
  }

  async getCarbonHistory(period = 'week') {
    return this.makeRequest(`/emissions/history?period=${period}`);
  }

  // Insights APIs
  async getInsights(period = 'week') {
    return this.makeRequest(`/insights?period=${period}`);
  }

  async getDetailedAnalytics() {
    return this.makeRequest('/insights/analytics');
  }

  async getEcoTips() {
    return this.makeRequest('/insights/tips');
  }

  // Leaderboard APIs
  async getLeaderboard(period = 'week') {
    return this.makeRequest(`/leaderboard?period=${period}`);
  }

  async getGlobalRankings() {
    return this.makeRequest('/leaderboard/global');
  }

  async getChallenges() {
    return this.makeRequest('/challenges');
  }

  async joinChallenge(challengeId) {
    return this.makeRequest(`/challenges/${challengeId}/join`, {
      method: 'POST',
    });
  }

  // Goals APIs
  async getCarbonGoals() {
    return this.makeRequest('/goals');
  }

  async setCarbonGoal(goalData) {
    return this.makeRequest('/goals', {
      method: 'POST',
      body: JSON.stringify(goalData),
    });
  }

  // Notifications APIs
  async getNotificationSettings() {
    return this.makeRequest('/notifications/settings');
  }

  async updateNotificationSettings(settings) {
    return this.makeRequest('/notifications/settings', {
      method: 'PUT',
      body: JSON.stringify(settings),
    });
  }

  // Data Export APIs
  async exportUserData(format = 'json') {
    return this.makeRequest(`/user/export?format=${format}`);
  }
}

export default new ApiService();