/**
 * Theme configuration
 * Colors, fonts, spacing, and other design tokens
 */

export const Colors = {
  // Primary Colors
  primary: '#007AFF',
  primaryDark: '#0056CC',
  primaryLight: '#4DA6FF',
  
  // Secondary Colors
  secondary: '#5856D6',
  secondaryDark: '#3C3B94',
  secondaryLight: '#8F8FE8',
  
  // Neutral Colors
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F5F5F7',
  gray200: '#E5E5EA',
  gray300: '#D1D1D6',
  gray400: '#C7C7CC',
  gray500: '#AEAEB2',
  gray600: '#8E8E93',
  gray700: '#636366',
  gray800: '#48484A',
  gray900: '#1C1C1E',
  
  // Status Colors
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  info: '#007AFF',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundSecondary: '#F2F2F7',
  surface: '#FFFFFF',
  
  // Text Colors
  text: '#1C1C1E',
  textSecondary: '#8E8E93',
  textTertiary: '#C7C7CC',
} as const;

export const Typography = {
  // Font Families
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  
  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  
  // Line Heights
  lineHeight: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    '2xl': 36,
    '3xl': 42,
    '4xl': 48,
  },
  
  // Font Weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const BorderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
} as const;

export const Shadows = {
  sm: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;

export const Theme = {
  colors: Colors,
  typography: Typography,
  spacing: Spacing,
  borderRadius: BorderRadius,
  shadows: Shadows,
} as const;

export type ThemeType = typeof Theme;
