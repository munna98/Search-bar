import React, { Fragment } from "react";
import "./SearchInput.css";

export const SearchInput = ({ searchInputval, handlechange, clearSearch }) => {
  return (
    <>
      <div>
        <h2>Looking for an item?...</h2>
        <div className="search-input">
          <i className="material-icons">search</i>
          <input
            type="text"
            name="searchtext"
            id=""
            placeholder="Type here..."
            onChange={handlechange}
            value={searchInputval}
          />
          {searchInputval!=="" &&
          <button onClick={clearSearch}>
          <i id="close" className="material-icons"   >
            close
          </i>
        </button>}
        </div>
      </div>
    </>
  );
};
