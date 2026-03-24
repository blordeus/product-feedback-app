# Product Feedback App

A responsive product feedback web app built with React, Vite, Tailwind
CSS, and React Router.

## Overview

This project allows users to browse product suggestions, filter by
category, sort feedback, view a roadmap by status, open individual
feedback threads, add comments and replies, create new feedback, edit
existing feedback, and delete feedback. App data persists locally with
localStorage.

## Features

-   View all product suggestions
-   Filter suggestions by category
-   Sort by upvotes or comment count
-   Open a dedicated feedback detail page
-   Add comments and nested replies
-   Create new feedback requests
-   Edit feedback title, category, status, and description
-   Delete feedback
-   View roadmap items by status
-   Mobile roadmap tabs
-   Responsive mobile menu
-   localStorage persistence

## Built With

-   React
-   Vite
-   React Router
-   Tailwind CSS v4
-   Local component state
-   localStorage

## Project Structure

src/ components/ comments/ feedback/ layout/ roadmap/ shared/ data/
pages/

## Getting Started

### Install dependencies

npm install

### Start the development server

npm run dev

### Build for production

npm run build

### Preview production build

npm run preview

## Screenshots

### Desktop

\[Add screenshot here\]

### Tablet

\[Add screenshot here\]

### Mobile

\[Add screenshot here\]

## Notes

-   Seed data comes from the provided Frontend Mentor JSON file.
-   Feedback changes persist in localStorage.
-   To reset local data during testing, clear the
    'product-feedback-app-data' key.

## What I Learned

-   How to move from static JSON to shared app state
-   How to build reusable UI components
-   How to manage nested comments and replies
-   How to structure a responsive app

## Future Improvements

-   Replace placeholder icons with SVG assets
-   Add delete confirmation modal
-   Improve dropdown accessibility
-   Add upvote interactions
-   Add animation polish

## Author

Bryan Lordeus

## Acknowledgments

Challenge by Frontend Mentor
