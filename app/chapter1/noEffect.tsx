import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Instruction from "./component/instruction";

interface Book {
  id: number;
  title: string;
  author: string;
}
const NoEffectBookFinder = () => {
  const [genre, setGenre] = useState("romance");
  const [musicGenre, setMusicGenre] = useState("rock");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [displayHelper, setDisplayHelper] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

  // This logs how many times the component renders
  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, [genre, musicGenre]);

  // Simulated API function - moved the state updates outside
  const fetchBooksByGenre = async () => {
    console.log(`fetchBooksByGenre called with book genre: ${genre}`);
    console.log(`fetchBooksByGenre called with music genre: ${genre}`);

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
  fetchBooksByGenre();

  return (
    <div className=" mt-[35%] md:mt-10 p-6 w-[85%] md:w-[46%] lg:max-w-md mx-auto my-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Book Finder (Without Effect) </h2>

      {/* Instructions section */}
      <Instruction>
        Try selecting different options from the <strong>Music Genre</strong>{" "}
        dropdown and watch the counter below increase. You'll notice the fetch
        count goes up with each selection! This happens because, without a
        properly configured{" "}
        <code className="bg-blue-100 px-1 rounded">useEffect</code> to sync
        states, the component re-renders unnecessarily, triggering multiple API
        calls.
        <br /> <br />
        You can also monitor this behavior in your console logs.
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
            setGenre(e.target.value);
            setDisplayHelper(true);
          }}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="romance">Romance</option>
          <option value="thriller">Thriller</option>
          <option value="fantasy">Fantasy</option>
        </select>
        <h3 className="text-lg font-semibold my-2">
          Selected Book Genre: {genre.charAt(0).toUpperCase() + genre.slice(1)}
        </h3>
      </div>

      <div className="mb-4">
        <label
          htmlFor="music-genre-select"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Select Music Genre:
        </label>
        <select
          id="music-genre-select"
          value={musicGenre}
          onChange={(e) => {
            setMusicGenre(e.target.value);
          }}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="pop">Pop</option>
          <option value="classical">Classical</option>
          <option value="hiphop">Hip Hop</option>
        </select>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">
          Selected Music Genre:{" "}
          {musicGenre.charAt(0).toUpperCase() + musicGenre.slice(1)}
        </h3>
        <h3 className="text-lg font-semibold mb-2 text-red-500">
          fetchBooksByGenre called: {renderCount} time(s)
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

      <div className={`mt-4 p-3 bg-red-50 rounded-md `}>
        <p className="text-sm text-red-700">
          <strong>Problem: </strong> Because of the absence of a useEffect, the
          book list doesn't get displayed
        </p>
      </div>
    </div>
  );
};

export default NoEffectBookFinder;
