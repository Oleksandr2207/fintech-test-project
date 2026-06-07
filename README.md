# Fintech Test Project

A React application built with TypeScript, Vite, TanStack Query, TanStack Table, Zustand, Tailwind CSS, React Hook Form, and Yup.

## Features

- Fetches users and posts from the JSONPlaceholder API
- Stores fetched data in Zustand state management
- Displays data in a responsive table using TanStack Table
- User filtering functionality
- Form handling with React Hook Form and Yup validation
- Modern UI built with Tailwind CSS
- Client-side routing with React Router

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS

### State Management

- Zustand

### Data Fetching

- TanStack Query
- Axios

### Table Management

- TanStack Table

### Forms & Validation

- React Hook Form
- Yup

### Routing

- React Router DOM

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd fintech-test-project
```

Install dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Available Scripts

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

## Project Structure

```text
src/
├── components/
├── pages/
├── services/
├── store/
├── hooks/
├── types/
├── routes/
└── utils/
```

## API

The project uses the JSONPlaceholder API:

- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/posts

## License

This project was created as a technical assessment and is intended for educational and evaluation purposes.
