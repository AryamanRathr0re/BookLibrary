import BookCard from "./BookCard";

export default function BookList({ books, currentPage, booksPerPage }) {
  const indexOfBookLast = currentPage * booksPerPage;
  const indexOfBookFirst = indexOfBookLast - booksPerPage;
  const currentBooks = books.slice(indexOfBookFirst, indexOfBookLast);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {currentBooks.map((book) => {
        <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
}
