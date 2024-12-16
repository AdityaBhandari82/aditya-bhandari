import React from 'react';
// import Icon from "./Icon.png";
// import Logo from "./Logo.png";
import Logo1 from "./Logo1.png";
import Logo2 from "./Logo2.png";
import Logo3 from "./Logo3.png";
import Logo4 from "./Logo4.png";
import Logo5 from "./Logo5.png";
import Logo6 from "./Logo6.png"
import Vector from "./Vector.png";
import "bootstrap/dist/css/bootstrap.css"
import Container from "./Container.png";
import Image from "./Image.png";
import Image1 from "./Image1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";
import Image4 from "./Image4.png";
import Image5 from "./Image5.png";
import Image6 from "./Image6.png";
import Button from "./Button.png";
import Button1 from "./Button (1).png";
import Button2 from "./Button (2).png";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import Logo7 from "./Logo (7).png"
import adi from "./Adi.png";
import aditya from "./Aditya.png";
import titu from "./Titu.png";
function Home()

{
  return(
  <div className='master'>

<section class="text-center py-5 bg-light">
        <div class="container">
            
            <h1 class="mb-3">
              <img src={Logo7} alt="Logo" class="img-fluid" style={{backgroundColor: "orange",height:"35px",width:"auto"}}/>
              <span class="highlight-text">Unlock</span> Your Creative Potential
            </h1>
            <p class="fs-5 text-muted">
                with Online Design and Development Courses.
            </p>
            <p class="text-muted">
                Learn from Industry Experts and Enhance Your Skills.
            </p>
            
            <div class="mt-4">
                <a href="Courses.html" class="btn btn-warning btn-custom text-white me-3">Explore Courses</a>
                <a href="pricing.html" class="btn btn-outline-secondary btn-custom">View Pricing</a>
            </div>
        </div>
    </section>

<section class="logo-section ">
        <div class="container d-flex justify-content-center align-items-center flex-wrap">
             
            <div class=" d-flex align-items-center mx-2">
                <img src={Logo1} alt="Zapier" class="logo-item "/ >
            </div>
            <div class="logo-divider mx-1"></div>
            <div class="d-flex align-items-center mx-2">
                <img src={Vector} alt="Spotify" class="logo-item " />
            </div>
            <div class="logo-divider mx-1"></div>
            <div class="d-flex align-items-center mx-2">
                <img src={Logo2} alt="Zoom" class="logo-item "/>
            </div>
            <div class="logo-divider mx-1"></div>
            <div class="d-flex align-items-center mx-2">
                <img src={Logo3} alt="Amazon" class="logo-item "/ >
            </div>
            <div class="logo-divider mx-1"></div>
            <div class="d-flex align-items-center mx-2">
                <img src={Logo4} alt="Adobe" class="logo-item "/>
            </div>
            <div class="logo-divider mx-1"></div>
            <div class="d-flex align-items-center mx-2">
                <img src={Logo5} alt="Notion" class="logo-item "/ >
            </div>
            <div class="logo-divider mx-1"></div>
            <div class="d-flex align-items-center mx-2">
                <img src={Logo6} alt="Netflix" class="logo-item "/>
            </div>
        </div>
</section>

    <img src={Container}class="img-fluid" alt="..."/>

    <div class="container py-5">
        <div class="text mb-5">
            <h2>Benefits</h2>
            <p>lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit
                dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
    
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 p-2" style={{backgroundColor:"whitesmoke"}}>
            
            <div class="col ">
                <div class="card">
                    <h4>01</h4>
                    <h5>Flexible Learning Schedule</h5>
                    <p>Fit your coursework around your existing commitments and obligations.</p>
                    <div class="arrow-icon">
                        {/* <img src={Icon } alt="Icon"/> */}
                        </div>
                </div>
            </div>
            
            <div class="col">
                <div class="card">
                    <h4>02</h4>
                    <h5>Expert Instruction</h5>
                    <p>Learn from industry experts who have hands-on experience in design and development.</p>
                    <div class="arrow-icon">
                        {/* <img src="New folder/Icon (1).png" alt=""> */}
                    </div>
                </div>
            </div>
            
            <div class="col">
                <div class="card">
                    <h4>03</h4>
                    <h5>Diverse Course Offerings</h5>
                    <p>Explore a wide range of design and development courses covering various topics.</p>
                    <div class="arrow-icon">
                        {/* <img src="New folder/Icon (1).png" alt=""> */}
                        </div>
                </div>
            </div>
            
            <div class="col">
                <div class="card">
                    <h4>04</h4>
                    <h5>Updated Curriculum</h5>
                    <p>Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
                    <div class="arrow-icon">
                        {/* <img src="New folder/Icon (1).png" alt=""> */}
                        </div>
                </div>
            </div>
            
            <div class="col">
                <div class="card">
                    <h4>05</h4>
                    <h5>Practical Projects and Assignments</h5>
                    <p>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                    <div class="arrow-icon">
                        {/* <img src="New folder/Icon (1).png" alt=""> */}
                        </div>
                </div>
            </div>
            
            <div class="col">
                <div class="card">
                    <h4>06</h4>
                    <h5>Interactive Learning Environment</h5>
                    <p>Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
                    <div class="arrow-icon">
                        {/* <img src="New folder/Icon (1).png" alt=""> */}
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container py-5">
        
        <div class="text-left mb-5">
            <h2 class="fw-bold">Our Courses</h2>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.</p>
            <div class="text-end"><button class="btn btn-warning ">View All</button></div>
        </div>
        
        
        <div class="row row-cols-1 row-cols-md-2 g-4">
            
            <div class="col">
                <div class="course-card">
                    <img src={ Image} class="img-fluid" alt="Course 1"/>
                    <div class="p-3">
                        <div class="d-flex justify-content-between">
                            <span class="badge">4 Weeks</span>
                            <span class="badge">Beginner</span>
                            <span class="text-muted">By John Smith</span>
                        </div>
                        <h3 class="course-title mt-2">Web Design Fundamentals</h3>
                        <p class="text-muted">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                        <button class="btn btn-secondary w-100">Get it Now</button>
                    </div>
                </div>
            </div>
            
            <div class="col">
                <div class="course-card">
                    <img src={Image1} class="img-fluid" alt="Course 2"/>
                    <div class="p-3">
                        <div class="d-flex justify-content-between">
                            <span class="badge">6 Weeks</span>
                            <span class="badge">Intermediate</span>
                            <span class="text-muted">By Emily Johnson</span>
                        </div>
                        <h3 class="course-title mt-2">UI/UX Design</h3>
                        <p class="text-muted">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                        <button class="btn btn-secondary w-100">Get it Now</button>
                    </div>
                </div>
            </div>
            <div class="col">
            <div class="course-card">
                    <img src={Image2} class="img-fluid" alt="Course 2"/>
                    <div class="p-3">
                        <div class="d-flex justify-content-between">
                            <span class="badge">6 Weeks</span>
                            <span class="badge">Intermediate</span>
                            <span class="text-muted">By Emily Johnson</span>
                        </div>
                        <h3 class="course-title mt-2">UI/UX Design</h3>
                        <p class="text-muted">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                        <button class="btn btn-secondary w-100">Get it Now</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="course-card">
                    <img src={Image3} class="img-fluid" alt="Course 2"/>
                    <div class="p-3">
                        <div class="d-flex justify-content-between">
                            <span class="badge">6 Weeks</span>
                            <span class="badge">Intermediate</span>
                            <span class="text-muted">By Emily Johnson</span>
                        </div>
                        <h3 class="course-title mt-2">UI/UX Design</h3>
                        <p class="text-muted">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                        <button class="btn btn-secondary w-100">Get it Now</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="course-card">
                    <img src={Image4} class="img-fluid" alt="Course 2"/>
                    <div class="p-3">
                        <div class="d-flex justify-content-between">
                            <span class="badge">6 Weeks</span>
                            <span class="badge">Intermediate</span>
                            <span class="text-muted">By Emily Johnson</span>
                        </div>
                        <h3 class="course-title mt-2">UI/UX Design</h3>
                        <p class="text-muted">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                        <button class="btn btn-secondary w-100">Get it Now</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="course-card">
                    <img src={Image5} class="img-fluid" alt="Course 2"/>
                    <div class="p-3">
                        <div class="d-flex justify-content-between">
                            <span class="badge">6 Weeks</span>
                            <span class="badge">Intermediate</span>
                            <span class="text-muted">By Emily Johnson</span>
                        </div>
                        <h3 class="course-title mt-2">UI/UX Design</h3>
                        <p class="text-muted">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                        <button class="btn btn-secondary w-100">Get it Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container " >
        <div class="text-left mb-5">
            <h2 class="fw-bold">Our Courses</h2>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.</p>
            <div class="text-end"><button class="btn btn-warning ">View All</button></div>
        </div>

        
        <div class="row row-cols-1 row-cols-md-2 g-3">
          
          <div class="col">
            <div class="p-3" style={{backgroundcolor: "whitesmoke"}}>
              <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and
                supportive, and the interactive learning environment was engaging. I highly recommend it.
              </p>
              <div class="d-flex align-items-center flex-wrap">
                <div class="d-flex align-items-center">
                    <div className="img-fluid rounded-circle" >
                  <img src={Image6} alt="" width= {50} height={50}/>
                  </div>
                  <span class="ms-2">Sarah L</span>
                </div>
                <div class="ms-md-auto mt-3 mt-md-0">
                  <button class="btn btn-warning mx-3">Read Full Story</button>
                </div>
              </div>
            </div>
          </div>
          
          
          <div class="col">
            <div class="p-3" style={{backgroundcolor: "whitesmoke"}}>
              <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and
                supportive, and the interactive learning environment was engaging. I highly recommend it.
              </p>
              <div class="d-flex align-items-center flex-wrap">
                <div class="d-flex align-items-center">
                    <div className="img-fluid rounded-circle">
                  <img src={adi}  alt="" width={50} height= {50}/>
                  </div>
                  <span class="ms-2">Sarah L</span>
                </div>
                <div class="ms-md-auto mt-3 mt-md-0">=
                  <button class="btn btn-warning mx-3">Read Full Story</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3" style={{backgroundcolor: "whitesmoke"}}>
              <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and
                supportive, and the interactive learning environment was engaging. I highly recommend it.
              </p>
              <div class="d-flex align-items-center flex-wrap">
                <div class="d-flex align-items-center">
                    <div className="img-fluid rounded-circle" >
                  <img src={aditya} alt="" width= {50} height= {50}/>
                  </div>
                  <span class="ms-2">Sarah L</span>
                </div>
                <div class="ms-md-auto mt-3 mt-md-0">
                  <button class="btn btn-warning mx-3">Read Full Story</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3" style={{backgroundcolor: "whitesmoke"}}>
              <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and
                supportive, and the interactive learning environment was engaging. I highly recommend it.
              </p>
              <div class="d-flex align-items-center flex-wrap">
                <div class="d-flex align-items-center">
                    <div className="img-fluid rounded-circle">
                  <img src={titu}  alt="" width ={50} height ={50}/>
                  </div>
                  <span class="ms-2">Sarah L</span>
                </div>
                <div class="ms-md-auto mt-3 mt-md-0">
                  <button class="btn btn-warning mx-3">Read Full Story</button>
                </div>
              </div>
            </div>
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

    <div class="container my-5">
        <div class="row">
          
          <div class="col-md-4">
            <h2 class="fw-bold">Frequently Asked Questions</h2>
            <p>
              Still have any questions? Contact our Team via
              support@skillbridge.com
            </p>
            <button class="btn btn-outline-dark mb-4">See All FAQ's</button>
          </div>
          
          
          <div class="col-md-8">
            <div class="accordion" id="faqAccordion">
            
              <li class="mb-4 bg" > Can i enroll in multiple courses at once</li>
              <li class="mb-4" > Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</li>
              <li class="mb-4 bg" >Enrollment Process for Different Courses</li>
              <li class="mb-4 bg" > What kind of support can I expect from instructors?</li>
              <li class="mb-4 bg" >Are the courses self-paced or do they have specific start and end dates?</li>
              <li class="mb-4 bg" >Are there any prerequisites for the courses?</li>
              <li class="mb-4 bg" >Can I download the course materials for offline access?</li>
              
             
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
export default Home; 