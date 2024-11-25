# Age Calculator App

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Screenshot](#screenshot)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Highlights](#project-highlights)
- [What I Learned](#what-i-learned)
- [Challenges Faced](#challenges-faced)

## Overview
The Age Calculator App is a sleek, user-friendly tool that computes a user’s exact age in years, months, days. Built with modern web technologies, the app ensures responsiveness and a seamless user experience.

## Features
- Calculate precise age based on birthdate.
- Mobile-first, responsive design.
- Clean and accessible UI.

## Screenshot
![](./screenshot/screenshat%20(1).png)
![](./screenshot/screenshat%20(2).png)
![](./screenshot/screenshat%20(3).png)
![](./screenshot/screenshat%20(4).png)
![](./screenshot/screenshat%20(5).png)
![](./screenshot/screenshat%20(6).png)

## Live Demo
Live Site: [Live Site](https://age-calculator-birthday.netlify.app)

## Tech Stack
- Frontend: Semantic HTML5, SASS, CSS custom properties
- Layout: Flexbox, mobile-first workflow
- Framework: [React](https://vite.dev/) - React Framework

## Getting Started
### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or higher recommended)
- npm (comes with Node.js) or Yarn

### Installation
Clone this repository:
```bash
git clone https://github.com/yourusername/age-calculator-app.git
cd age-calculator-app
```
#### Install dependencies
```bash
npm install
```
or
```bash
npm i
```
### Running the App
To start the development server, run:
```bash
npm run dev
```
This will launch the app in development mode and make it accessible at `http://localhost:3000`.
To build the app for production, run:
```bash
npm run build
```
The output will be generated in the dist directory. 
To preview the production build locally, run:
```bash
npm run preview
```
To lint the codebase and ensure quality, run:
```bash
npm run lint
```
## Project Highlights
### What I Learned
This project taught me the importance of dynamically updating UI elements.
A core feature involved using `useEffect` to track the current time, updating it every second. 
Here’s an example of the implementation:
```javascript
useEffect(() => {
  const timer = setInterval(() => {
    setToday(new Date());
  }, 1000); // Update every second
  return () => {
    clearInterval(timer); // Cleanup to prevent memory leaks
  };
}, []);
```
### Challenges Faced
Implementing real-time updates while ensuring app performance.
Designing a user-friendly and intuitive interface.









