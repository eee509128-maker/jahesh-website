# Implementation Plan: Website Consolidation & React Rewrite

## Overview
Consolidate the existing static website (jahesh-website) and the existing React application (jaheshkala-app) into a single, unified React application. The new application will utilize React Router for navigation, maintaining all existing features while adopting a robust, scalable React architecture.

## User Review & Critical Decisions
> [!IMPORTANT]
> The rewrite will maintain the existing URL structure and branding. No major UI design changes will be made, but component architecture will be refactored for better maintainability.

## 1. Overview & Core Concept
- **What It Does**: A unified portal for Jahesh IT services, including a product catalog, user dashboard, and various information pages.
- **Key Value**: Improved performance, unified codebase, and easier maintenance.

## 2. User Experience & Visual Design
- **Key User Flows**: Consistent navigation between the home, product catalog, user profile, and various information pages.
- **Visual Identity & Theme**: Maintain existing branding, colors, and typography (Vazirmatn font).
- **Interactive Feedback**: Smooth transitions and loading states for all pages.

## 3. Key Product Decisions & Trade-Offs
- **Decision 1: React Router**: Use `react-router-dom` for client-side routing.
  - **Why**: Standard for React SPAs, enables seamless navigation.
- **Decision 2: Component-Based Architecture**: Port each static page to a React component.
  - **Why**: Increases reusability and maintainability.

## 4. Technical Architecture
```
┌──────────────────────────────────────┐
│           Vite React App             │
├──────────────────────────────────────┤
│ App.tsx (Root / Layout)              │
├──────────────────┬───────────────────┤
│ React Router     │                   │
├────────┬─────────┴─────────┬─────────┤
│ Pages  │ Components        │ Hooks   │
└────────┴───────────────────┴─────────┘
```
- **Routing**: `react-router-dom`
- **Styling**: Tailwind CSS
- **Data Persistence**: Firebase / Supabase (as currently implemented)
