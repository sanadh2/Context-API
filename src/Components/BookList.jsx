import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li className="book" key={book.id}>
            {book.title}
          </li>
        );
      })}
      <iframe
        style={{ borderRadius: "12px" }} // Use double curly braces to define an object for style
        src="https://open.spotify.com/embed/playlist/2wI21it378x9EsIoSeKOeQ?utm_source=generator"
        width="50%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <iframe
        style={{ borderRadius: "12px", display: "" }}
        src="https://open.spotify.com/embed/track/45qfKR6AH0iddUNaRUo9Zc?utm_source=generator"
        width="500px"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        autoPlay={true}
      ></iframe>
    </ul>
  );
};

export default BookList;
