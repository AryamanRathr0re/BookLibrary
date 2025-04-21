import { useDispatch, useSelector } from "react-redux";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import { fetchBooks } from "../features/books/bookAPI";
import { setBooks, setCurrentPage } from "../features/books/bookSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { books, currentPage, booksPerPage } = useSelector(
    (state) => state.books
  );
  const [localBooks, setLocalBooks] = useState([]);
  const [loading, setLoaading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      const booksdata = await fetchBooks();
      dispatch(setBooks(booksdata));
      setLocalBooks(booksdata);
      setLoaading(false);
    };
    loadBooks();
  }, [dispatch]);

  if (loading) return <div>Laoding please Wait...</div>;

  return (
    <div className="container mx-auto p-4">
      <SearchBar books={localBooks} />
      <BookList
        books={localBooks}
        currentPage={currentPage}
        booksPerPage={booksPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalpges={totalpges}
        onpageChange={(page) => dispatch(setCurrentPage(page))}
      />
    </div>
  );
}
