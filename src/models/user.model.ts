/**
 * User model interfaces and types
 */

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends User {
  bio?: string;
  location?: string;
  website?: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  language: string;
  theme: 'light' | 'dark' | 'system';
  notifications: {
    push: boolean;
    email: boolean;
    sms: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private' | 'friends';
    showOnlineStatus: boolean;
  };
}

export interface AuthUser {
  user: User;
  token: string;
  refreshToken: string;
  expiresAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UpdateProfileData {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  bio?: string;
  location?: string;
  website?: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Error types
export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

export type UserRole = 'user' | 'admin' | 'moderator';
export type UserStatus = 'active' | 'inactive' | 'suspended';
