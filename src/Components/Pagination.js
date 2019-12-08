import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import Pagination from 'react-bootstrap/Pagination'
import { setCurrentPage } from "../Store/Actions"

export default function Paginations() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage);
  const totalPages = useSelector(state => state.totalPages);
  const active = currentPage;
  let items = [];
    
  for (let number = currentPage - 3; number <= currentPage + 3; number++) {
    
      items.push(
        <Pagination.Item 
        style={number < 1 || number > totalPages ? {display: "none"} : {}} 
        href={`#${number}`} 
        key={number} 
        active={number === active} 
        onClick={() => dispatch(setCurrentPage(number))}>
          {number}
        </Pagination.Item>,
      )  
    };    

  return (
    <Pagination>
        <Pagination.First disabled={active === 1} onClick={() => dispatch(setCurrentPage(1))}/>
        <Pagination.Prev disabled={active === 1} onClick={() => dispatch(setCurrentPage(currentPage - 1))}/>
        {items}
        <Pagination.Next disabled={active === totalPages} onClick={() => dispatch(setCurrentPage(currentPage + 1))}/>
        <Pagination.Last disabled={active === totalPages} onClick={() => dispatch(setCurrentPage(totalPages))}/>
      </Pagination>
  );
}
