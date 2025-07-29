/**
 * Navigation routes constants
 * Centralized route names for type safety
 */

export const Routes = {
  // Auth Stack
  AUTH_STACK: 'AuthStack',
  LOGIN: 'Login',
  REGISTER: 'Register',
  FORGOT_PASSWORD: 'ForgotPassword',
  
  // Main Stack
  MAIN_STACK: 'MainStack',
  TAB_NAVIGATOR: 'TabNavigator',
  
  // Tab Routes
  DASHBOARD_TAB: 'DashboardTab',
  PROFILE_TAB: 'ProfileTab',
  
  // Screen Routes
  DASHBOARD: 'Dashboard',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
  EDIT_PROFILE: 'EditProfile',
} as const;

export type RouteNames = typeof Routes[keyof typeof Routes];
