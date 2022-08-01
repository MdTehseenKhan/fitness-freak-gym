const Pagination = () => {
  const totalNumberOfPages = 6
  const numberOfPages = []

  for (let i = 1; i <= totalNumberOfPages; i++) {
    numberOfPages.push(i)
  }

  return (
    <nav className="flex w-full justify-center mx-auto">
      <div className="inline-flex -space-x-px rounded-lg">
        {/* Previous */}
        <button className="pagination-navigation rounded-l-lg hidden md:block">
          Previous
        </button>
        <button className="pagination-navigation rounded-l-lg md:hidden">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Numbers */}

        {totalNumberOfPages <= 7
          ? numberOfPages?.map((number) => (
              <button key={number} className="pagination-btn">
                {number}
              </button>
            ))
          : numberOfPages?.map((number) => (
              <button key={number} className="pagination-btn">
                {number}
              </button>
            ))}

        {/* Next */}
        <button className="pagination-navigation rounded-r-lg hidden md:block">
          Next
        </button>
        <button className="pagination-navigation rounded-r-lg md:hidden">
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Pagination
