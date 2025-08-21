# Mastermind Client

A modern React TypeScript frontend for the Mastermind game challenge. This client provides an intuitive web interface for playing the classic Mastermind game where players attempt to guess a 4-digit code within 10 attempts.

## 🎯 Challenge Overview

This project implements the frontend for the Mastermind game as specified in the challenge:

- **Game Interface**: Interactive web-based game board with number input
- **Attempt Tracking**: Clear indication of remaining attempts
- **User Authentication**: Registration and login functionality
- **Guest Mode**: Play without creating an account
- **API Integration**: Communicates with AWS API Gateway which proxies to Railway-deployed backend

## 🏗️ Architecture

- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12
- **State Management**: React Context API + TanStack Query
- **Routing**: React Router 7.8.0
- **HTTP Client**: Axios
- **Animations**: Motion (Framer Motion)
- **Package Management**: npm
- **API Gateway**: AWS API Gateway (us-east-2)
- **Backend**: Mastermind API deployed on Railway

## 🚀 Features

### Game Interface

- **Interactive Game Board**: Number input for 4-digit guesses (0-7)
- **Visual Feedback**: Number-based feedback indicators
- **Real-time Updates**: Immediate feedback after each guess
- **Responsive Design**: Works on desktop and mobile devices

### User Experience

- **Guest Mode**: Play immediately without registration
- **User Authentication**: Secure login and registration
- **Attempt Counter**: Clear display of remaining attempts
- **Win/Loss Detection**: Automatic game state updates

### Technical Features

- **TypeScript**: Full type safety throughout the application
- **Modern React**: Uses latest React features and patterns
- **Optimized Performance**: Efficient re-renders and state management
- **Error Handling**: Graceful error handling and user feedback

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Modern web browser

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mastermind-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment configuration**

   ```bash
   # Create environment file
   cp .env.example .env
   # Edit .env with the API Gateway URL
   ```

   Add the following to your `.env` file:

   ```env
   VITE_API_BASE_URL=https://bdvadxydn6.execute-api.us-east-2.amazonaws.com
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:5173`

## 🏃‍♂️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# TypeScript
npm run type-check   # Check TypeScript types
```

## 🎮 How to Play

### Game Rules

1. **Objective**: Guess the 4-digit code within 10 attempts
2. **Code Generation**: Computer randomly selects 4 digits (0-7)
3. **Guessing**: Enter 4 digits (0-7) to make your guess
4. **Feedback**: After each guess, you'll receive feedback:
   - **Correct position**: Number of digits in correct position
   - **Correct number**: Number of correct digits in wrong position

### Interface Guide

- **Input Field**: Enter your 4-digit guess (digits 0-7)
- **Submit Button**: Submit your guess
- **Feedback Display**: View feedback for your guess
- **Attempt Counter**: See how many attempts remain

## 🏗️ Project Structure

```
src/
├── components/
│   ├── contexts/           # React Context providers
│   ├── features/           # Feature-based components
│   │   ├── Game/          # Game-related components
│   │   ├── Home/          # Home page components
│   │   └── Registrations/ # Auth components
│   ├── layouts/           # Layout components
│   ├── providers/         # Context providers
│   ├── svgs/             # SVG components
│   └── utility/          # Utility components
├── contract/             # TypeScript interfaces
├── endpoints/            # API endpoint definitions
├── hooks/               # Custom React hooks
├── types/               # Global type definitions
└── main.tsx            # Application entry point
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://bdvadxydn6.execute-api.us-east-2.amazonaws.com
```

**Note**: This URL points to the AWS API Gateway which acts as a proxy between the frontend and the Mastermind API backend deployed on Railway.

**For Local Development**: When running the frontend locally on `localhost:5173`, ensure that this origin is added to the allowed origins in your API Gateway CORS configuration to enable communication between your local frontend and the remote backend.

### API Configuration

The client communicates with the Mastermind API through AWS API Gateway. The API Gateway acts as a proxy, forwarding requests to the Mastermind API backend deployed on Railway. This architecture provides:

- **Scalability**: API Gateway handles traffic distribution
- **Security**: Centralized request handling and validation
- **Reliability**: Railway provides robust backend hosting
- **Performance**: Optimized routing through AWS infrastructure

## 🎨 Styling

The application uses Tailwind CSS for styling with a custom design system:

- **Color Palette**: Consistent color scheme for pegs and UI elements
- **Typography**: Modern, readable fonts
- **Spacing**: Consistent spacing system
- **Responsive**: Mobile-first responsive design
- **Animations**: Smooth transitions and micro-interactions

## 🧪 Development

### Code Quality

- **ESLint**: Code linting and formatting
- **TypeScript**: Static type checking
- **Prettier**: Code formatting (if configured)

### Best Practices

- **Component Structure**: Feature-based organization
- **State Management**: Context API for global state
- **API Integration**: TanStack Query for data fetching
- **Error Boundaries**: Graceful error handling

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Static site hosting
- **Docker**: Containerized deployment

### Environment Setup

Ensure your production environment has the correct API endpoint configured.

## 🔒 Security

- **HTTPS**: Secure communication with API
- **Input Validation**: Client-side validation
- **XSS Protection**: React's built-in XSS protection
- **CORS**: Proper CORS configuration with backend (including localhost:5173 for local development)

## 🎯 Performance

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Optimized Assets**: Compressed images and optimized bundles
- **Caching**: Efficient caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run linting and type checking
6. Submit a pull request

## 📄 License

This project is part of the LinkedIn Backend Apprentice challenge.

## 🎮 Game Features

### Core Gameplay

- **4-digit code guessing** with digits 0-7
- **10 attempts maximum** to solve the puzzle
- **Real-time feedback** after each guess
- **Number-based feedback system**

### User Interface

- **Simple number input** for entering guesses
- **Clear feedback display** for correct/incorrect guesses
- **Remaining attempts counter** prominently displayed
- **Responsive design** for all device sizes

### Additional Features

- **Guest mode** for immediate play
- **User accounts** for game tracking
