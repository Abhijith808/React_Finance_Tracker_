import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button, Navbar, Nav, } from 'react-bootstrap';
import image1 from './headimg1.jpg';
import image2 from './headimg2.jpg';
import image3 from './headimg3.jpg';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#why-choose-us">Why Choose Us</Nav.Link>
            <Nav.Link href="#get-started">Get Started</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div
        style={{
          position: "relative",
          height: "500px",
          width: "100%",
          backgroundColor: "white",
        }}
      >
     <Carousel fade interval={1500} style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}>
  <Carousel.Item>
    <img src={require("./CAimg1.jpg")} className="d-block w-100" alt="" height="500" width="100%" />
    <Carousel.Caption>
      <h3 style={{ fontSize: "2rem", fontFamily: "cursive", fontWeight: "bold" }}>Finance Tracker</h3>
      <p style={{ fontSize: "1rem", fontFamily: "cursive", fontWeight: "bold" }}>Start managing your finances today and achieve your financial goals.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={require("./CAimg2.jpg")} className="d-block w-100" alt="" height="500" width="100%" />
    <Carousel.Caption>
    <h3>Generate Reports</h3>
      <p>Gain valuable insights into your financial performance through detailed reports and analysis.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={require("./CAimg3.jpg")} className="d-block w-100" alt="" height="500" width="100%" />
    <Carousel.Caption>
      <h3>Track Your Expenses</h3>
      <p>Effortlessly monitor and categorize your expenses to gain better control of your spending.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={require("./CAimg4.jpg")} className="d-block w-100" alt="" height="500" width="100%" />
    <Carousel.Caption>
      <h3>Set Financial Goals</h3>
      <p>Define your financial objectives and track your progress towards achieving them with ease.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "4rem", fontFamily: "cursive", fontWeight: "bold" }}>Finance Tracker</h1>
          <p style={{ fontSize: "1rem", fontFamily: "cursive", fontWeight: "bold" }}>Start managing your finances today and achieve your financial goals.</p>
        </div>
      </div>

      <div className="container py-5">
      <h1 style={{ fontSize: "4rem", fontFamily: "cursive", fontWeight: "bold" }}>Finance Tracker</h1>
      <p style={{ fontSize: "1rem", fontFamily: "cursive", fontWeight: "bold" }}>Start managing your finances today and achieve your financial goals.</p>
        <div className="row mt-5">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={image1} height="300" width="200%" />
              <Card.Body>
                <Card.Title>Expense Tracking</Card.Title>
                <Card.Text>
                  Keep track of your expenses and categorize them for better budgeting and financial planning.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={image2} height="300" width="200%" />
              <Card.Body>
                <Card.Title>Budget Management</Card.Title>
                <Card.Text>
                  Create budgets, set spending limits, and receive alerts to stay within your financial goals.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={image3} height="300" width="200%" />
              <Card.Body>
                <Card.Title>Savings and Investments</Card.Title>
                <Card.Text>
                  Track your savings progress, set savings goals, and explore investment opportunities.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div id="features" className="mt-5">
        <h1 style={{ fontSize: "3rem", fontWeight: 'bold',  fontFamily: "cursive", fontWeight: "bold", textAlign: "center", textTransform: 'uppercase'}}>Features</h1>
          <div className="row mt-3">
            <div className="col-md-4">
            <img src={require("./img1.jpg")} className="d-block w-100" alt="" height="500" width="200%" />

              <h3>Financial Planning</h3>
              <p>
                Plan and manage your financial goals, create budgets, and track your progress in real-time.
              </p>
            </div>
            <div className="col-md-4">
            <img src={require("./img2.jpg")} className="d-block w-100" alt="" height="500" width="200%" />
              <h3>Expense Tracking</h3>
              <p>
                Keep track of your expenses, categorize them, and gain insights into your spending habits.
              </p>
            </div>
            <div className="col-md-4">
            <img src={require("./img3.jpg")} className="d-block w-100" alt="" height="500" width="200%" />
              <h3>Investment Management</h3>
              <p>
                Monitor your investments, track performance, and make informed decisions for your portfolio.
              </p>
            </div>
          </div>
        </div>

        <div id="why-choose-us" className="mt-5">
        <h1 style={{ fontSize: "3rem", fontWeight: 'bold',  fontFamily: "cursive", fontWeight: "bold", textAlign: "center", textTransform: 'uppercase'}}> Why Choose Us</h1>
          <div className="row mt-3">
            <div className="col-md-6">
            <img src={require("./img4.jpg")} className="d-block w-100" alt="" height="500" width="300%" />
              <h3>Easy to Use</h3>
              <p>
                Our intuitive interface makes it simple to navigate and manage your finances, even for beginners.
              </p>
            </div>
            <div className="col-md-6">
            <img src={require("./img5.jpg")} className="d-block w-100" alt="" height="500" width="300%" />
              <h3>Secure and Private</h3>
              <p>
                We prioritize the security and privacy of your financial data, ensuring your information is safe.
              </p>
            </div>
          </div>
        </div>

        <div id="get-started" className="mt-5">
        ` <h2>Get Started Today</h2>
          <p>
            Take control of your finances and start working towards your financial goals. Sign up for free!
          </p>
          <Button variant="primary">
            <Link to="/SignupPage"  style={{ color: 'white', textDecoration: 'none' }}>Sign Up</Link>
          </Button>
        </div>`
      <footer style={{ backgroundColor: "lightgray", padding: "20px" }}>
        <div className="container">
          <p>© 2023 Finance Tracker. All rights reserved.</p>
          <p>Contact: example@example.com</p>
        </div>
      </footer>
    </div>
    </div>

  );
}

export default Home;
