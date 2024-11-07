import React from "react";
import { BookCardContainer, BookImage, BookTitle, BookInfo } from "./book-card-styles";

function BookCard({ book }) {
  const truncatedTitle = book.title.length > 20 ? book.title.substring(0, 20) + "..." : book.title;
  const truncatedAuthor = book.author_name && book.author_name.length > 0 ? book.author_name[0].length > 20 ? book.author_name[0].substring(0, 20) + "..." : book.author_name[0] : "N/A";

  return (
    <BookCardContainer>
      <BookImage
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
      />
      <BookTitle>{truncatedTitle}</BookTitle>
      <BookInfo><strong>Author:</strong> {truncatedAuthor}</BookInfo>
      <BookInfo><strong>Published:</strong> {book.first_publish_year || "N/A"}</BookInfo>
    </BookCardContainer>
  );
}

export default BookCard;

