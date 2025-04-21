export default function Pagination({ currentPage, totalpges, onpageChange }) {
  const pageNo = [];
  for (let i = 1; i <= totalpges; i++) {
    pageNo.push[i];
  }

  return (
    <div className="flex justify-center mt-8">
      <nav className="inline-flex rounded-md shadow">
        <button
          onClick={() => onpageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
        >
          {" "}
          Previous
        </button>
        {pageNo.map((number) => {
          <button
            key={number}
            onClick={() => onpageChange(number)}
            className={`px-3 py-1 border-t border-b border-gray-300 ${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            {number}
          </button>;
        })}

        <button
          onClick={() => onpageChange(Math.min(totalpges, currentPage + 1))}
          disabled={currentPage === totalpges}
          className="px-3 py-1 rounded-r-md border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
        >
          Next
        </button>


        
      </nav>
    </div>
  );
}
