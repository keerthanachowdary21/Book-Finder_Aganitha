# Book Finder

## Overview
The **Book Finder** is a web application designed to help users search for books by their titles. It allows users to enter a book title in the search bar, fetches results from the Open Library API, and displays relevant book details like titles, authors, and covers. Users can also press "Enter" to search for books, making it more user-friendly.

## Library Management
<div><img src='https://drive.google.com/uc?id=16RH8pNZ0neJoykH4iqDlM0930el4r4mD' alt='image'/></div>

## Features
- Search for books by title using the Open Library API.
- Displays book details such as title, author, and cover image.
- Responsive design optimized for different devices (mobile, tablet, laptop, etc.).
- Spinner animation to indicate data is being loaded.
- Displays a message when no books are found for a given search.

## Technology Stack
- **Frontend**: React.js
- **State Management**: React's built-in state management (useState, use effect)
- **Styling**:Styled Components
- **Data Fetching**: Fetch API (instead of Axios)
- **API**: Open Library Search API ([https://openlibrary.org/search.json](https://openlibrary.org/search.json))

## API Used
The application uses the Open Library Search API to fetch books based on a user's input. The API URL used is:
