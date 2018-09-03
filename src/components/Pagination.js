import React, { Fragment } from 'react';

const Pagination = ({ pagination, storeLength, changePage }) => {
  const totalPages = Math.ceil(storeLength / pagination.storeLimit);
  const pages = Array.from(Array(totalPages).keys());
  const pageButtons = pages.map((page) => {
    return (
      <button key={page} onClick={() => changePage(page + 1)}>
        {'page' + (page + 1)}
      </button>
    );
  });

  return (
    <Fragment>
      <div className="prevPage">
        <button onClick={() => changePage(pagination.currentPage - 1)}>
          left
        </button>
      </div>
      <div className="currentPages">{pageButtons}</div>

      <div className="nextPage">
        <button onClick={() => changePage(pagination.currentPage + 1)}>
          right
        </button>
      </div>
    </Fragment>
  );
};
export default Pagination;
