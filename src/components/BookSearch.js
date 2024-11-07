import React, { useState } from "react";
import BookCard from './BookCard'

import {SearchContainer, InputButtonContainer,SearchInput, BookList, NoResults, Spinner, SpinnerCircle, SearchButton } from "./book-search-styles";

function BookSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setNoResults(false);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setBooks(data.docs);
      if (data.docs.length === 0) {
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setNoResults(true);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <InputButtonContainer>
        <SearchInput
          type="text"
          placeholder="Search book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchButton disabled={!query.trim()} onClick={handleSearch}>Search</SearchButton>
      </InputButtonContainer>
      {loading ? (
        <Spinner>
          <SpinnerCircle />
        </Spinner>
      ) : (
        <BookList>
          {noResults ? (
            <NoResults>No results found</NoResults>
          ) : (
            books.map((book) => <BookCard key={book.key} book={book} />)
          )}
        </BookList>
      )}
    </SearchContainer>
  );
}

export default BookSearch;
