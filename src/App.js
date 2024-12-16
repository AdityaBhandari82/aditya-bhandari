import React from "react";
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";

import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Courses from "./Components/Courses";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import SignUp from "./Components/SignUP";
import Login from "./Components/Login";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo7 from "./Components/Logo (7).png";
import './App.css';

const App = () => {
  return (
    <div >
    <Router>
      <div className= "bg-warning text-center m-2 p-0.5">
        <h6>Free Courses * Sales End Soon. Get it Now  </h6>
      </div>
        
    <div className="navbar" >
      <nav>
        <span className="nav-links " >
          
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#home">  <img src={Logo7} alt="Zapier" class="logo-item "/ ></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>< Link to="/">Home </Link></Nav.Link>
            <Nav.Link>< Link to="/aboutus">About Us </Link></Nav.Link>
            <Nav.Link>< Link to="/courses">Courses </Link></Nav.Link>
            <Nav.Link>< Link to="/pricing">Pricing </Link></Nav.Link>
            <Nav.Link>< Link to="/contact">Contact </Link></Nav.Link>
            <Nav.Link>< Link to="/signup">Sign </Link></Nav.Link>
            <Nav.Link>< Link to="/login">Login </Link></Nav.Link>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </span>
    </nav>
    </div>
   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
        
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        
      </Routes>
      
    </Router>
    
    </div>
  );
}


export default App;
