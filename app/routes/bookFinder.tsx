import axios from "axios";
import React, { useState, useEffect } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
}
const BookGenreUI = () => {
  const [genre, setGenre] = useState("romance");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  // Derived reactive values (calculated from state/props)
  const isEmpty = books.length === 0;
  const pageTitle = `${genre.charAt(0).toUpperCase() + genre.slice(1)} Books`;

  // Simulated API function
  const fetchBooksByGenre = async (selectedGenre: string): Promise<Book[]> => {
    try {
      // Format the genre to match Open Library's subject naming conventions
      const formattedGenre = selectedGenre.toLowerCase().replace(/\s+/g, "_");

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

  useEffect(
    () => {
      const controller = new AbortController();
      const fetchBooksByGenre = async (selectedGenre: string) => {
        const response = await axios.get(
          `https://openlibrary.org/subjects/${selectedGenre}.json`,
          {
            signal: controller.signal,
          }
        );

        setBooks(response.data.works); // This will update the books state with the new data
      };

      fetchBooksByGenre(genre);
      // Cleanup: remove subscription
      return () => {
        console.log("Unsubscribed from data");
        controller.abort();
      };
    },
    [genre] //dependencies goes into the dependency array
  );

  // Effect with empty dependency array - runs only once on mount
  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const result: Book[] = await fetchBooksByGenre(genre);
      setBooks(result);
      setLoading(false);
      console.log("Effect executed with genre:", genre);
    };

    getBooks();
  }, []); // Empty dependency array - no synchronization with genre changes

  console.log(isEmpty, pageTitle);

  return (
    <div className=" mt-[35%] md:mt-10 p-6 w-[85%] md:w-[46%] lg:max-w-md mx-auto my-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Book Finder (Broken Synchronization)
      </h2>

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
            console.log("Dropdown changed to:", e.target.value);
            setGenre(e.target.value);
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
        <h3 className="text-lg font-semibold mb-2">
          Books Still Show Romance Only:
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

      <div className="mt-4 p-3 bg-red-50 rounded-md">
        <p className="text-sm text-red-700">
          <strong>Problem:</strong> The genre dropdown changes, but the book
          list doesn't update!
        </p>
      </div>
    </div>
  );
};

export default BookGenreUI;
