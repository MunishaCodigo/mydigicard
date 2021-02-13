import React, { Component } from 'react';

class About extends Component {
  render() {

    return (

      <div className="card-inner animated active" id="about-card">
      <div className="card-wrap">
         
         <div className="content about">
            <div className="title">About Me</div>

            <div className="row">
               <div className="col col-sm-12 border-line-v">
                  <div className="text-box">
                     <p>
                     I am Munisha Choudhary, a fullstack web developer at Digi Publishing, Trondheim. I extensively use HTML, CSS, and JavaScript to develop user friendly websites. On the backend, I work with PHP and mySQL. In addition, I have also worked with Bootstrap and Laravel frameworks in my work and I have recently started using React.
                     </p>
                  </div>
               </div>

               <div className="clear"></div>
            </div>

         </div>
         <div className="content lnks show-mobile">
      <a href="./docs/Munisha_cv.pdf" className="lnk" download>
         <span className="text">Download CV</span>
         <span className="ion ion-archive"></span>
      </a>
      <a href="./docs/Munisha_cover_letter.pdf" className="lnk discover" download>
         <span className="text">Cover Letter</span>
         <span className="ion ion-archive"></span>
      </a>
   </div>

         <div className="content services">

						
						<div className="title">My Services</div>

						
						<div className="row service-items border-line-v">
							
							<div className="col col-md-6 col-sm-12 border-line-h">
								<div className="service-item">
									<div className="icon">
										<span className="fa fa-html5"></span>
									</div>
									<div className="name">
										<span >
										Front-end								</span>
									</div>
									<div className="desc">
										<div >
											<p>Modern and mobile-ready website that will help you reach all of your marketing.</p>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col col-md-6 col-sm-12 border-line-h">
								<div className="service-item">
									<div className="icon">
										<span className="fa fa-code"></span>
									</div>
									<div className="name">
										<span >
										Back-End								</span>
									</div>
									<div className="desc">
										<div >
											<p>UI/UX focus on the user, frontend focus on the settings of the user, and backend focus on the data.</p>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col col-md-6 col-sm-12 border-line-h">
								<div className="service-item">
									<div className="icon">
										<span className="fa fa-wordpress"></span>
									</div>
									<div className="name">
										<span >
										WordPress Development								</span>
									</div>
									<div className="desc">
										<div >
											<p>WordPress development services improve business websites.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col col-md-6 col-sm-12 border-line-h">
								<div className="service-item">
									<div className="icon">
										<span className="fa fa-server"></span>
									</div>
									<div className="name">
										<span >
										Laravel Application								</span>
									</div>
									<div className="desc">
										<div >
											<p>Laravel eases common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching.</p>								
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="clear"></div>

					</div>

         <div className="content fuct">

      
            <div className="title">Fun Fact</div>

      
            <div className="row fuct-items">

          
               <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="fuct-item">
                     <div className="icon"><span className="fa fa-music"></span></div>
                     <div className="name">Is all needed</div>
                  </div>
               </div>

     
               <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="fuct-item">
                     <div className="icon"><span className="fa fa-cutlery"></span></div>
                     <div className="name">Food lover</div>
                  </div>
               </div>

               <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="fuct-item">
                     <div className="icon"><span className="fa fa-coffee"></span></div>
                     <div className="name">1 000+ Cups of coffee</div>
                  </div>
               </div>

               <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="fuct-item">
                     <div className="icon"><span className="fa fa-flag"></span></div>
                     <div className="name">7 Countries Visited</div>
                  </div>
               </div>

               <div className="clear"></div>
            </div>

         </div>

         <div className="content quote">

       
            <div className="title">
               <span >Quote</span>
            </div>

            <div className="row">
               <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                  <div className="revs-item">
                     <div className="text">
                        <div >
                        I won't be impressed with technology until I can download food                        </div>
                     </div>
                     <div className="user">
                        <div className="img">
                           <img src="images/muns_photo.jpg" alt="Munisha" />
                        </div>
                        <div className="info">
                           <div className="name">Munisha Choudhary</div>
                           <div className="company">Web Developer</div>
                        </div>
                        <div className="clear"></div>
                     </div>
                  </div>
               </div>
               <div className="clear"></div>
            </div>

         </div>

      </div>
   </div>
    );
  }
}

export default About;
