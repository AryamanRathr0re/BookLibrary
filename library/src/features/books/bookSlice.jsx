import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  books: [],
  status: "idle",
  error: null,
  searchQuery: "",
  currentPage: 1,
  booksPerPage: 10,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setBooks, setSearchQuery, setCurrentPage } = booksSlice.actions;
export default booksSlice.reducer;
