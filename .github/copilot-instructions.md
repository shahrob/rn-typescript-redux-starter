<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# React Native Structured App - Copilot Instructions

This is a React Native TypeScript project with a well-organized folder structure. When generating code, please follow these guidelines:

## Project Structure

- `src/assets/` - Static assets (images, fonts, etc.)
- `src/config/` - App configuration (env, theme, constants)
- `src/models/` - TypeScript interfaces and types
- `src/services/` - API calls and business logic
- `src/hooks/` - Custom React hooks
- `src/components/` - Reusable UI components
- `src/navigation/` - React Navigation setup
- `src/screens/` - App screens organized by feature
- `src/state/` - Redux state management
- `src/utils/` - Utility functions
- `src/i18n/` - Internationalization

## Code Style Guidelines

1. Use TypeScript with strict typing
2. Follow the existing folder structure
3. Use functional components with hooks
4. Implement proper error handling
5. Use Redux Toolkit for state management
6. Follow the established naming conventions
7. Use the theme system for consistent styling
8. Implement internationalization using react-i18next

## Technology Stack

- React Native with TypeScript
- Redux Toolkit for state management
- React Navigation for navigation
- AsyncStorage for local storage
- react-i18next for internationalization
- React Native Safe Area Context
- Custom theme system

## Best Practices

- Create reusable components in `src/components/`
- Use custom hooks for business logic
- Implement proper TypeScript types in `src/models/`
- Follow the established API service pattern
- Use the theme system for consistent styling
- Implement proper error handling and loading states
