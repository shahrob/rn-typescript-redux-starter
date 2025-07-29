/**
 * Custom Button Component
 * Reusable button component with consistent styling
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import { Theme } from '../../config/theme';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  fullWidth?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  disabled,
  style,
  ...props
}) => {
  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={
            variant === 'outline' ? Theme.colors.primary : Theme.colors.white
          }
        />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  // Variants
  primary: {
    backgroundColor: Theme.colors.primary,
  },
  secondary: {
    backgroundColor: Theme.colors.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Theme.colors.primary,
  },

  // Sizes
  small: {
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.sm,
    minHeight: 36,
  },
  medium: {
    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.md,
    minHeight: 48,
  },
  large: {
    paddingHorizontal: Theme.spacing.xl,
    paddingVertical: Theme.spacing.lg,
    minHeight: 56,
  },

  // Text styles
  text: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontWeight: Theme.typography.fontWeight.medium,
  },
  primaryText: {
    color: Theme.colors.white,
    fontSize: Theme.typography.fontSize.md,
  },
  secondaryText: {
    color: Theme.colors.white,
    fontSize: Theme.typography.fontSize.md,
  },
  outlineText: {
    color: Theme.colors.primary,
    fontSize: Theme.typography.fontSize.md,
  },

  // Size-specific text
  smallText: {
    fontSize: Theme.typography.fontSize.sm,
  },
  mediumText: {
    fontSize: Theme.typography.fontSize.md,
  },
  largeText: {
    fontSize: Theme.typography.fontSize.lg,
  },

  // States
  disabled: {
    opacity: 0.6,
  },
  disabledText: {
    opacity: 0.8,
  },
  fullWidth: {
    width: '100%',
  },
});
