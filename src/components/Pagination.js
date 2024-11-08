import React from 'react';

import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../redux/actions/movieAction';



function PaginationList() {
  

  const [pageCount, setPageCount] = useState();  

  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.movies.total_pages);

  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setPageCount(pages);
  }, []);

 

    const handlePageClick = (data) => {
      dispatch(getPage(data.selected + 1))
    }
  return (
    <ReactPaginate className=''
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}

      />
  );
}

export default PaginationList;