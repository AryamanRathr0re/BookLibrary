import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const [books, setBooks] = useState(null);
  const [loading, setLoaading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://gutendex.com/books/${id}`);
        setBooks(res.data);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoaading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) return <div>Loading....</div>;
  if (!books) return <div> Books not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold"> {books.title}</h1>
      <p>Authors: {books.authors.map((a) => a.name).join(",")}</p>
      <p>Download : {books.download_count}</p>
      <p>languages: {books.languages.join(",")}</p>
    </div>
  );
}
