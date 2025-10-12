# EcoTrack Mobile App

A React Native mobile application for tracking and reducing carbon footprint with real-time monitoring, insights, and eco-friendly tips.

## 📱 Overview

EcoTrack is a comprehensive carbon footprint tracking application that helps users monitor their daily environmental impact through various activities like transportation, energy usage, and lifestyle choices. The app provides personalized insights, tips, and gamification elements to encourage sustainable living.

## 🚀 Features

- **Carbon Tracking**: Real-time and manual carbon footprint calculation
- **Activity Monitoring**: Track transportation, energy usage, and daily activities
- **Insights Dashboard**: Weekly/monthly analytics with visual progress tracking
- **Eco Tips & Guides**: Comprehensive sustainability recommendations
- **Gamification**: Points system and leaderboards for motivation
- **User Profiles**: Personal settings and progress tracking

## 🛠 Tech Stack

### Core Framework
- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and toolchain
- **JavaScript/JSX**: Primary programming language

### Navigation
- **@react-navigation/native**: Core navigation library
- **@react-navigation/bottom-tabs**: Bottom tab navigation
- **@react-navigation/native-stack**: Stack navigation for nested screens

### UI Components & Icons
- **@expo/vector-icons**: Icon library (FontAwesome icons)
- **React Native Elements**: UI component library

### Data Storage
- **@react-native-async-storage/async-storage**: Local data persistence

### Development Tools
- **Expo CLI**: Development and build tools
- **Metro Bundler**: JavaScript bundler for React Native

## 📦 Dependencies

```json
{
  "dependencies": {
    "@react-native-async-storage/async-storage": "^2.2.0",
    "@react-navigation/bottom-tabs": "^7.4.8",
    "@react-navigation/native": "^7.1.18",
    "@react-navigation/native-stack": "^7.3.27",
    "expo": "~53.0.20",
    "expo-constants": "~17.1.7",
    "expo-linking": "~7.1.7",
    "expo-router": "~5.1.7",
    "expo-status-bar": "~2.2.3",
    "react": "19.0.0",
    "react-native": "0.79.5",
    "react-native-safe-area-context": "5.4.0",
    "react-native-screens": "~4.11.1"
  }
}
```

## 📁 Project Structure

```
frontend/mobile/
├── app/                          # Main application directory
│   ├── components/               # Reusable UI components
│   │   └── Spacer.jsx           # Spacing utility component
│   ├── features/                # Feature-based modules
│   │   ├── auth/                # Authentication features
│   │   │   ├── components/      # Auth-specific components
│   │   │   ├── hooks/           # Auth-related hooks
│   │   │   └── screens/         # Auth screens
│   │   │       ├── SplashScreen.jsx
│   │   │       ├── LoginScreen.jsx
│   │   │       ├── RegisterScreen.jsx
│   │   │       ├── ForgotPasswordScreen.jsx
│   │   │       └── OnboardingScreen.jsx
│   │   ├── home/                # Home tab features
│   │   │   ├── components/      # Home-specific components
│   │   │   ├── hooks/           # Home-related hooks
│   │   │   └── screens/         # Home screens
│   │   │       ├── HomeScreen.jsx
│   │   │       ├── TrackCarbonScreen.jsx
│   │   │       ├── CarbonTrackerActiveScreen.jsx
│   │   │       ├── CarbonInputScreen.jsx
│   │   │       └── CarbonResultsScreen.jsx
│   │   ├── insight/             # Insights tab features
│   │   │   ├── components/      # Insight-specific components
│   │   │   ├── hooks/           # Insight-related hooks
│   │   │   └── screens/         # Insight screens
│   │   │       ├── InsightScreen.jsx
│   │   │       ├── TipsScreen.jsx
│   │   │       ├── WeeklyShiftScreen.jsx
│   │   │       ├── EnergyTipsScreen.jsx
│   │   │       └── PlantPoweredScreen.jsx
│   │   ├── leaderboard/         # Leaderboard tab features
│   │   │   └── screens/
│   │   │       └── LeaderboardScreen.jsx
│   │   └── profile/             # Profile tab features
│   │       └── screens/
│   │           └── ProfileScreen.jsx
│   ├── navigations/             # Navigation configuration
│   │   ├── HomeStack.jsx        # Home tab navigation stack
│   │   ├── InsightStack.jsx     # Insights tab navigation stack
│   │   ├── LeaderboardStack.jsx # Leaderboard tab navigation stack
│   │   └── ProfileStack.jsx     # Profile tab navigation stack
│   ├── hooks/                   # Global custom hooks
│   ├── providers/               # Context providers
│   ├── services/                # API and external services
│   ├── styles/                  # Global styles and themes
│   ├── utils/                   # Utility functions
│   └── index.jsx               # Main app entry point
├── assets/                      # Static assets
│   ├── EcoTrack.png            # App logo
│   ├── EcoTrackLife.jpg        # Splash screen image
│   ├── icon.png                # App icon
│   └── splash-icon.png         # Splash screen icon
├── package.json                # Dependencies and scripts
└── app.json                    # Expo configuration
```

## 🏗 Architecture Overview

### Navigation Architecture
The app uses a **Tab-based navigation** with **Stack navigators** for each tab:

