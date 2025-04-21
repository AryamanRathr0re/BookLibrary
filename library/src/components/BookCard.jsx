import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
      <p className="text-gray-600 mb-2">
        {book.authors.map((author) => author.name).join(",")}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Download: {book.download_count}
        </span>
        <link
          to={`/books/${book.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </link>
      </div>
    </div>
  );
}
