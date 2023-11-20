// Pagination.jsx
import React from 'react';
import './css/Pagination.css'
const Pagination = ({ currentPage, usersPerPage, totalUsers, paginate }) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  console.log("currentPage",currentPage)
  return (
    <nav>
      <ul className="pagination">
        <li className="arrow" onClick={() => currentPage!==1 ? paginate( currentPage - 1) : paginate(1)} >
          &laquo;
        </li>
        <li className="current-page">
          {currentPage}
        </li>
        <li className="arrow" onClick={() => currentPage!==totalPages ? paginate( currentPage + 1) : paginate(1)}>
          &raquo;
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
