import React, { useState } from "react";
import hca_logo from "../css/images/hca_logo.png";

// navbar using bootstrap-css
const Navbar = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSearchSubmit(search);
  };

  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <a className="navbar-logo" href="/">
            <div className="nav-logo">
              <img alt="hca-logo" src={hca_logo} />
              <h1>HCA Video Library</h1>
            </div>
          </a>
          <div className="nav-item-covid">
            <a className="nav-link" aria-current="page" href="/">
              Covid-19 Videos
            </a>
          </div>
          <div className="nav-item-all">
            <a className="nav-link" href="/all">
              All Videos
            </a>
          </div>
          <div className="search-bar">
            <form onSubmit={handleSubmit} className="d-flex">
              <input
                onChange={handleChange}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="nav-item-user">
            <a className="nav-link">Welcome New User!</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
