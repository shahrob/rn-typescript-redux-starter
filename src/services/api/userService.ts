/**
 * User API service
 * Handles all user-related API calls
 */

import { ENV } from '../../config/env';
import { API_ENDPOINTS } from '../../config/constants';
import {
  User,
  UserProfile,
  LoginCredentials,
  RegisterData,
  UpdateProfileData,
  AuthUser,
  ApiResponse,
} from '../../models/user.model';

class UserService {
  private baseURL = ENV.API_BASE_URL;

  /**
   * Login user
   */
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthUser>> {
    try {
      const response = await fetch(`${this.baseURL}${API_ENDPOINTS.LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Register new user
   */
  async register(userData: RegisterData): Promise<ApiResponse<AuthUser>> {
    try {
      const response = await fetch(`${this.baseURL}${API_ENDPOINTS.REGISTER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Get user profile
   */
  async getUserProfile(token: string): Promise<ApiResponse<UserProfile>> {
    try {
      const response = await fetch(`${this.baseURL}${API_ENDPOINTS.USER_PROFILE}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch profile');
      }

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Update user profile
   */
  async updateProfile(
    token: string,
    updateData: UpdateProfileData
  ): Promise<ApiResponse<User>> {
    try {
      const response = await fetch(`${this.baseURL}${API_ENDPOINTS.UPDATE_PROFILE}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Logout user
   */
  async logout(token: string): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(`${this.baseURL}${API_ENDPOINTS.LOGOUT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Logout failed');
      }

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Refresh authentication token
   */
  async refreshToken(refreshToken: string): Promise<ApiResponse<{ token: string }>> {
    try {
      const response = await fetch(`${this.baseURL}${API_ENDPOINTS.REFRESH_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Token refresh failed');
      }

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Handle API errors
   */
  private handleError(error: any): Error {
    if (error.message) {
      return error;
    }
    
    if (error.code === 'NETWORK_ERROR') {
      return new Error('Network error. Please check your connection.');
    }
    
    return new Error('An unexpected error occurred');
  }
}

export const userService = new UserService();
