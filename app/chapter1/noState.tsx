import axios from "axios";
import React, { useState, useEffect } from "react";
import Instruction from "./component/instruction";

interface Book {
  id: number;
  title: string;
  author: string;
}
const NoStateBookFinder = () => {
  let genre = "romance";
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [displayHelper, setDisplayHelper] = useState(false);

  // Simulated API function
  const fetchBooksByGenre = async (): Promise<Book[]> => {
    try {
      // Format the genre to match Open Library's subject naming conventions
      const formattedGenre = genre.toLowerCase().replace(/\s+/g, "_");

      // Fetch data from Open Library Subjects API
      const response = await axios.get(
        `https://openlibrary.org/subjects/${formattedGenre}.json`
      );

      // Extract relevant book data
      const books = response.data.works.slice(0, 3).map((work: any) => ({
        id: work.cover_edition_key || work.key,
        title: work.title,
        author: work.authors.map((author: any) => author.name).join(", "),
      }));

      return books;
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    }
  };

  //Effect with empty dependency array - runs only once on mount
  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const result: Book[] = await fetchBooksByGenre();
      setBooks(result);
      setLoading(false);
      console.log("Effect executed with genre:", genre);
    };

    getBooks();
  }, []); // Empty dependency array - no synchronization with genre changes

  return (
    <div className=" mt-[35%] md:mt-10 p-6 w-[85%] md:w-[46%] lg:max-w-md mx-auto my-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Book Finder (Without State) </h2>

      {/* Instructions section */}
      <Instruction>
        Try changing the value of the dropdown to see how it behaves when not
        controlled by a state value. Notice that the UI won't update properly
        because the dropdown is using a regular variable{" "}
        <code className="bg-blue-100 px-1 rounded">genre</code> instead of React
        state.
      </Instruction>

      <div className="mb-4">
        <label
          htmlFor="genre-select"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Select Genre:
        </label>
        <select
          id="genre-select"
          value={genre}
          onChange={(e) => {
            genre = e.target.value;
            setDisplayHelper(true);
          }}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="romance">Romance</option>
          <option value="thriller">Thriller</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">
          Selected Genre: {genre.charAt(0).toUpperCase() + genre.slice(1)}
        </h3>

        {loading ? (
          <p className="text-gray-500 italic">Loading books...</p>
        ) : (
          <ul className="space-y-2">
            {books.map((book) => (
              <li key={book.id} className="p-2 bg-gray-50 rounded">
                <span className="font-medium">{book.title}</span>
                <span className="block text-sm text-gray-500">
                  by {book.author}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className={`mt-4 p-3 bg-red-50 rounded-md ${
          displayHelper ? "" : "hidden"
        }`}
      >
        <p className="text-sm text-red-700">
          <strong>Problem:</strong> The genre dropdown remains 'Romance' even
          after channging the genre!
        </p>
      </div>
    </div>
  );
};

export default NoStateBookFinder;
