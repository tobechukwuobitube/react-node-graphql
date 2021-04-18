import React from "react";
import { HashLink as Link } from 'react-router-hash-link'

function Header() {
  return (
    <div className="topnav">
      <a href="/" className="logo">
        Movie Maker
      </a>
      <div className="search-container">
        <form action="">
          <Link smooth to="#form">Add Movies</Link>
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
