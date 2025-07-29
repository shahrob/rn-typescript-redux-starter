/**
 * Application constants
 * Common static constants used throughout the app
 */

export const APP_CONSTANTS = {
  // App Information
  APP_NAME: 'ReactNativeStructureApp',
  APP_VERSION: '1.0.0',
  
  // Navigation
  NAVIGATION_ANIMATION_DURATION: 300,
  
  // API
  DEFAULT_PAGE_SIZE: 20,
  MAX_RETRY_ATTEMPTS: 3,
  
  // UI
  HEADER_HEIGHT: 60,
  TAB_BAR_HEIGHT: 80,
  BUTTON_HEIGHT: 48,
  INPUT_HEIGHT: 48,
  
  // Animations
  ANIMATION_DURATION: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  
  // Image
  DEFAULT_AVATAR_SIZE: 40,
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  
  // Text
  MAX_TEXTAREA_LENGTH: 500,
  MAX_INPUT_LENGTH: 100,
} as const;

export const ROUTES = {
  // Auth Stack
  LOGIN: 'Login',
  REGISTER: 'Register',
  FORGOT_PASSWORD: 'ForgotPassword',
  
  // Main Stack
  DASHBOARD: 'Dashboard',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
  
  // Tab Navigation
  HOME_TAB: 'HomeTab',
  PROFILE_TAB: 'ProfileTab',
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: '@auth_token',
  USER_DATA: '@user_data',
  LANGUAGE: '@language',
  THEME: '@theme',
  ONBOARDING_COMPLETED: '@onboarding_completed',
} as const;

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
  
  // User
  USER_PROFILE: '/user/profile',
  UPDATE_PROFILE: '/user/profile',
  
  // Other endpoints can be added here
} as const;

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Session expired. Please login again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  UNKNOWN_ERROR: 'Something went wrong. Please try again.',
} as const;

export const LANGUAGES = {
  EN: 'en',
  FR: 'fr',
} as const;
