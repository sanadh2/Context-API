import React, { useContext, useState } from "react";
import { BookContext } from "../Context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [data, setData] = useState({
    title: "",
    author: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author } = data;
    addBook(title, author);
    setData({
      title: "",
      author: "",
    });
  };

  return (
    <form style={{ color: "black" }} onSubmit={handleSubmit}>
      <input
        style={{ color: "white" }}
        type="text"
        value={data.title}
        required
        placeholder="Book Title"
        onChange={handleChange}
        name="title"
      />
      <input
        style={{ color: "white" }}
        type="text"
        value={data.author}
        required
        placeholder="Author Name"
        name="author"
        id=""
        onChange={handleChange}
      />
      <button type="submit" style={{ color: "black" }} value={"Add"}>
        ADD
      </button>
    </form>
  );
};

export default BookForm;
