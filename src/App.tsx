import { useEffect, useState } from "react";
import "./App.css";
import { addNewBook, getAllBooks } from "./api";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Frontend App</h1>
      {books.map((book) => (
        <p>
          {book.title}
          <span> ({book.author})</span>
        </p>
      ))}
      <button onClick={() => addNewBook()}>Add Book</button>
    </>
  );
}

export default App;
