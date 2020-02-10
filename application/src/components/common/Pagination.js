import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ postsPerPage, totalPosts, paginate, getPageNumber }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="pagination-component">
      <ul className="pagination">
        <li className="page-item">
          <a
            onClick={() => paginate(getPageNumber - 1)}
            href={"/weapons/#" + getPageNumber}
            className="page-link"
          >
            <FaChevronLeft />
          </a>
        </li>
        {pageNumber.map(number => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              href={"/weapons/#" + getPageNumber}
              className={
                number == getPageNumber
                  ? "active-pagination page-link"
                  : "page-link"
              }
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            onClick={() => paginate(getPageNumber + 1)}
            href={"/weapons/#" + getPageNumber}
            className="page-link"
          >
            <FaChevronRight />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
