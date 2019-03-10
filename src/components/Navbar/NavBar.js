import React, { Component } from "react"
import "./NavBar.css"
import { Link } from "gatsby"

export default class NavBar extends Component {
  render() {
    return (
      <nav class="navbar">
        <a href="#" class="logo">
          logo
        </a>
        <ul class="main-nav" id="js-menu">
          <li>
            <Link to="#" class="nav-links">
              home
            </Link>
          </li>
          <li>
            <Link to="#" class="nav-links">
              about us
            </Link>
          </li>
          <li>
            <Link to="#" class="nav-links">
              our services
            </Link>
          </li>
          <li>
            <Link to="#" class="nav-links">
              contact Us
            </Link>
          </li>
          <li>
            <Link to="#" class="nav-links">
              events
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
