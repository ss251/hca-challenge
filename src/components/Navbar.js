import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import hca_logo from "../css/images/hca_logo.png";

// navbar using bootstrap-css
const Navbar = (props) => {
  const [search, setSearch] = useState("");
  const [burgerClick, setBurgerClick] = useState(false);

  const handleClick = () => setBurgerClick(!burgerClick);
  const closeBurgerMenu = () => setBurgerClick(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSearchSubmit(search);
    closeBurgerMenu();
  };

  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <NavLink to="/" className="navbar-logo">
          <div className="nav-logo">
            <img alt="hca-logo" src={hca_logo} />
            <h1>HCA Video Library</h1>
          </div>
        </NavLink>

        <div className="search-bar">
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              onChange={handleChange}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>

        {/* clicking the burger icon toggles nav-menu*/}
        <ul className={burgerClick ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <div className="nav-item-covid">
              <NavLink
                to="/"
                exact={true}
                className="nav-link"
                aria-current="page"
                activeStyle={{ color: "#2A6ED1" }}
                onClick={closeBurgerMenu}
              >
                Covid-19 Videos
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-item-all">
              <NavLink
                to="/all"
                className="nav-link"
                activeStyle={{ color: "#2A6ED1" }}
                onClick={closeBurgerMenu}
              >
                All Videos
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-item-user">
              <Link to="/#" className="nav-link">
                Welcome New User!
              </Link>
            </div>
          </li>
        </ul>
        <div className="burger-menu" onClick={handleClick}>
          <i className={burgerClick ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
