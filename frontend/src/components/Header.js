import React from "react";

function Header() {
  return (
    <div className="topnav">
      <a href="/" className="logo">
        Movie Maker
      </a>
      <div className="search-container">
        <form action="">
          <a href="/">Add Movies</a>
          <input type="text" name="search" id="" placeholder="Search.." />
          <button type="submit">
            <i className="far fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
