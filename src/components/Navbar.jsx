// Navbar.js
import './../styles/navbar.css'
import Button from "react-bootstrap/Button";

export function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="d-flex flex-grow-1">
          <span className="w-100 d-lg-none d-block"></span>
          <a className="navbar-brand" href="#">
            {" "}
            {title}{" "}
          </a>
          <div className="w-100 text-right">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myNavbar7"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div
          className="collapse navbar-collapse flex-grow-1 text-right"
          id="myNavbar7"
        >
          <ul className="navbar-nav mx-auto flex-nowrap">
            <li className="nav-item">
              <a href="./products" className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="./shop" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="./list" className="nav-link">
                List
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-light btn-md"
              >
                <a href="./">Logout</a>
              </button>

            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
