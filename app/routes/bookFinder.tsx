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

  // Simulated API function
  const fetchBooksByGenre = async (selectedGenre: string): Promise<Book[]> => {
    console.log(`Fetching books for genre: ${selectedGenre}`);
    // This simulates an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const bookDatabase = {
          romance: [
            { id: 1, title: "Pride and Prejudice", author: "Jane Austen" },
            { id: 2, title: "The Notebook", author: "Nicholas Sparks" },
          ],
          thriller: [
            { id: 3, title: "The Silent Patient", author: "Alex Michaelides" },
            { id: 4, title: "Gone Girl", author: "Gillian Flynn" },
          ],
          fantasy: [
            {
              id: 5,
              title: "The Name of the Wind",
              author: "Patrick Rothfuss",
            },
            { id: 6, title: "The Way of Kings", author: "Brandon Sanderson" },
          ],
        };

        resolve(
          bookDatabase[
            selectedGenre.toLowerCase() as keyof typeof bookDatabase
          ] || ([] as Book[])
        );
      }, 600); // Simulate network delay
    });
  };
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

  return (
    <div className=" mt-6 p-6 max-w-md mx-auto my-auto bg-white rounded-lg shadow-md">
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
