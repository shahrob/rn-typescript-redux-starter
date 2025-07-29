/**
 * Profile Screen
 * User profile management screen
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ScreenWrapper } from '../../components/layout/ScreenWrapper';
import { CustomButton } from '../../components/common/CustomButton';
import { useAuth } from '../../hooks/useAuth';
import { Theme } from '../../config/theme';

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  const handleEditProfile = () => {
    // Navigate to edit profile screen
    console.log('Edit profile');
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </Text>
          </View>
          <Text style={styles.name}>
            {user?.firstName} {user?.lastName}
          </Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <View style={styles.infoRow}>
              <Text style={styles.label}>First Name</Text>
              <Text style={styles.value}>
                {user?.firstName || 'Not provided'}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Last Name</Text>
              <Text style={styles.value}>
                {user?.lastName || 'Not provided'}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{user?.email || 'Not provided'}</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <CustomButton
              title="Edit Profile"
              onPress={handleEditProfile}
              fullWidth
              style={styles.button}
            />
            <CustomButton
              title="Logout"
              variant="outline"
              onPress={handleLogout}
              fullWidth
              style={styles.button}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.backgroundSecondary,
  },
  header: {
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    padding: Theme.spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.gray200,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Theme.spacing.md,
  },
  avatarText: {
    fontSize: Theme.typography.fontSize.xl,
    fontWeight: Theme.typography.fontWeight.bold,
    color: Theme.colors.white,
  },
  name: {
    fontSize: Theme.typography.fontSize.xl,
    fontWeight: Theme.typography.fontWeight.bold,
    color: Theme.colors.text,
    marginBottom: Theme.spacing.sm,
  },
  email: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.textSecondary,
  },
  content: {
    padding: Theme.spacing.lg,
  },
  section: {
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.lg,
    marginBottom: Theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text,
    marginBottom: Theme.spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.gray100,
  },
  label: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.textSecondary,
    fontWeight: Theme.typography.fontWeight.medium,
  },
  value: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text,
  },
  actions: {
    gap: Theme.spacing.md,
  },
  button: {
    marginBottom: Theme.spacing.sm,
  },
});

export default ProfileScreen;
