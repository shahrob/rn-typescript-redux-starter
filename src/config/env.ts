/**
 * Environment configuration
 * Centralized place for environment-based variables
 */

export const ENV = {
  // API Configuration
  API_BASE_URL: __DEV__ 
    ? 'http://localhost:3000/api' 
    : 'https://api.yourapp.com',
  
  // App Configuration
  APP_NAME: 'ReactNativeStructureApp',
  APP_VERSION: '1.0.0',
  
  // Feature Flags
  ENABLE_LOGGING: __DEV__,
  ENABLE_DEBUG_TOOLS: __DEV__,
  
  // Timeouts
  API_TIMEOUT: 30000, // 30 seconds
  
  // Storage Keys
  STORAGE_KEYS: {
    AUTH_TOKEN: '@auth_token',
    USER_PREFERENCES: '@user_preferences',
    LANGUAGE: '@language',
  },
} as const;

export type EnvConfig = typeof ENV;
