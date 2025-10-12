// API Configuration for EcoTrack Mobile App
// Update these values when your backend is ready

// Base API URL - Change this to your backend URL
export const API_BASE_URL = __DEV__ 
  ? 'http://localhost:3000' // Development
  : 'https://your-production-api.com'; // Production

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication & User Management
  AUTH: {
    LOGOUT: '/api/auth/logout',
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    REFRESH_TOKEN: '/api/auth/refresh',
  },
  
  USER: {
    PROFILE: '/api/user/profile',
    SETTINGS: '/api/user/settings',
    STATS: '/api/user/stats',
    PREFERENCES: '/api/user/preferences',
    CLEAR_CACHE: '/api/user/clear-cache',
    RESET_DATA: '/api/user/reset-data',
    CARBON_HISTORY: '/api/user/carbon-history',
    INSIGHTS_TODAY: '/api/user/insights/today',
    ANALYTICS: '/api/user/analytics',
    ACTIVITIES_BREAKDOWN: '/api/user/activities-breakdown',
    WEEKLY_REPORT: '/api/user/weekly-report',
    ACHIEVEMENTS: '/api/user/achievements',
    INTERACTIONS: '/api/user/interactions',
  },
  
  // Carbon Tracking
  CARBON: {
    CALCULATE: '/api/carbon/calculate',
    FACTORS: '/api/carbon/factors',
  },
  
  // Social Features
  LEADERBOARD: '/api/leaderboard',
  
  // Tips & Content
  TIPS: {
    DAILY: '/api/tips/daily',
    INTERACTION: '/api/tips/interaction',
  },
  
  // System
  APP: {
    CHECK_UPDATES: '/api/app/check-updates',
  },
};

// Request timeout (in milliseconds)
export const REQUEST_TIMEOUT = 10000;

// Default headers for API requests
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

// Helper function to build full URL
export const buildUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Helper function to get auth headers
export const getAuthHeaders = (token) => {
  return {
    ...DEFAULT_HEADERS,
    'Authorization': `Bearer ${token}`,
  };
};

// API Configuration object
export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: DEFAULT_HEADERS,
};

// Environment check
export const IS_DEV = __DEV__;
export const IS_PROD = !__DEV__;