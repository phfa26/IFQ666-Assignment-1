# IFQ666 Assignment 1: Web and Mobile App Development Portfolio

## Purpose of the Application

This application is a portfolio website created for the IFQ666 Web and Mobile App Development course, as part of Assignment 1: Web Programming. The purpose of this project is to showcase my skills in web development and mobile app design through a modern, responsive portfolio. The portfolio highlights various projects, personal interests, and professional experiences that demonstrate my development expertise and journey through this course.

## Features

- **Home Page**: Introduction to the portfolio and developer.
- **About Page**: Overview of personal and professional background, including hobbies and interests.
- **Resume Page**: List of professional experiences, skills, education, and certifications.
- **Portfolio Page**: Displays GitHub repositories with descriptions, links, and categorization.
- **Light/Dark Theme**: Toggle between light and dark themes for enhanced user experience.

## Dependencies and Installation Instructions

### Dependencies

- **React**: Frontend JavaScript library for building the user interface.
- **React Router**: Library for routing and navigation between pages.
- **Material-UI**: Component library for UI elements and theming.
- **Styled Components**: CSS-in-JS library for styling components.
- **React Scripts**: Configuration and scripts for creating React applications.

#### Complete Dependency List

Refer to the `package.json` for all dependencies used.

### Installation Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/phfa26/ifq666-assignment-1.git
   cd ifq666-assignment-1
   ```

2. **Install Dependencies**:
   Ensure you have Node.js and npm installed, then install the dependencies:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Application Architecture

The application is structured in a modular way to separate concerns and enhance maintainability:

- **`src/components`**: Reusable components, such as `Page`, `ListSection`, and `IntroSection`, which are shared across different pages.
- **`src/pages`**: Each main section of the site (Home, About, Resume, Portfolio) is organized within individual components here.
- **`src/styles`**: Contains theme definitions and shared styles.
- **`src/assets`**: Static files and images used across the application.

Each component is designed to be reusable, with custom styling applied through styled-components and Material-UI’s theming capabilities.

## How to Contribute

Contributions to this project are welcome. To contribute:

1. **Fork the repository** and clone it to your local machine.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes** with well-documented comments.
4. **Push your changes** to your fork and submit a Pull Request with a description of your changes.

## Reporting Issues

If you encounter any bugs or have suggestions, please open an issue on the GitHub repository. Provide details about the problem and steps to reproduce it, if applicable. 

## How to Start the Application

To start the application in development mode:

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Run the app**:
   ```bash
   npm start
   ```

The app will be accessible at `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
