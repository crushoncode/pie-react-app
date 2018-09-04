import React from 'react';

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
    <div className="pageContainer">
      <div>
        <button onClick={() => changePage(pagination.currentPage - 1)}>
          {'<'}
        </button>
      </div>
      <div>{pageButtons}</div>
      <div>
        <button onClick={() => changePage(pagination.currentPage + 1)}>
          {'>'}
        </button>
      </div>
    </div>
  );
};
export default Pagination;
