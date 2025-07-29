/**
 * Dashboard Screen
 * Main dashboard screen for authenticated users
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ScreenWrapper } from '../../components/layout/ScreenWrapper';
import { CustomButton } from '../../components/common/CustomButton';
import { useAuth } from '../../hooks/useAuth';
import { Theme } from '../../config/theme';

const DashboardScreen = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.welcomeText}>
            Welcome back, {user?.firstName || 'User'}!
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Your Profile</Text>
            <Text style={styles.cardText}>
              Name: {user?.firstName} {user?.lastName}
            </Text>
            <Text style={styles.cardText}>Email: {user?.email}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Quick Actions</Text>
            <Text style={styles.cardText}>
              Welcome to your React Native app with a well-structured
              architecture!
            </Text>
          </View>

          <CustomButton
            title="Logout"
            variant="outline"
            onPress={handleLogout}
            style={styles.logoutButton}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: Theme.spacing.lg,
    backgroundColor: Theme.colors.primary,
  },
  title: {
    fontSize: Theme.typography.fontSize['2xl'],
    fontWeight: Theme.typography.fontWeight.bold,
    color: Theme.colors.white,
    marginBottom: Theme.spacing.sm,
  },
  welcomeText: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.white,
    opacity: 0.9,
  },
  content: {
    padding: Theme.spacing.lg,
    gap: Theme.spacing.lg,
  },
  card: {
    backgroundColor: Theme.colors.white,
    padding: Theme.spacing.lg,
    borderRadius: Theme.borderRadius.lg,
    ...Theme.shadows.md,
  },
  cardTitle: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text,
    marginBottom: Theme.spacing.md,
  },
  cardText: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.textSecondary,
    marginBottom: Theme.spacing.sm,
  },
  logoutButton: {
    marginTop: Theme.spacing.xl,
  },
});

export default DashboardScreen;
