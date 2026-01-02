# JS Mentor

## Introduction

**JS Mentor** is a beginner-friendly learning platform and web-based LMS (Learning Management System) designed to help aspiring developers master JavaScript fundamentals through interactive lessons, real-time code execution, and AI-powered assistance. Unlike traditional collaborative coding platforms, JS Mentor focuses on guided learning, personalized feedback, and hands-on practice tailored for newcomers.

The platform includes an integrated online compiler, curated challenges, and an AI helper that supports learners with contextual hints, explanations, and debugging tips. Whether you're just starting out or revisiting core concepts, JS Mentor provides a structured, supportive environment to build confidence and fluency in JavaScript development.

## Usage

To use JS Mentor locally, clone the repository and follow the setup instructions below. You can explore the learning modules, test your code in the built-in compiler, and interact with the AI helper for guidance.

- Clone the repository to your local machine.
- Follow installation steps to set up dependencies.
- Explore the `/modules` directory for learning content.
- Use the online compiler to run and test code.
- Engage with the AI helper for explanations and debugging.

## Features

JS Mentor offers a rich set of features to support beginner developers:

- Interactive JavaScript lessons and challenges.
- Built-in online compiler for instant code execution.
- AI-powered helper for contextual guidance and debugging.
- Progress tracking and personalized learning paths.
- Modular structure for scalable content delivery.
- Responsive UI optimized for desktop and mobile.

## Configuration

The repository supports customization for different learning workflows:

- Environment variables can be set via a `.env` file for local development.
- Lesson parameters and challenge configurations are stored in the `/config` directory.
- Linting and formatting rules are defined in root-level config files.
- GitHub Actions are available for automated testing and deployment.
- User preferences can be managed through local configuration files.

### Example `.env` file

```env
COMPILER_TIMEOUT=30
ENABLE_AI_HELPER=true
API_KEY=your_api_key_here