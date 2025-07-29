/**
 * Authentication hook
 * Custom hook for managing authentication state and operations
 */

import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../src/state/store';
import { userService } from '../../src/services/api/userService';
import { authStorage } from '../../src/services/storage/authStorage';
import { 
  loginSuccess, 
  loginFailure, 
  logout as logoutAction,
  setLoading,
  clearError 
} from '../../src/state/slices/userSlice';
import {
  LoginCredentials,
  RegisterData,
  UpdateProfileData,
} from 'src/models/user.model';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isLoading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.user
  );

  const [initializing, setInitializing] = useState(true);

  /**
   * Initialize authentication state
   */
  const initializeAuth = useCallback(async () => {
    try {
      const [storedToken, storedUser] = await Promise.all([
        authStorage.getAuthToken(),
        authStorage.getUserData(),
      ]);

      if (storedUser && storedToken) {
        dispatch(loginSuccess({ 
          user: storedUser, 
          token: storedToken,
          refreshToken: '',
          expiresAt: new Date().toISOString()
        }));
      }
    } catch (err) {
      console.error('Error initializing auth:', err);
    } finally {
      setInitializing(false);
    }
  }, [dispatch]);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  /**
   * Login user
   */
  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearError());

      const response = await userService.login(credentials);
      
      if (response.success) {
        await authStorage.storeAuthData(response.data);
        dispatch(loginSuccess(response.data));
        return { success: true };
      } else {
        const errorMessage = response.message || 'Login failed';
        dispatch(loginFailure(errorMessage));
        return { success: false, error: errorMessage };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      dispatch(loginFailure(errorMessage));
      return { success: false, error: errorMessage };
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  /**
   * Register user
   */
  const register = useCallback(async (userData: RegisterData) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearError());

      const response = await userService.register(userData);
      
      if (response.success) {
        await authStorage.storeAuthData(response.data);
        dispatch(loginSuccess(response.data));
        return { success: true };
      } else {
        const errorMessage = response.message || 'Registration failed';
        dispatch(loginFailure(errorMessage));
        return { success: false, error: errorMessage };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed';
      dispatch(loginFailure(errorMessage));
      return { success: false, error: errorMessage };
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  /**
   * Update user profile
   */
  const updateProfile = useCallback(async (updateData: UpdateProfileData) => {
    if (!token) {
      return { success: false, error: 'No authentication token' };
    }

    try {
      dispatch(setLoading(true));
      dispatch(clearError());

      const response = await userService.updateProfile(token, updateData);
      
      if (response.success) {
        await authStorage.updateUserData(response.data);
        dispatch(loginSuccess({ 
          user: response.data, 
          token,
          refreshToken: '',
          expiresAt: new Date().toISOString()
        }));
        return { success: true };
      } else {
        const errorMessage = response.message || 'Profile update failed';
        dispatch(loginFailure(errorMessage));
        return { success: false, error: errorMessage };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Profile update failed';
      dispatch(loginFailure(errorMessage));
      return { success: false, error: errorMessage };
    } finally {
      dispatch(setLoading(false));
    }
  }, [token, dispatch]);

  /**
   * Logout user
   */
  const logout = useCallback(async () => {
    try {
      if (token) {
        await userService.logout(token);
      }
    } catch (err) {
      console.error('Error during logout:', err);
    } finally {
      await authStorage.clearAuthData();
      dispatch(logoutAction());
    }
  }, [token, dispatch]);

  /**
   * Refresh authentication token
   */
  const refreshToken = useCallback(async () => {
    // This would typically use a refresh token stored securely
    // For now, we'll just check if the current token is still valid
    try {
      if (!token) return false;
      
      // In a real app, you would validate the token with the server
      // and refresh if necessary
      return true;
    } catch (err) {
      console.error('Error refreshing token:', err);
      await logout();
      return false;
    }
  }, [token, logout]);

  /**
   * Clear authentication error
   */
  const clearAuthError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    // State
    user,
    token,
    isLoading,
    error,
    isAuthenticated,
    initializing,
    
    // Actions
    login,
    register,
    logout,
    updateProfile,
    refreshToken,
    clearAuthError,
  };
};