```
TabNavigator (Bottom Tabs)
├── Home Tab → HomeStack
│   ├── HomeScreen (Main dashboard)
│   ├── TrackCarbonScreen (Activity selection)
│   ├── CarbonTrackerActiveScreen (Real-time tracking)
│   ├── CarbonInputScreen (Manual input)
│   └── CarbonResultsScreen (Results display)
├── Insights Tab → InsightStack
│   ├── InsightScreen (Analytics dashboard)
│   ├── TipsScreen (Daily tips)
│   ├── WeeklyShiftScreen (Climate guide)
│   ├── EnergyTipsScreen (Energy guide)
│   └── PlantPoweredScreen (Plant-based guide)
├── Leaderboard Tab → LeaderboardStack
└── Profile Tab → ProfileStack
```

### Data Flow Architecture
1. **Local Storage**: AsyncStorage for persistent data
2. **State Management**: React hooks (useState, useEffect)
3. **Navigation State**: React Navigation state management
4. **Component Communication**: Props and navigation parameters

## 🎨 Design System

### Color Palette
- **Primary Green**: `#28a745` (buttons, active states)
- **Light Green**: `#e8f5e8` (backgrounds, containers)
- **Text Colors**: `#333` (primary), `#666` (secondary)
- **Background**: `#fff` (white), `#f5f5f5` (light gray)

### Typography
- **Headers**: 18-24px, bold
- **Body Text**: 14-16px, regular
- **Captions**: 12-14px, light

### Component Patterns
- **Cards**: White background, rounded corners, subtle shadows
- **Buttons**: Green primary, white secondary with green borders
- **Icons**: FontAwesome icons throughout the app
- **Spacing**: Consistent 10px, 15px, 20px, 30px increments

## 🔧 Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/your-org/Ecotrack_Webapp.git
cd Ecotrack_Webapp/frontend/mobile
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
# or
expo start
```

4. **Run on device/simulator**
```bash
# iOS
npm run ios
# or
expo start --ios

# Android
npm run android
# or
expo start --android

# Web (for testing)
npm run web
# or
expo start --web
```

## 📱 Key Features Implementation

### Carbon Tracking System
- **Real-time tracking**: Timer-based emission calculation
- **Manual input**: Form-based carbon footprint entry
- **Data persistence**: AsyncStorage for tracking history
- **Calculation logic**: Activity-based emission rates

### Navigation Flow
1. **Splash Screen** → **Onboarding** → **Main App**
2. **Tab Navigation**: Home, Insights, Leaderboard, Profile
3. **Stack Navigation**: Nested screens within each tab
4. **Modal Navigation**: Results and detail screens

### Data Management
- **AsyncStorage**: Local data persistence
- **State Management**: React hooks for component state
- **Data Structure**: JSON objects for carbon calculations
- **Real-time Updates**: useEffect for data loading and updates

## 🧪 Development Workflow

### File Organization
- **Feature-based structure**: Organized by app features
- **Component separation**: Reusable components in dedicated folders
- **Screen isolation**: Each screen in its own file
- **Navigation separation**: Stack navigators in dedicated files

### Code Patterns
- **Functional Components**: React hooks-based components
- **StyleSheet**: React Native StyleSheet for styling
- **Props drilling**: Component communication via props
- **Navigation params**: Data passing between screens

### Best Practices
- **Consistent naming**: PascalCase for components, camelCase for functions
- **File structure**: Feature-based organization
- **Code reusability**: Shared components and utilities
- **Performance**: Optimized rendering and state management

## 🚀 Build & Deployment

### Development Build
```bash
expo build:android
expo build:ios
```

### Production Build
```bash
expo build:android --type app-bundle
expo build:ios --type archive
```

### Environment Configuration
- **Development**: Local development with Expo
- **Staging**: Testing environment
- **Production**: App store deployment

## 🔍 Troubleshooting

### Common Issues
1. **Navigation errors**: Ensure all screens are properly registered
2. **AsyncStorage issues**: Check data format and error handling
3. **Icon display**: Verify @expo/vector-icons installation
4. **Build errors**: Clear cache with `expo r -c`

### Debug Commands
```bash
# Clear cache
expo r -c

# Reset Metro bundler
npx react-native start --reset-cache

# Check dependencies
npm list
```

## 📈 Performance Optimization

### Best Practices
- **Image optimization**: Proper image sizing and formats
- **State management**: Minimal re-renders
- **Navigation**: Lazy loading for screens
- **Memory management**: Proper cleanup in useEffect

### Monitoring
- **Bundle size**: Monitor app size
- **Performance**: React Native performance monitoring
- **Crash reporting**: Error tracking and reporting

## 🤝 Contributing

### Development Guidelines
1. Follow the established file structure
2. Use consistent naming conventions
3. Write clean, documented code
4. Test on both iOS and Android
5. Follow the design system

### Git Workflow
1. Create feature branches from `dev`
2. Make focused commits
3. Test thoroughly before PR
4. Follow the branching strategy in main README

## 📄 License

This project is part of the EcoTrack application suite. See the main project README for licensing information.

## 📞 Support

For technical support or questions about the mobile app:
- Check the troubleshooting section
- Review the project structure
- Consult the React Native and Expo documentation
- Contact the development team

---

**Note**: This mobile app is part of the larger EcoTrack ecosystem. Refer to the main project README for overall project information and backend integration details.