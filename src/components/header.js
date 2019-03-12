// import { Link } from "gatsby"

import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import NavBar from "./Navbar/NavBar"

const Header = ({ siteTitle }, props) => (
  <header>
    <NavBar />
    <h3>- Established 1996 -</h3>
    <h1>Shri Vitthal Hindu Mandir</h1>
    <FontAwesomeIcon icon={faAngleDown} />

  </header>
)

// let mainNav = document.getElementById("js-menu")
// let navBarToggle = document.getElementById("js-navbar-toggle")

// navBarToggle.addEventListener("click", () => {
//   mainNav.classList.toggle("active")
// })

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
