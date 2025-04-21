import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import "./App.css";
import { ThemePro } from "./theme";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <ThemePro>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </ThemePro>
  );
}

export default App;
