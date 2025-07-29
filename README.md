# React Native Structured App

A well-structured React Native TypeScript application with modern architecture patterns, state management, navigation, and internationalization.

## 🏗️ Project Structure

```
src/
│
├── assets/                  # Fonts, images, icons, videos, etc.
│
├── config/                  # App-level configs (env, theming, constants)
│   ├── env.ts               # Environment-based variables
│   ├── theme.ts             # Colors, fonts, spacing
│   └── constants.ts         # Common static constants
│
├── models/                  # Type-safe models (TypeScript interfaces/types)
│   └── user.model.ts
│
├── services/                # API calls, business logic
│   ├── api/
│   │   └── userService.ts
│   └── storage/             # Local storage (e.g., AsyncStorage)
│       └── authStorage.ts
│
├── hooks/                   # Custom hooks
│   └── useAuth.ts
│
├── components/              # Reusable UI components
│   ├── common/              # Buttons, Inputs, etc.
│   │   └── CustomButton.tsx
│   └── layout/              # Shared layout components
│       └── ScreenWrapper.tsx
│
├── navigation/              # React Navigation setup
│   ├── AppNavigator.tsx
│   └── routes.ts
│
├── screens/                 # All app screens
│   ├── auth/
│   │   └── LoginScreen.tsx
│   ├── dashboard/
│   │   └── DashboardScreen.tsx
│   └── profile/
│       └── ProfileScreen.tsx
│
├── state/                   # Global state management (Redux Toolkit)
│   ├── store.ts
│   └── slices/
│       └── userSlice.ts
│
├── utils/                   # Utilities (formatters, validators, helpers)
│   └── dateFormatter.ts
│
├── i18n/                    # Internationalization (react-i18next)
│   ├── index.ts
│   └── locales/
│       ├── en.json
│       └── fr.json
│
└── App.tsx                  # App entry point
```

## 🚀 Features

- **TypeScript**: Full TypeScript support with strict typing
- **State Management**: Redux Toolkit for predictable state management
- **Navigation**: React Navigation v6 with type-safe navigation
- **Authentication**: Complete auth flow with secure token storage
- **Internationalization**: Multi-language support with react-i18next
- **Theme System**: Centralized theme configuration
- **Responsive Design**: Safe area handling and responsive components
- **Clean Architecture**: Well-organized folder structure following best practices

## 📦 Dependencies

### Core Dependencies

- React Native with TypeScript
- Redux Toolkit & React Redux
- React Navigation (Stack & Bottom Tabs)
- React Native Safe Area Context
- React Native Gesture Handler
- React Native Screens

### Storage & Utilities

- AsyncStorage for local data persistence
- react-i18next for internationalization
- react-native-localize for device locale detection

## 🔧 Setup Instructions

### Prerequisites

- Node.js (>= 18.0.0)
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-native-structure
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **iOS Setup**

   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the application**

   For iOS:

   ```bash
   npx react-native run-ios
   ```

   For Android:

   ```bash
   npx react-native run-android
   ```

## 🏃‍♂️ Running the App

### Development Mode

Start Metro bundler:

```bash
npx react-native start
```

Run on iOS simulator:

```bash
npx react-native run-ios
```

Run on Android emulator:

```bash
npx react-native run-android
```

### Production Build

For iOS:

```bash
npx react-native run-ios --configuration Release
```

For Android:

```bash
npx react-native run-android --variant=release
```

## 🎨 Theme System

The app uses a centralized theme system located in `src/config/theme.ts`. It includes:

- **Colors**: Primary, secondary, neutral, and status colors
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale
- **Border Radius**: Predefined border radius values
- **Shadows**: Platform-specific shadow configurations

## 🌐 Internationalization

The app supports multiple languages using react-i18next:

- English (en)
- French (fr)

Language files are located in `src/i18n/locales/`. The app automatically detects the device language and falls back to English if the language is not supported.

## 🔐 Authentication Flow

The app includes a complete authentication system:

1. **Login/Register**: Secure authentication with token storage
2. **Token Management**: Automatic token refresh and secure storage
3. **Route Protection**: Conditional rendering based on auth state
4. **User Management**: Profile management and user data persistence

## 📱 State Management

Using Redux Toolkit for state management:

- **User Slice**: Manages authentication and user data
- **Async Actions**: Handled with Redux Toolkit's createAsyncThunk
- **Type Safety**: Full TypeScript integration with typed hooks

## 🧪 Testing

Run tests:

```bash
npm test
```

## 📂 Project Guidelines

### File Naming

- Use PascalCase for components: `CustomButton.tsx`
- Use camelCase for utilities: `dateFormatter.ts`
- Use kebab-case for assets: `app-icon.png`

### Component Structure

- Functional components with hooks
- Props interface definition
- StyleSheet at the bottom
- Export default at the end

### State Management

- Use Redux Toolkit for global state
- Use local state for component-specific data
- Create custom hooks for reusable logic

## 🤝 Contributing

1. Follow the established folder structure
2. Use TypeScript with strict typing
3. Implement proper error handling
4. Add internationalization for user-facing text
5. Follow the existing code style and conventions

## 📄 License

This project is licensed under the MIT License.

## 🔗 Useful Links

- [React Native Documentation](https://reactnative.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Navigation Documentation](https://reactnavigation.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

Built with ❤️ using React Native and modern development practices.
