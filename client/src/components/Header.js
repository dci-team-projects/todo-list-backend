import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";

function Header() {
  return (
    <div className="header">
      <div className="wrapper-logo">
        <FcTodoList className="logo" size="60px" />
      </div>
      <nav className="wrapper-links">
        <Link className="link" path="/signin">
          signin
        </Link>
        <Link className="link" path="/signout">
          signout
        </Link>
        <Link className="link" path="/dashboard">
          dashboard
        </Link>
      </nav>
    </div>
  );
}

export default Header;
