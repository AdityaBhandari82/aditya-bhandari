import React from 'react';
import a1 from "./a1.png";
import a2 from "./a2.png";
import a3 from "./a3.png";
import a4 from "./a4.png";
import a5 from "./a5.png";
import a6 from "./a6.png";
import a7 from "./a7.png";
import a8 from "./a8.png";
import a9 from "./a9.png";
import a10 from "./a10.png";
import a11 from "./a11.png";
import a12 from "./a12.png";
import a13 from "./a13.png";
import a14 from "./a14.png";
import a15 from "./a15.png";
// import Logo1 from "./Logo1.png";
import Button from "./Button.png";
import Button1 from "./Button (1).png";
import Button2 from "./Button (2).png";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import Logo7 from "./Logo (7).png"
const Courses =() =>
{
  return(
    <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="fw-bold">Online Courses on Design and Development</h1>
            </div>
            <div className="col-12 text-center mt-3">
              <p className="text-muted">
                Welcome to our online course page, where you can enhance your skills in design and
                development. Choose from our carefully curated selection of 10 courses designed to
                provide you with comprehensive knowledge and practical experience. Explore the courses
                below and find the perfect fit for your learning journey.
              </p>
            </div>
          </div>
        </div>
    


    <div className="container my-5">
      {/* Course Title and Description */}
      <div className="text-center mb-4">
        <h3 className="fw-bold">Web Design Fundamentals</h3>
        <p className="text-muted">
          Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
        </p>
        <button className="btn btn-primary">View Course</button>
      </div>

      {/* Course Preview Images */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <img
            src={a1}
            alt="Sketching wireframes"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={a2}
            alt="Mobile prototype design"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={a3}
            alt="Web design on desktop"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Course Info */}
      <div className="d-flex justify-content-center gap-4 mb-4">
        <span className="badge bg-light text-dark px-4 py-2">4 Weeks</span>
        <span className="badge bg-light text-dark px-4 py-2">Beginner</span>
      </div>

      {/* Curriculum Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4 fw-bold">Curriculum</h5>
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {[
              "Introduction to HTML",
              "Styling with CSS",
              "Introduction to Responsive Design",
              "Design Principles for Web",
              "Building a Basic Website",
            ].map((topic, index) => (
              <div key={index} className="col">
                <div className="text-center p-3 border rounded bg-light">
                  <h6 className="fw-bold mb-2">0{index + 1}</h6>
                  <p className="mb-0">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="text-end mt-4">
        <p className="mb-0">By <strong>John Smith</strong></p>
      </div>
    </div>



    <div className="container my-5">
      {/* Course Title and Description */}
      <div className="text-center mb-4">
        <h3 className="fw-bold">UI/UX Design</h3>
        <p className="text-muted">
        Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.
        </p>
        <button className="btn btn-primary">View Course</button>
      </div>

      {/* Course Preview Images */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <img
            src={a4}
            alt="Sketching wireframes"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={a5}
            alt="Mobile prototype design"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={a6}
            alt="Web design on desktop"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Course Info */}
      <div className="d-flex justify-content-center gap-4 mb-4">
        <span className="badge bg-light text-dark px-4 py-2">6 Weeks</span>
        <span className="badge bg-light text-dark px-4 py-2">Intermediate</span>
      </div>

      {/* Curriculum Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4 fw-bold">Curriculum</h5>
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {[
              "Introduction to UI/UX Design",
              "User Research and Personas",
              "Wireframing and Prototyping",
              "Visual Design and Branding",
              "Usability Teasting and iteration",
            ].map((topic, index) => (
              <div key={index} className="col">
                <div className="text-center p-3 border rounded bg-light">
                  <h6 className="fw-bold mb-2">0{index + 1}</h6>
                  <p className="mb-0">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="text-end mt-4">
        <p className="mb-0">By <strong>By Emily Johnson</strong></p>
      </div>
    </div>



    <div className="container my-5">
      {/* Course Title and Description */}
      <div className="text-center mb-4">
        <h3 className="fw-bold">Mobile App Development</h3>
        <p className="text-muted">
        Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.
        </p>
        <button className="btn btn-primary">View Course</button>
      </div>

      {/* Course Preview Images */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <img
            src={a7}
            alt="Sketching wireframes"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={a8}
            alt="Mobile prototype design"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={a9}
            alt="Web design on desktop"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Course Info */}
      <div className="d-flex justify-content-center gap-4 mb-4">
        <span className="badge bg-light text-dark px-4 py-2">8 Weeks</span>
        <span className="badge bg-light text-dark px-4 py-2">Intermediate</span>
      </div>

      {/* Curriculum Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4 fw-bold">Curriculum</h5>
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {[
              "Introduction to Mobile App Development",
              "Fundamentals of Swift Programming (iOS)",
              "Fundamentals of Kotlin Programming (Android)",
              "Building User Interfaces",
              "App Deployment and Testing",
            ].map((topic, index) => (
              <div key={index} className="col">
                <div className="text-center p-3 border rounded bg-light">
                  <h6 className="fw-bold mb-2">0{index + 1}</h6>
                  <p className="mb-0">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="text-end mt-4">
        <p className="mb-0">By <strong>By David Brown</strong></p>
      </div>
    </div>



    <div className="container my-5">
      {/* Course Title and Description */}
      <div className="text-center mb-4">
        <h3 className="fw-bold">Graphic Design for Beginners</h3>
        <p className="text-muted">
        Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.
        </p>
        <button className="btn btn-primary">View Course</button>
      </div>

      {/* Course Preview Images */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <img
            src={a10}
            alt="Sketching wireframes"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={a11}
            alt="Mobile prototype design"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={a12}
            alt="Web design on desktop"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Course Info */}
      <div className="d-flex justify-content-center gap-4 mb-4">
        <span className="badge bg-light text-dark px-4 py-2">10 Weeks</span>
        <span className="badge bg-light text-dark px-4 py-2">Beginner</span>
      </div>

      {/* Curriculum Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4 fw-bold">Curriculum</h5>
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {[
              "Introduction to Graphic Design",
              "Typography and Color Theory",
              "Layout Design and Composition",
              "Image Editing and Manipulation",
              "Designing for Print and Digital Media",
            ].map((topic, index) => (
              <div key={index} className="col">
                <div className="text-center p-3 border rounded bg-light">
                  <h6 className="fw-bold mb-2">0{index + 1}</h6>
                  <p className="mb-0">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="text-end mt-4">
        <p className="mb-0">By <strong>By Sarah Thopson</strong></p>
      </div>
    </div>



    <div className="container my-5">
      {/* Course Title and Description */}
      <div className="text-center mb-4">
        <h3 className="fw-bold">Front-End Web Development</h3>
        <p className="text-muted">
        Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.
        </p>
        <button className="btn btn-primary">View Course</button>
      </div>

      {/* Course Preview Images */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <img
            src={a13}
            alt="Sketching wireframes"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={a14}
            alt="Mobile prototype design"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={a15}
            alt="Web design on desktop"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Course Info */}
      <div className="d-flex justify-content-center gap-4 mb-4">
        <span className="badge bg-light text-dark px-4 py-2">10 Weeks</span>
        <span className="badge bg-light text-dark px-4 py-2">Intermediate</span>
      </div>

      {/* Curriculum Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4 fw-bold">Curriculum</h5>
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {[
              "HTML Fundamentals",
              "CSS Styling and Layouts",
              "JavaScript Basics",
              "Building Responsive Websites",
              "Introduction to Bootstrap and React",
            ].map((topic, index) => (
              <div key={index} className="col">
                <div className="text-center p-3 border rounded bg-light">
                  <h6 className="fw-bold mb-2">0{index + 1}</h6>
                  <p className="mb-0">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="text-end mt-4">
        <p className="mb-0">By <strong>By Michael Adams</strong></p>
      </div>
    </div>


    
    <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
        <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div class="row">
            <div class="col-lg-3 mb-3">
              <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
<div className='"d-block me-2" viewBox="0 0 118 94"'>
                <img src={Logo7} alt="img" width={30}/>
</div>
              </a>
              <ul class="list-unstyled small">
                <li class="foot-1"><p><em class="fa-solid fa-envelope"></em><img src={i1} alt=''/>hello@skillbridge.com </p></li>
                <li class="foot-1"><p><em class="fa-solid fa-phone"></em> <img src={i2} alt=''/>+91 9181323209</p></li>
                <li class="foot-1"><p><em class="fa-solid fa-location-dot"></em> <img src={i3} alt=''/>some where in world</p></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Home</h5>
              <ul class="list-unstyled">
                  <li class="mb-2">Benefits</li>
                <li class="mb-2">Our Courses</li>
                <li class="mb-2">Test Testimonials</li>
                <li class="mb-2">Our faq</li>
                
            </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>About US</h5>
              <ul class="list-unstyled">
                <li class="mb-2">Company</li>
                <li class="mb-2">Achievements</li>
                <li class="mb-2">Our Goals</li>
                
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Social Profiles</h5>
              <ul class="list-unstyled ">
                <em class="fa-brands fa-facebook"> <img src={Button} alt=""/></em>
                <em class="fa-brands fa-twitter"><img src={Button1} alt=''/></em>
                <em class="fa-brands fa-linkedin"><img src={Button2} alt=''/></em> 
              </ul>
            </div>
            
          </div>
        </div>
      </footer>  
   
    </div>
  );

}
export default Courses;