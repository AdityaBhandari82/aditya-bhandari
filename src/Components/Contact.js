import React from 'react';
import Button from "./Button.png";
import Button1 from "./Button (1).png";
import Button2 from "./Button (2).png";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import Logo7 from "./Logo (7).png"
function Contact()
{
    return(
        <div>
                <div className="container my-5  " style={{ backgroundColor:"whitesmoke"}}>
          <div className="row">
            <div className="col-5 ">
              <h1 className="fw-bold text-center my-5">Contact Us</h1>
            </div>
            <div className="col-7 text-center mt-3">
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
            <div className="row">
                {/* Form Section */}
                <div className="col-md-8">
                    <form>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your Email" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="tel" className="form-control" id="phone" placeholder="Enter Phone Number" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" placeholder="Enter your Subject" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Enter your Message here..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-warning">Send Your Message</button>
                    </form>
                </div>

                {/* Contact Information Section */}
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-body text-center">
                            <i className="bi bi-envelope-fill fs-4"></i>
                            <p className="mb-0">support@skillbridge.com</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body text-center">
                            <i className="bi bi-telephone-fill fs-4"></i>
                            <p className="mb-0">+91 00000 00000</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body text-center">
                            <i className="bi bi-geo-alt-fill fs-4"></i>
                            <p className="mb-0">Somewhere in the World</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <p className="mb-2">Social Profiles</p>
                            <a href="#" className="mx-2 text-dark"><i className="bi bi-facebook fs-4"></i></a>
                            <a href="#" className="mx-2 text-dark"><i className="bi bi-twitter fs-4"></i></a>
                            <a href="#" className="mx-2 text-dark"><i className="bi bi-linkedin fs-4"></i></a>
                        </div>
                    </div>
                </div>
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
                <li class="foot-1"><p><em class="fa-solid fa-envelope"></em><img src={i1} alt=''/>  hello@skillbridge.com </p> </li>
                <li class="foot-1"><p><em class="fa-solid fa-phone"></em> <img src={i2} alt=''/>  +91 9181323209 </p> </li>
                <li class="foot-1"><p><em class="fa-solid fa-location-dot"></em> <img src={i3} alt=''/>  some where in world  </p> </li>
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
                <em class="fa-brands fa-facebook">  <img src={Button} alt=""/>  </em>
                <em class="fa-brands fa-twitter">  <img src={Button1} alt=''/>  </em>
                <em class="fa-brands fa-linkedin">  <img src={Button2} alt=''/>  </em> 
              </ul>
            </div>
            
          </div>
        </div>
      </footer>  

        </div>
    );
}
export default Contact;