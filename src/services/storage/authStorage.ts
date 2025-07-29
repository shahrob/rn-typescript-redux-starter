/**
 * Authentication storage service
 * Handles secure storage of authentication tokens and user data
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../config/constants';
import { AuthUser, User } from '../../models/user.model';

class AuthStorage {
  /**
   * Store authentication data
   */
  async storeAuthData(authData: AuthUser): Promise<void> {
    try {
      await AsyncStorage.multiSet([
        [STORAGE_KEYS.AUTH_TOKEN, authData.token],
        [STORAGE_KEYS.USER_DATA, JSON.stringify(authData.user)],
      ]);
    } catch (error) {
      console.error('Error storing auth data:', error);
      throw new Error('Failed to store authentication data');
    }
  }

  /**
   * Get stored authentication token
   */
  async getAuthToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    } catch (error) {
      console.error('Error retrieving auth token:', error);
      return null;
    }
  }

  /**
   * Get stored user data
   */
  async getUserData(): Promise<User | null> {
    try {
      const userData = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error retrieving user data:', error);
      return null;
    }
  }

  /**
   * Update stored user data
   */
  async updateUserData(user: User): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));
    } catch (error) {
      console.error('Error updating user data:', error);
      throw new Error('Failed to update user data');
    }
  }

  /**
   * Clear all authentication data
   */
  async clearAuthData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.AUTH_TOKEN,
        STORAGE_KEYS.USER_DATA,
      ]);
    } catch (error) {
      console.error('Error clearing auth data:', error);
      throw new Error('Failed to clear authentication data');
    }
  }

  /**
   * Check if user is authenticated
   */
  async isAuthenticated(): Promise<boolean> {
    try {
      const token = await this.getAuthToken();
      return token !== null;
    } catch (error) {
      console.error('Error checking authentication status:', error);
      return false;
    }
  }

  /**
   * Store user language preference
   */
  async storeLanguage(language: string): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    } catch (error) {
      console.error('Error storing language:', error);
      throw new Error('Failed to store language preference');
    }
  }

  /**
   * Get user language preference
   */
  async getLanguage(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.LANGUAGE);
    } catch (error) {
      console.error('Error retrieving language:', error);
      return null;
    }
  }

  /**
   * Store theme preference
   */
  async storeTheme(theme: string): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (error) {
      console.error('Error storing theme:', error);
      throw new Error('Failed to store theme preference');
    }
  }

  /**
   * Get theme preference
   */
  async getTheme(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.THEME);
    } catch (error) {
      console.error('Error retrieving theme:', error);
      return null;
    }
  }

  /**
   * Store onboarding completion status
   */
  async setOnboardingCompleted(completed: boolean): Promise<void> {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.ONBOARDING_COMPLETED,
        JSON.stringify(completed)
      );
    } catch (error) {
      console.error('Error storing onboarding status:', error);
      throw new Error('Failed to store onboarding status');
    }
  }

  /**
   * Check if onboarding is completed
   */
  async isOnboardingCompleted(): Promise<boolean> {
    try {
      const completed = await AsyncStorage.getItem(STORAGE_KEYS.ONBOARDING_COMPLETED);
      return completed ? JSON.parse(completed) : false;
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      return false;
    }
  }

  /**
   * Clear all stored data
   */
  async clearAllData(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing all data:', error);
      throw new Error('Failed to clear all data');
    }
  }
}

export const authStorage = new AuthStorage();
