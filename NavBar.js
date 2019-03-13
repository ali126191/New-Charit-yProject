import React, { Component } from "react"
import "./NavBar.css"
import { Link } from "gatsby"

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="#" class="logo">
          logo
        </a>
        <ul className="main-nav" id="js-menu">
          <li>
            <Link to="#" className="nav-links">
              home
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-links">
              about us
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-links">
              our services
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-links">
              contact Us
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-links">
              eventsss
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar