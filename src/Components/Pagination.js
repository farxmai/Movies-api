import React from 'react';
import Pagination from 'react-bootstrap/Pagination'

export default function Paginations(props) {
  let {currentPage, totalPages, setCurrentPage} = props;
  let active = currentPage;
  let items = [];
  
  
  for (let number = currentPage - 3; number <= currentPage + 3; number++) {
    
      items.push(
        <Pagination.Item style={number < 1 || number > totalPages ? {display: "none"} : {}} href={`#${number}`} key={number} active={number === active} onClick={() => setCurrentPage(number)}>
          {number}
        </Pagination.Item>,
      )  
    };
    

  return (

    <Pagination>
        <Pagination.First disabled={active === 1} onClick={() => setCurrentPage(1)}/>
        <Pagination.Prev disabled={active === 1} onClick={() => setCurrentPage(currentPage - 1)}/>
        {items}
        <Pagination.Next disabled={active === totalPages} onClick={() => setCurrentPage(currentPage + 1)}/>
        <Pagination.Last disabled={active === totalPages} onClick={() => setCurrentPage(totalPages)}/>
      </Pagination>
  );
}
