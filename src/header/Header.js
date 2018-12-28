import React from "react";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Users</a>
            <ul>
              <li>
                <a href="/add">Add</a>
              </li>
              <li>
                <a href="#">Delete</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/claim">Claims </a>
          </li>
          <li>
            <a href="#">Insurance Payers </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
