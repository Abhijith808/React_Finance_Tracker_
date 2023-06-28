import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Home'
import SignupPage from './SignupPage';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EmployeeForm from './EmployeeForm'
import LoginPage from './LoginPage'




function App() {
  return (
    <div style={{ backgroundColor: "floralwhite"}}>
      <BrowserRouter>
      <div className="container py-5 h-100">
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "lightgray", padding: "10px" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img src={require("./logo.jpg")} className="card-img-top" alt="Card 1" height="120" width="180" style={{ borderRadius: '2rem 0 2rem 0' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/LoginPage">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SignupPage">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/EmployeeFrom">
                  Employee Form
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

        </div>     

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EmployeeFrom" element={<EmployeeForm />} />
            <Route path="/SignupPage" element={<SignupPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />

          </Routes>
        </div>
        <div className="container py-5 h-100">

        <footer className="bg-dark text-center text-white"  >
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a className="btn btn-outline-light btn-floating m-1" style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
                <i className="fab fa fa-facebook-f"></i>
              </a>

              <a className="btn btn-outline-light btn-floating m-1" style={{ backgroundColor: "#55acee" }} href="#!" role="button">
                <i className="fab fa fa-twitter"></i>
              </a>

              <a className="btn btn-outline-light btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} href="#!" role="button">
                <i className="fab fa fa-google"></i>
              </a>

              <a className="btn btn-outline-light btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button">
                <i className="fab fa fa-instagram"></i>
              </a>

              <a className="btn btn-outline-light btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="#!" role="button">
              <i class="fa-brands fa fa-linkedin" ></i>
              </a>

              <a className="btn btn-outline-light btn-floating m-1" style={{ backgroundColor: "#333333" }} href="#!" role="button">
                <i className="fab fa fa-github"></i>
              </a>
            </section>
          </div>

          <div className="container p-4 pb-0">
            <section>
              <p className="d-flex justify-content-center align-items-center">
              <span className="me-3 text-white" to> Register for Employee</span>
              <a href="EmployeeFrom" to="/EmployeeFrom" className="btn btn-outline-primary btn-rounded" style={{ color: 'white', textDecoration: 'none' }}>
                Sign up!
              </a>      
              
              </p>
            </section>
          </div>

          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            <span className="text-white">
              © 2023 
              <a className="text-white" href="https://www.linkedin.com/in/abhijiths808/">
                Abhijith S.
              </a>
              <br></br>
              <a className="text-white" href="https://mdbootstrap.com/">
                MDBootstrap.com
              </a>
            </span>
          </div>
        </footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
 




