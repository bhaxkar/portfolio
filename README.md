# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS showcasing my projects, skills, and experiences.

## Technical Description 📃

This portfolio website is built using:
- React.js for component-based UI development
- React Router for client-side routing
- Tailwind CSS for styling
- Parcel as the build tool
- Custom animations and transitions
- Responsive design for all devices

Key features include:
- Home page with social links and current activities
- About section with skills carousel
- Projects showcase
- Blog section
- Downloadable resume
- Contact information

## Table of Contents 🔗

- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/bhaxkar/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:1234`

## Scripts

Available scripts in the project:

```json
"scripts": {
  "start": "parcel index.html",    // Starts development server
  "build": "parcel build index.html",    // Creates production build
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

## Project Structure

```
src/
  ├── app.js             # Application entry point
  ├── components/        # React components
  │   ├── About.js       # About section
  │   ├── Blog.js        # Blog section
  │   ├── Body.js        # Main content
  │   ├── Error.js       # 404 page
  │   ├── Footer.js      # Footer component
  │   ├── Header.js      # Navigation header
  │   ├── Main.js        # Main page layout
  │   ├── Projects.js    # Projects showcase
  │   └── Tool.js        # Skills carousel
  └── index.css          # Global styles

public/
  ├── resume.pdf         # Downloadable resume
  └── icons/             # SVG icons
```

## Contact ✉️
Bhaskar Jha (👾 [@bhaxkar](mailto:bhaskarjha.info@gmail.com)  )