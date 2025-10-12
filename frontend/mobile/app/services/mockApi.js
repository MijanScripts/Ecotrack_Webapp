// Mock API service to simulate backend responses
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApiService = {
  // User Profile API
  async getUserProfile() {
    await delay(500); // Simulate network delay
    return {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      location: 'New York, USA',
      points: 1250,
      level: 3,
      joinDate: '2024-01-15',
      avatar: null
    };
  },

  // User Statistics API
  async getUserStats() {
    await delay(300);
    return {
      daysTracked: 89,
      co2Saved: 2.4,
      achievements: 12,
      globalRank: 47,
      weeklyReduction: 15.2,
      monthlyReduction: 8.7
    };
  },

  // Today's Insights API
  async getTodayInsights() {
    await delay(400);
    const activities = ['Driving', 'Heating', 'Lighting', 'Cooking', 'Electronics'];
    return {
      emission: Math.floor(Math.random() * 15) + 5, // 5-20 kg
      timeSpent: Math.floor(Math.random() * 10) + 2, // 2-12 hrs
      majorActivity: activities[Math.floor(Math.random() * activities.length)],
      date: new Date().toISOString().split('T')[0]
    };
  },

  // Daily Tips API
  async getDailyTips() {
    await delay(200);
    return [
      {
        id: 1,
        title: 'Smart Transportation',
        content: 'Use public transport to reduce your carbon footprint by up to 45%',
        category: 'transport',
        emoji: '💡'
      },
      {
        id: 2,
        title: 'Plant-Based Diet',
        content: 'Choose plant-based meals to cut food emissions by 50%',
        category: 'food',
        emoji: '🌱'
      },
      {
        id: 3,
        title: 'Energy Efficiency',
        content: 'Switch to LED bulbs and unplug devices when not in use',
        category: 'energy',
        emoji: '🌍'
      }
    ];
  },

  // Leaderboard API
  async getLeaderboard(period = 'week') {
    await delay(600);
    const names = ['Alice Green', 'Bob Eco', 'Carol Earth', 'David Clean', 'Emma Nature'];
    return names.map((name, index) => ({
      rank: index + 1,
      name: name,
      emissions: (Math.random() * 10 + 5).toFixed(1),
      reduction: (Math.random() * 20 + 10).toFixed(1),
      isCurrentUser: index === 2 // Make Carol Earth the current user
    }));
  },

  // Analytics API
  async getAnalytics(period = 'week') {
    await delay(500);
    const days = period === 'week' ? 7 : period === 'month' ? 30 : 365;
    return {
      period,
      totalEmissions: (Math.random() * 100 + 50).toFixed(1),
      averageDaily: (Math.random() * 10 + 5).toFixed(1),
      reduction: (Math.random() * 25 + 10).toFixed(1),
      chartData: Array.from({ length: days }, (_, i) => ({
        date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        emissions: Math.floor(Math.random() * 20) + 5
      }))
    };
  },

  // Carbon Calculation API
  async calculateCarbon(data) {
    await delay(800);
    let totalCarbon = 0;
    
    // High-energy appliances: 5kg CO2 if yes
    if (data.highEnergyAppliances === 'Yes') {
      totalCarbon += 5;
    }
    
    // Heating/cooling: 8kg CO2 if yes
    if (data.heatingCooling === 'Yes') {
      totalCarbon += 8;
    }
    
    // Lights: 0.5kg CO2 per hour
    if (data.lightsHours) {
      totalCarbon += data.lightsHours * 0.5;
    }
    
    // Renewable energy: -3kg CO2 if yes (reduction)
    if (data.renewableEnergy === 'Yes') {
      totalCarbon -= 3;
    }
    
    totalCarbon = Math.max(0, totalCarbon);
    
    return {
      totalCarbon: totalCarbon.toFixed(1),
      breakdown: {
        appliances: data.highEnergyAppliances === 'Yes' ? 5 : 0,
        heating: data.heatingCooling === 'Yes' ? 8 : 0,
        lighting: data.lightsHours ? data.lightsHours * 0.5 : 0,
        renewable: data.renewableEnergy === 'Yes' ? -3 : 0
      },
      date: new Date().toISOString().split('T')[0]
    };
  },

  // User Achievements API
  async getUserAchievements() {
    await delay(400);
    return [
      {
        id: 1,
        title: 'First Steps',
        description: 'Complete your first carbon tracking',
        icon: '🎯',
        unlocked: true,
        unlockedDate: '2024-01-20'
      },
      {
        id: 2,
        title: 'Week Warrior',
        description: 'Track carbon for 7 consecutive days',
        icon: '🔥',
        unlocked: true,
        unlockedDate: '2024-02-01'
      },
      {
        id: 3,
        title: 'Eco Champion',
        description: 'Reduce emissions by 50% in a month',
        icon: '🏆',
        unlocked: false,
        progress: 75
      }
    ];
  },

  // Track Tip Interaction
  async trackTipInteraction(tipId, action) {
    await delay(100);
    return { success: true, tipId, action, timestamp: new Date().toISOString() };
  },

  // Authentication APIs
  async login(email, password) {
    await delay(800);
    if (email && password) {
      return {
        success: true,
        token: 'mock_auth_token_' + Date.now(),
        user: {
          id: '1',
          name: 'John Doe',
          email: email,
          points: 1250,
          level: 3
        }
      };
    }
    throw new Error('Invalid credentials');
  },

  async register(userData) {
    await delay(1000);
    return {
      success: true,
      message: 'Registration successful. Please verify your email.',
      user: {
        id: '1',
        name: userData.name + ' ' + userData.lastName,
        email: userData.email,
        points: 0,
        level: 1
      }
    };
  },

  async verifyEmail(code) {
    await delay(600);
    if (code === '1234') {
      return {
        success: true,
        token: 'mock_auth_token_' + Date.now(),
        message: 'Email verified successfully'
      };
    }
    throw new Error('Invalid verification code');
  },

  async forgotPassword(email) {
    await delay(500);
    return {
      success: true,
      message: 'Password reset link sent to your email'
    };
  },

  async logout() {
    await delay(200);
    return { success: true, message: 'Logged out successfully' };
  },

  async updateProfile(profileData) {
    await delay(500);
    return {
      success: true,
      message: 'Profile updated successfully',
      user: {
        ...profileData,
        id: '1'
      }
    };
  },

  // Activities Breakdown API
  async getActivitiesBreakdown() {
    await delay(400);
    const totalEmissions = Math.random() * 50 + 20;
    const carEmissions = Math.random() * 20 + 5;
    const generatorEmissions = Math.random() * 15 + 3;
    const gasCookerEmissions = totalEmissions - carEmissions - generatorEmissions;
    
    return [
      {
        name: 'Car',
        value: parseFloat(carEmissions.toFixed(1)),
        percentage: Math.round((carEmissions / totalEmissions) * 100),
        color: '#ff6b6b'
      },
      {
        name: 'Generator',
        value: parseFloat(generatorEmissions.toFixed(1)),
        percentage: Math.round((generatorEmissions / totalEmissions) * 100),
        color: '#ffd93d'
      },
      {
        name: 'Gas Cooker',
        value: parseFloat(gasCookerEmissions.toFixed(1)),
        percentage: Math.round((gasCookerEmissions / totalEmissions) * 100),
        color: '#6bcf7f'
      }
    ];
  }
};

export default mockApiService;