/**
 * Screen Wrapper Component
 * Provides consistent layout and safe area handling for all screens
 */

import React from 'react';
import { View, StyleSheet, StatusBar, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../config/theme';

interface ScreenWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  safeArea?: boolean;
  statusBarStyle?: 'light-content' | 'dark-content';
  style?: ViewStyle;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  backgroundColor = Theme.colors.background,
  safeArea = true,
  statusBarStyle = 'dark-content',
  style,
}) => {
  const containerStyles = [styles.container, { backgroundColor }, style];

  const content = (
    <>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={backgroundColor}
        translucent={false}
      />
      <View style={containerStyles}>{children}</View>
    </>
  );

  if (safeArea) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
        {content}
      </SafeAreaView>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
