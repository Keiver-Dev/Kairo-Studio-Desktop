# Kairo Studios

<div align="center">
  <img src="./Frontend/public/Logo.svg" alt="Kairo Logo" width="120" height="120">
  
  ### SaaS Platform for Project Management and Productivity
  
  **Where code meets productivity**
  
  ![Version](https://img.shields.io/badge/version-0.0.1--dev-orange?logo=semantic-release&logoColor=white)
  ![Status](https://img.shields.io/badge/status-Pre--Alpha-red?logo=statuspage&logoColor=white)
  [![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.16-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

---

> [!WARNING] > **Pre-Alpha Development Status**
>
> Kairo is currently in **Pre-Alpha** stage (v1.0.0-dev). This means:
>
> - 🚧 Core features are under active development
> - 🐛 Bugs and breaking changes are expected
> - 🔒 Not recommended for production use
> - 📝 UI/UX is functional but backend integration is pending
>
> **Estimated Alpha Release**: 2-3 months (Q1 2026)

---

## 📋 Table of Contents

- [Description](#-description)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Available Scripts](#-available-scripts)
- [Configuration](#-configuration)
- [Application Routes](#-application-routes)
- [Main Components](#-main-components)
- [Services](#-services)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Description

**Kairo** is a modern SaaS platform inspired by ClickUp, designed to centralize project management, tasks, teams, and collaboration in one place. Built with the latest web technologies, it offers a smooth and modern user experience for developers and work teams.

### Why Kairo?

- **Centralization**: Manage repositories, tasks, teams, and deployments in a single platform
- **Productivity**: Tools designed to maximize team efficiency
- **Modern**: Clean and responsive interface with best UX/UI practices
- **Scalable**: Architecture ready to grow with your team

---

## ✨ Features

### 🔐 Authentication and Security

- ✅ Complete authentication UI (Login/Register/Forgot Password)
- ✅ Private route protection with `ProtectedRoute`
- ⚠️ Token storage (localStorage/sessionStorage) - **UI only, backend pending**
- ✅ "Remember Me" option for persistent sessions

### 🏠 Dashboard and Workspace

- ✅ **Home**: Main view with navigation structure for:
  - ⚠️ Notification inbox (UI only)
  - ⚠️ Replies and assigned comments (UI only)
  - ⚠️ Personal tasks (UI only)
  - ⚠️ Workspaces (Spaces) (UI only)
  - ⚠️ Communication channels (UI only)
  - ⚠️ Direct messages (UI only)

### 📅 Planning

- ⚠️ Project planning module (UI structure only)
- ❌ Task and timeline management (pending backend)

### 🎨 Modern UI/UX

- Dark mode design with professional color palette
- Reusable and consistent components
- Iconography with Lucide React
- Smooth animations and transitions
- Responsive design for all devices

### 🌐 Landing Page

- Professional presentation page
- Featured projects sections
- Product features
- Optimized call-to-action
- Complete footer with navigation

---

## 🛠 Tech Stack

### Frontend Core

- **React 19.1.1** - UI library with latest features
- **React Router DOM 7.9.4** - Navigation and routing
- **Vite 7.1.14** (Rolldown) - Ultra-fast build tool

### Styling

- **TailwindCSS 4.1.16** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite plugin for Tailwind

### Icons and Assets

- **Lucide React 0.548.0** - Modern and customizable icons

### HTTP Client

- **Axios 1.13.0** - HTTP client for API calls

### Development

- **ESLint 9.36.0** - Linter for JavaScript/React code
- **Vite Plugin React SWC** - Ultra-fast compilation with SWC
- **TypeScript Types** - Type definitions for Node and React

---

## 📁 Project Structure

```
Kairo/
├── public/                  # Static files
│   └── Logo.svg            # Application logo
├── src/
│   ├── assets/             # Resources (images, icons)
│   │   ├── icons/          # SVG icon components
│   │   └── img/            # Images
│   ├── components/         # Reusable components
│   ├── database/           # Mock data and configurations
│   │   └── LandingPageDB.jsx
│   ├── hooks/              # Custom React hooks
│   ├── layout/             # Application layouts
│   │   ├── LayoutAuth.jsx      # Layout for authentication pages
│   │   └── LayoutPrivated.jsx  # Layout for private pages
│   ├── pages/              # Application pages
│   │   ├── Auth/           # Authentication pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ForgotPassword.jsx
│   │   ├── Privated/       # Private pages
│   │   │   ├── Home.jsx
│   │   │   └── Planning.jsx
│   │   └── Public/         # Public pages
│   │       ├── Landing.jsx
│   │       └── About.jsx
│   ├── routes/             # Route configuration
│   │   └── ProtectedRoute.jsx
│   ├── services/           # Services and API
│   │   ├── api.js          # Axios configuration
│   │   └── authService.js  # Authentication service
│   ├── App.jsx             # Main component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # Main HTML
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── jsconfig.json           # JavaScript configuration
└── README.md               # This file
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/kairo.git
cd kairo
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables** (if applicable)

```bash
# Create .env file in project root
cp .env.example .env
```

4. **Start development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**

```
http://localhost:5173
```

---

## 🚀 Development Roadmap

### 🏗️ Phase 1: Core System (MVP) - **IN PROGRESS (Pre-Alpha)**

- [/] **Authentication & Users** - **UI Complete, Backend Pending**
  - [x] User registration and authentication UI
  - [x] Password recovery UI
  - [x] Basic user profiles UI
  - [ ] Backend API integration
  - [ ] Email verification
  - [ ] Two-factor authentication (2FA)

- [ ] **Basic Task Management** - **NOT STARTED**
  - [ ] Backend API for tasks
  - [ ] Create and edit tasks (with persistence)
  - [ ] Assign tasks to team members
  - [ ] Due dates and reminders
  - [ ] Priority levels (High, Medium, Low)
  - [ ] Custom labels and categories
  - [ ] Subtasks and checklists
  - [ ] Advanced search and filtering

- [ ] **Projects & Workspaces** - **UI Structure Only**
  - [ ] Backend API for workspaces
  - [ ] Workspace creation (with persistence)
  - [ ] Member management per workspace
  - [ ] Project templates
  - [ ] Customizable views (List, Board, Calendar)
  - [ ] Data export/import

### 🤝 Phase 2: Collaboration & Productivity

- [ ] **Real-time Collaboration**
  - [ ] Comments and mentions
  - [ ] Real-time notifications
  - [ ] Activity history
  - [ ] @mentions and following
  - [ ] Task and project sharing

- [ ] **Advanced Views**
  - [ ] Board view (Kanban)
  - [ ] Calendar view
  - [ ] Timeline/Gantt view
  - [ ] List view with grouping
  - [ ] Saved custom views

- [ ] **File Management**
  - [ ] File upload and storage
  - [ ] File preview
  - [ ] Version control
  - [ ] Google Drive/Dropbox integration
  - [ ] File search

### 🛠️ Phase 3: Developer Tools

- [ ] **Git Integration**
  - [ ] GitHub/GitLab/Bitbucket connectivity
  - [ ] Branch and PR visualization
  - [ ] Bidirectional task-commit linking
  - [ ] Automatic status updates

- [ ] **API & Extensions**
  - [ ] Documented REST API
  - [ ] Webhooks for events
  - [ ] Integration SDK
  - [ ] VS Code extension
  - [ ] CLI for automation

### 📊 Phase 4: Analytics & Reporting

- [ ] **Progress Tracking**
  - [ ] Project progress charts
  - [ ] Team productivity reports
  - [ ] Time tracking
  - [ ] Performance metrics
  - [ ] PDF/CSV export

- [ ] **Automation**
  - [ ] Automated rules
  - [ ] Workflow templates
  - [ ] Automatic task assignment
  - [ ] Scheduled reminders

### 🔒 Phase 5: Security & Scalability

- [ ] **Advanced Security**
  - [ ] Single Sign-On (SSO)
  - [ ] Granular roles and permissions
  - [ ] Audit logs
  - [ ] GDPR compliance
  - [ ] Automated backups

- [ ] **Scalability**
  - [ ] Performance optimization
  - [ ] Caching and lazy loading
  - [ ] Microservices architecture
  - [ ] Load balancing

### 📱 Phase 6: Mobile & Accessibility

- [ ] **Mobile Applications**
  - [ ] Native iOS app
  - [ ] Native Android app
  - [ ] Offline synchronization
  - [ ] Push notifications

- [ ] **Accessibility**
  - [ ] Screen reader compatibility
  - [ ] Keyboard navigation
  - [ ] High contrast mode
  - [ ] Multi-language support

### 🤖 Phase 7: Artificial Intelligence

- [ ] **AI Assistant**
  - [ ] Smart task suggestions
  - [ ] Deadline predictions
  - [ ] Bottleneck detection
  - [ ] Automated summaries
  - [ ] Semantic search

### 🚀 Future Releases

- [ ] **Application Platform**
  - [ ] Integration marketplace
  - [ ] GraphQL API
  - [ ] Custom webhooks
  - [ ] Customizable widgets

- [ ] **Enterprise Features**
  - [ ] Portfolio management
  - [ ] Resource management
  - [ ] Budgeting and billing
  - [ ] Client dashboards

## 📜 Available Scripts

```bash
# Development - Start development server on port 5173
npm run dev

# Build - Generate optimized production build
npm run build

# Preview - Preview production build
npm run preview

# Lint - Run ESLint to check code
npm run lint
```

---

## ⚙️ Configuration

### Vite Configuration

The project uses Vite with the following configurations:

```javascript
// vite.config.js
{
  server: {
    host: "0.0.0.0",  // Accessible from local network
    port: 5173         // Default port
  },
  resolve: {
    alias: {
      "@": "./src"     // Alias for imports
    }
  }
}
```

### Path Alias

Use `@` to import from `src/`:

```javascript
import Logo from "@/assets/icons/Logo";
import { authService } from "@/services/authService";
```

---

## 🗺 Application Routes

### Public Routes

| Route    | Component | Description         |
| -------- | --------- | ------------------- |
| `/`      | `Landing` | Public landing page |
| `/about` | `About`   | About us page       |

### Authentication Routes

| Route              | Component        | Layout       | Description       |
| ------------------ | ---------------- | ------------ | ----------------- |
| `/login`           | `Login`          | `LayoutAuth` | User login        |
| `/register`        | `Register`       | `LayoutAuth` | User registration |
| `/forgot-password` | `ForgotPassword` | `LayoutAuth` | Password recovery |

### Private Routes (Protected)

| Route       | Component  | Layout           | Protection       | Description      |
| ----------- | ---------- | ---------------- | ---------------- | ---------------- |
| `/home`     | `Home`     | `LayoutPrivated` | `ProtectedRoute` | Main dashboard   |
| `/planning` | `Planning` | `LayoutPrivated` | `ProtectedRoute` | Project planning |

---

## 🧩 Main Components

### Layouts

#### `LayoutAuth`

- Minimalist layout for authentication pages
- Dark background with centered design
- Used in: Login, Register, Forgot Password

#### `LayoutPrivated`

- Complete layout for authenticated application
- Includes:
  - Header with workspace selector and search
  - Main navigation sidebar
  - Main content area with `<Outlet />`
- Navigation:
  - Home, Planning, Users, Menu
  - Plan, Invite (bottom section)

### Pages

#### `Home`

Main workspace page with:

- **Secondary Sidebar**: Contextual navigation
  - Inbox, Replies, Assigned comments, My tasks
  - Spaces (workspaces)
  - Channels (communication channels)
  - Direct messages
- **Main Content Area**: Main work area

#### `Login`

Authentication page with:

- Email and password validation
- "Remember Me" checkbox
- Error handling
- Secure token storage
- Automatic post-login redirection

---

## 🔌 Services

### `authService`

Authentication service that handles:

```javascript
// Login
await authService.login(email, password, rememberMe);

// Logout
await authService.logout();

// Register
await authService.register(name, email, password, confirmPassword);
```

**Features:**

- Automatic token storage (UI only)
- Session management (localStorage/sessionStorage)
- Backend API integration - **PENDING**
- HTTP error handling - **PENDING**

> [!NOTE]
> The authentication service currently handles UI state only. Backend API integration is planned for Alpha release.

### `api`

Pre-configured Axios client for HTTP calls:

- Configured base URL - **PENDING**
- Request/response interceptors - **PENDING**
- Automatic authentication handling - **PENDING**

> [!NOTE]
> API service is configured but not yet connected to a backend. This will be implemented in Alpha phase.

---

## 🗓 Roadmap

### ✅ Completed (Pre-Alpha v0.0.1-dev)

- [x] Initial project setup
- [x] Authentication UI system (Login/Register/Forgot Password)
- [x] Professional landing page
- [x] Private layout with navigation
- [x] Home page with contextual sidebar
- [x] Route protection and nested routing structure

### 🚧 Currently In Development (Path to Alpha v0.1.0)

- [ ] **Backend API** (Node.js/Express or Supabase)
- [ ] **Database setup** (PostgreSQL/MongoDB)
- [ ] **Authentication backend integration**
- [ ] **Task management CRUD** (with persistence)
- [ ] **Workspace management** (with persistence)

### 📅 Upcoming Features (Alpha → Beta)

- [ ] Real-time collaboration (WebSockets)
- [ ] Notification system
- [ ] Complete Planning module
- [ ] Spaces and Channels system
- [ ] Direct messaging
- [ ] Task management
- [ ] Notification system

### 📅 Upcoming Features

- [ ] Complete backend integration
- [ ] Permissions and roles system
- [ ] Real-time collaboration
- [ ] File management
- [ ] Third-party integrations (GitHub, Slack, etc.)
- [ ] Analytics dashboard
- [ ] Light/dark mode
- [ ] Mobile application

---

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Style Guidelines

- Use ESLint to maintain consistency
- Follow React Hooks conventions
- Document complex components
- Write descriptive commits

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 👨‍💻 Author

**Keiver Luna** - [Kairo Studios](https://github.com/kairo-studios)

---

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- React and Vite community

---

<div align="center">
  <p>Made with ❤️ by Kairo Studios</p>
  <p>© 2025 Kairo. All rights reserved.</p>
</div>
# Kairo-FrontEnd
