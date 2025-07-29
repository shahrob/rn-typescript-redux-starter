/**
 * Login Screen
 * Authentication screen for user login
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ScreenWrapper } from '../../components/layout/ScreenWrapper';
import { CustomButton } from '../../components/common/CustomButton';
import { useAuth } from '../../hooks/useAuth';
import { Theme } from '../../config/theme';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const result = await login({ email, password });

    if (result.success) {
      // Login successful - navigation will happen automatically
      // You could add a success message here if needed
      console.log('Login successful, navigating to dashboard...');
    } else {
      Alert.alert('Login Failed', result.error || 'Unknown error occurred');
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />

            <CustomButton
              title="Sign In"
              onPress={handleLogin}
              loading={isLoading}
              fullWidth
              style={styles.loginButton}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Theme.spacing.lg,
  },
  title: {
    fontSize: Theme.typography.fontSize['3xl'],
    fontWeight: Theme.typography.fontWeight.bold,
    color: Theme.colors.text,
    textAlign: 'center',
    marginBottom: Theme.spacing.sm,
  },
  subtitle: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: Theme.spacing['2xl'],
  },
  form: {
    gap: Theme.spacing.md,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: Theme.colors.gray300,
    borderRadius: Theme.borderRadius.md,
    paddingHorizontal: Theme.spacing.md,
    fontSize: Theme.typography.fontSize.md,
    backgroundColor: Theme.colors.white,
  },
  loginButton: {
    marginTop: Theme.spacing.md,
  },
});

export default LoginScreen;
