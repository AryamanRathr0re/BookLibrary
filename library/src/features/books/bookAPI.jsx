import axios from "axios";

const API_URL = "https://gutendex.com/books";

export const fetchBooks = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data.results;
  } catch (error) {
    console.error("Error in fetching Books", error);
    return [];
  }
};
