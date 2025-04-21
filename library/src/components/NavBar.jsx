import { useTheme } from "../theme";
import { Link } from "react-router-dom";

export default function Navbar() {
  const theme = useTheme();
  return (
    <nav className="bg gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Book Finder
        </Link>
        <button
          onClick={theme.toggleTheme}
          className="px-4 py-2 bg gray-700 rounded"
        >
          {theme.darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
