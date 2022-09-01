import React from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";

function PageList({
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,

  setActivePage,
  setSearchParams,
  page,
}) {
  // 전체 데이터 수는 서버에서 받아야 됨 (json-server에서는 주지 않아서 하드코딩된 상태)
  const handleChangePage = (activePage) => {
    setActivePage(activePage);
    setSearchParams({ page: activePage });
  };

  return (
    <PageListWrapper>
      <Pagination
        activePage={parseInt(page)}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={pageRangeDisplayed}
        prevPageText={"Prev"}
        nextPageText={"Next"}
        onChange={handleChangePage}
      />
    </PageListWrapper>
  );
}

export default PageList;

const PageListWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    min-width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    padding: 5px;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #3b4045;
  }
  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li:hover {
    background-color: #d3d3d3;
  }

  ul.pagination li.active {
    background-color: #f48225;
  }
`;
