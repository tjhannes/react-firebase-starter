# Tutorial App with Firebase

Firebase is a platform developed by Google for creating mobile and web applications. It provides tools and infrastructure to build, improve, and grow your app, including a real-time database, authentication, hosting, and more.

## How to use Firestore in a web app

Interesting files are:

- `firebase.ts` - Contains Firebase initialization and configuration
- `api.ts` - Contains functions to interact with Firestore database

## Setup

1. Create a new Firebase project
2. Create a new Firestore database
3. Replace the Firebase config in `firebase.ts` with your own

## Features

- Authentication (Email/Password, Google, etc.)
- Real-time data sync
- Secure database rules
- Hosting capabilities

## Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Configure Firebase as described in the Setup section
4. Run `npm start` to start the development server

## Deployment

1. Run `npm run build` to create a production build
2. Deploy to Firebase hosting with `firebase deploy`
