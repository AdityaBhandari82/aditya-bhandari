import React from 'react';
import Button from "./Button.png";
import Button1 from "./Button (1).png";
import Button2 from "./Button (2).png";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import Logo7 from "./Logo (7).png"
import adi from "./Adi.png";
const SignUp =() =>
{
    return(
        <div>
            
            <div className="row ">
    
    
    <div className="container my-5 col-6 col-md-8 col-lg-6">
      <h2 className="text-center fw-bold mb-3">Students Testimonials</h2>
      <p className="text-center text-muted mb-4">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
        Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
        senectus in.
      </p>
      <div className="card mx-auto shadow-sm" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <p className="card-text">
            The web design course provided a solid foundation for me. The instructors were
            knowledgeable and supportive, and the interactive learning environment was engaging. I
            highly recommend it!
          </p>
        </div>
        <div className="card-footer d-flex align-items-center">
          <img
            src={adi}
            alt="Profile"
            className="rounded-circle me-3"
          />
          <div>
            <strong>Sarah L</strong>
          </div>
          <button className="btn btn-outline-primary ms-auto">Read More</button>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-light border me-2">
          <i className="bi bi-arrow-left"></i>
        </button>
        <button className="btn btn-light border">
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  





    <div className="container my-5 col-6 col-md-8 col-lg-6">
      <div className="card mx-auto shadow p-4" style={{ maxWidth: "400px" }}>
        <h2 className="text-center fw-bold">Sign Up</h2>
        <p className="text-center text-muted mb-4">
          Create an account to unlock exclusive features.
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="Full Name" className="form-label">Full Name</label>
            <input type="Full Name" className="form-control" id="Full Name" placeholder="Enter your Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your Email" />

            <div className=" my-3">
              <label htmlFor="Password" className="from label">Password</label>
              <input type="Password" className="form-control" id="Password" placeholder="Enter your Password" />
                
                 <i className="bi bi-eye"></i>
              
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              {/* <input type="checkbox" id="rememberMe" />{" "} */}
              <p>I agree with Terms of use
               and Privacy</p>
            </div>
            {/* <a href="/" className="text-decoration-none">Forgot Password?</a> */}
          </div>
          <button className="btn btn-primary w-100 mb-3">Sign Up</button>
          <div className="text-center mb-3">OR</div>
          <button className="btn btn-outline-secondary w-100">
            <i className="bi bi-google"></i> Sign Up with Google
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? {" "}
          <a href="/" className="text-decoration-none">Login</a>
        </p>
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
export default SignUp;