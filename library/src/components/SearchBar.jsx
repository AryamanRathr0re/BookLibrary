import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/books/bookSlice";

function binarySearch(books, query) {
  let left = 0;
  let right = books.length - 1;
  const results = [];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const bookTilte = books[mid].title.toLowerCase();

    if (bookTilte.includes(query.toLowerCase())) {
      let i = mid;
      while (
        i >= left &&
        books[i].title.toLowerCase().includes(query.toLowerCase())
      ) {
        results.unshift(books[i]);
        i--;
      }
      i = mid + 1;

      while (
        i <= right &&
        books[i].title.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push(books[i]);
        i++;
      }
      return results;
    } else if (bookTilte < query.toLowerCase()) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return results;
}

export default function SearchBar({ books }) {
  const [searchRes, setSearchRes] = useState([]);
  const searchInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSearch = () => {
    const query = searchInputRef.current.value;
    if (!query) {
      setSearchRes([]);
      return;
    }

    const sortedBooks = [...books].sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    const results = binarySearch(sortedBooks, query);
    setSearchRes(results);
    dispatch(setSearchQuery(query));
  };
  return (
    <div className="mb-4">
      <div className="flex">
        <input
          type="text"
          ref={searchInputRef}
          placeholder="Search The Books"
          className="flex-grow p-2 border rounded-l"
        />
        <button
          onClick={handleSearch}
          className="bg blue 500 text-white px-4 py-2 rounded-r"
        >
          Search
        </button>
      </div>
      {searchRes.length > 0 && (
        <div className="mt-2">
          <p>Found {searchRes.length} matches</p>
        </div>
      )}
    </div>
  );
}
