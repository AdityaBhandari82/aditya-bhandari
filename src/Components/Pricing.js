import React from 'react';
import Button from "./Button.png";
import Button1 from "./Button (1).png";
import Button2 from "./Button (2).png";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import Logo7 from "./Logo (7).png"
const  Pricing = () =>
{
    return(
        <div>
           
           <div className="container my-5  " style={{ backgroundColor:"whitesmoke"}}>
          <div className="row">
            <div className="col-5 ">
              <h1 className="fw-bold text-center my-5">Our Pricing</h1>
            </div>
            <div className="col-7 text-center mt-3">
              <p className="text-muted">
              Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your
               needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an
                individual looking to enhance your skills or a business seeking professional development solutions
              , we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
              </p>
            </div>
          </div>
        </div>


        <div class="container py-5 my-5" >
        
        <div class="text-left mb-5">
          <h2 class="fw-bold">Our Pricing</h2>
          <p class="text-muted">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.</p>
          <div class="text-end">
            <button class="btn btn-warning me-2">Monthly</button>
            <button class="btn btn-light border">Yearly</button>
          </div>
        </div>
    
        
        <div class="row g-4">
          
          <div class="col-md-6">
            <div class="card shadow-sm border-0">
              <div class="card-body text-center" style={{backgroundcolor: "whitesmoke"}}>
                <h6 class="fw-bold text-uppercase text-warning">Free Plan</h6>
                <h2 class="fw-bold display-4">$0<span class="fs-4 fw-light">/month</span></h2>
                <hr/>
                <h6 class="fw-bold mb-3">Available Features</h6>
                <ul class="list-unstyled text-start">
                  <li class="mb-4"><em class="bi bi-check-circle text-warning me-2"></em> Access to selected free courses</li>
                  <li class="mb-4"><em class="bi bi-check-circle text-warning me-2"></em> Limited course materials and resources</li>
                  <li class="mb-4"><em class="bi bi-check-circle text-warning me-2"></em> Basic community support</li>
                  <li class="mb-4"><em class="bi bi-x-circle text-danger me-2"></em> No certification upon completion</li>
                  <li class="mb-4"><em class="bi bi-x-circle text-danger me-2"></em> Ad-supported platform</li>
                  <li class="mb-4"><em class="bi bi-x-circle text-danger me-2"></em> Access to exclusive Pro Plan forums</li>
                  <li><em class="bi bi-x-circle text-danger me-2"></em> Early access to new courses and updates</li>
                </ul>
                <button class="btn btn-warning w-100">Get Started</button>
              </div>
            </div>
          </div>
    
          
          <div class="col-md-6 " >
            <div class="card shadow-sm border-0">
              <div class="card-body text-center " style={{backgroundcolor: "whitesmoke"}}>
                <h6 class="fw-bold text-uppercase text-warning">Pro Plan</h6>
                <h2 class="fw-bold display-4">$79<span class="fs-4 fw-light">/month</span></h2>
                <hr/>
                <h6 class="fw-bold mb-3">Available Features</h6>
                <ul class="list-unstyled text-start">
                  <li class="mb-4"><em class="bi bi-check-circle text-warning me-2"></em> Unlimited access to all courses</li>
                  <li class="mb-4"><em class="bi bi-check-circle text-warning me-2"></em> Unlimited course materials and resources</li>
                  <li class="mb-4"><em class="bi bi-check-circle text-warning me-2"></em> Priority support from instructors</li>
                  <li class="mb-4"><em class="bi bi-check-circle text-warning me-2"></em> Course completion certificates</li>
                  <li class="mb-4"><em class="bi bi-check-circle text-warning me-2"></em> Ad-free experience</li>
                  <li class="mb-4"><em class="bi bi-check-circle text-warning me-2"></em> Access to exclusive Pro Plan forums</li>
                  <li><em class="bi bi-check-circle text-warning me-2"></em> Early access to new courses and updates</li>
                </ul>
                <button class="btn btn-warning w-100">Get Started</button>
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
export default Pricing;