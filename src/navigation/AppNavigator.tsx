/**
 * App Navigator
 * Main navigation configuration using React Navigation
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../hooks/useAuth';
import { Routes } from './routes';
import { Theme } from '../config/theme';

// Import screens
import LoginScreen from '../screens/auth/LoginScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Tab Navigator for authenticated users
 */
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.primary,
        tabBarInactiveTintColor: Theme.colors.gray500,
        tabBarStyle: {
          backgroundColor: Theme.colors.white,
          borderTopColor: Theme.colors.gray200,
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={Routes.DASHBOARD_TAB}
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
        }}
      />
      <Tab.Screen
        name={Routes.PROFILE_TAB}
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

/**
 * Auth Stack for unauthenticated users
 */
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Theme.colors.white },
      }}
    >
      <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

/**
 * Main Stack for authenticated users
 */
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Theme.colors.white },
      }}
    >
      <Stack.Screen name={Routes.TAB_NAVIGATOR} component={TabNavigator} />
    </Stack.Navigator>
  );
};

/**
 * App Navigator - Root navigator that switches between auth and main stacks
 */
export const AppNavigator = () => {
  const { isAuthenticated, initializing } = useAuth();

  // Show loading screen while initializing auth state
  if (initializing) {
    return null; // You can replace this with a loading component
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name={Routes.MAIN_STACK} component={MainStack} />
        ) : (
          <Stack.Screen name={Routes.AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
