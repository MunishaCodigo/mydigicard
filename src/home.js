import React, { Component } from 'react';


class Home extends Component {
  render() {

      return (
<div className="page new-skin">

		<div className="preloader">
			<div className="centrize full-width">
				<div className="vertical-center">
					<div className="spinner">
						<div className="double-bounce1"></div>
						<div className="double-bounce2"></div>
					</div>
				</div>
			</div>
		</div>

		<div className="background gradient">
			<ul className="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
		</div>

		<div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">


			<header className="header">

				
				<div className="profile">
					<div className="title">Ryan Adlard</div>
					<div className="subtitle subtitle-typed">
						<div className="typing-title">
							<p>Web Designer</p>
							<p>Developer</p>
							<p>Freelancer</p>
						</div>
					</div>
				</div>

				
				<a href="#" className="menu-btn"><span></span></a>

			
				<div className="top-menu">
					<ul>
						<li className="active">
							<a href="#about-card">
								<span className="icon ion-person"></span>
								<span className="link">About</span>
							</a>
						</li>
						<li>
							<a href="#resume-card">
								<span className="icon ion-android-list"></span>
								<span className="link">Resume</span>
							</a>
						</li>
						<li>
							<a href="#works-card">
								<span className="icon ion-paintbrush"></span>
								<span className="link">Works</span>
							</a>
						</li>
						<li>
							<a href="#blog-card">
								<span className="icon ion-chatbox-working"></span>
								<span className="link">Blog</span>
							</a>
						</li>
						<li>
							<a href="#contacts-card">
								<span className="icon ion-at"></span>
								<span className="link">Contact</span>
							</a>
						</li>
					</ul>
				</div>

			</header>


			<div className="card-started" id="home-card">

				<div className="profile no-photo">

				
					<div className="slide"></div>

					<div className="title">Ryan Adlard</div>
				
					<div className="subtitle subtitle-typed">
						<div className="typing-title">
							<p>Web Designer</p>
							<p>Developer</p>
							<p>Freelancer</p>
						</div>
					</div>

				
					<div className="social">
						<a target="_blank" href="https://dribbble.com/"><span className="fa fa-dribbble"></span></a>
						<a target="_blank" href="https://twitter.com/"><span className="fa fa-twitter"></span></a>
						<a target="_blank" href="https://github.com/"><span className="fa fa-github"></span></a>
						<a target="_blank" href="https://www.spotify.com/"><span className="fa fa-spotify"></span></a>
						<a target="_blank" href="https://stackoverflow.com/"><span className="fa fa-stack-overflow"></span></a>
					</div>
					
				
					<div className="lnks">
						<a href="#" className="lnk">
							<span className="text">Download CV</span>
						</a>
						<a href="#" className="lnk discover">
							<span className="text">Contact Me</span>
						</a>
					</div>

				</div>

			</div>


			<div className="card-inner animated active" id="about-card">
				<div className="card-wrap">


					<div className="content about">

						<div className="title">About Me</div>

						<div className="row">
							<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div className="text-box">
									<p>
										I am Ryan Adlard, web designer from USA, California. I have rich experience in 
										web site design and building and customization, also I am good at wordpress. 
										I love to talk with you about our unique.
									</p>
								</div>
							</div>
							<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div className="info-list">
									<ul>
										<li><strong>Age . . . . .</strong> 24</li>
										<li><strong>Residence . . . . .</strong> USA</li>
										<li><strong>Freelance . . . . .</strong> Available</li>
										<li><strong>Address . . . . .</strong> California, USA</li>
									</ul>
								</div>
							</div>
							<div className="clear"></div>
						</div>

					</div>


					<div className="content services">

						<div className="title">My Services</div>

					
						<div className="row service-items border-line-v">
							
							<div className="col col-d-6 col-t-6 col-m-12 border-line-h">
								<div className="service-item">
									<div className="icon">
										<span className="fa fa-code"></span>
									</div>
									<div className="name">
										<span >
										Web Development								</span>
									</div>
									<div className="desc">
										<div >
											<p>Modern and mobile-ready website that will help you reach all of your marketing.</p>
										</div>
									</div>
								</div>
							</div>
						
            
							<div className="col col-d-6 col-t-6 col-m-12 border-line-h">
								<div className="service-item">
									<div className="icon">
										<span className="fa fa-music"></span>
									</div>
									<div className="name">
										<span >
										Music Writing								</span>
									</div>
									<div className="desc">
										<div >
											<p>Music copying, writing, creating, transcription, arranging and composition services.</p>
										</div>
									</div>
								</div>
							</div>
					
							<div className="col col-d-6 col-t-6 col-m-12 border-line-h">
								<div className="service-item">
									<div className="icon">
										<span className="fa fa-buysellads"></span>
									</div>
									<div className="name">
										<span >
										Advetising								</span>
									</div>
									<div className="desc">
										<div >
											<p>Advertising services include television, radio, print, mail, and web apps.</p>
										</div>
									</div>
								</div>
							</div>
						
							<div className="col col-d-6 col-t-6 col-m-12 border-line-h">
								<div className="service-item">
									<div className="icon">
										<span className="fa fa-gamepad"></span>
									</div>
									<div className="name">
										<span >
										Game Development								</span>
									</div>
									<div className="desc">
										<div >
											<p>Developing memorable and unique mobile android, ios and video games.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="clear"></div>

					</div>

	
					<div className="content pricing">

				
						<div className="title">Pricing</div>

						<div className="row pricing-items">

							<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div className="pricing-item">
									<div className="icon"><i className="fa fa-battery-half"></i></div>
									<div className="name">Basic</div>
									<div className="amount">
										<span className="dollar">$</span>
										<span className="number">22</span>
										<span className="period">hour</span>
									</div>
									<div className="feature-list">
										<ul>
											<li>Web Development</li>
											<li>Advetising</li>
											<li>Game Development</li>
											<li className="disable">Music Writing</li>
											<li className="disable">Photography <strong>new</strong></li>
										</ul>
									</div>
									<div className="lnks">
										<a href="#" className="lnk">
											<span className="text">Buy Basic</span>
										</a>
									</div>
								</div>
							</div>

							<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div className="pricing-item">
									<div className="icon"><i className="fa fa-battery-full"></i></div>
									<div className="name">Pro</div>
									<div className="amount">
										<span className="dollar">$</span>
										<span className="number">48</span>
										<span className="period">hour</span>
									</div>
									<div className="feature-list">
										<ul>
											<li>Web Development</li>
											<li>Advetising</li>
											<li>Game Development</li>
											<li>Music Writing</li>
											<li>Photography <strong>new</strong></li>
										</ul>
									</div>
									<div className="lnks">
										<a href="#" className="lnk">
											<span className="text">Buy Pro</span>
										</a>
									</div>
								</div>
							</div>

							<div className="clear"></div>
						</div>

					</div>


					<div className="content fuct">


						<div className="title">Fun Fact</div>

		
						<div className="row fuct-items">

				
							<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div className="fuct-item">
									<div className="icon"><span className="fa fa-music"></span></div>
									<div className="name">80 Albumes Listened</div>
								</div>
							</div>

		
							<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div className="fuct-item">
									<div className="icon"><span className="fa fa-trophy"></span></div>
									<div className="name">15 Awards Won</div>
								</div>
							</div>

					
							<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div className="fuct-item">
									<div className="icon"><span className="fa fa-coffee"></span></div>
									<div className="name">1 000 Cups of coffee</div>
								</div>
							</div>

							<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div className="fuct-item">
									<div className="icon"><span className="fa fa-flag"></span></div>
									<div className="name">10 Countries Visited</div>
								</div>
							</div>

							<div className="clear"></div>
						</div>

					</div>


					<div className="content clients">

						<div className="title">Clients</div>

						<div className="row client-items">

				
							<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div className="client-item">
									<div className="image">
										<a target="_blank" href="https://www.google.com">
											<img src="images/clients/client_1.png" alt=""></img>
										</a>
									</div>
								</div>
							</div>

			
							<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div className="client-item">
									<div className="image">
										<a target="_blank" href="https://www.google.com">
											<img src="images/clients/client_2.png" alt="" ></img>
										</a>
									</div>
								</div>
							</div>

							<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div className="client-item">
									<div className="image">
										<a target="_blank" href="https://www.google.com">
											<img src="images/clients/client_3.png" alt="" ></img>
										</a>
									</div>
								</div>
							</div>

				
							<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div className="client-item">
									<div className="image">
										<a target="_blank" href="https://www.google.com">
											<img src="images/clients/client_4.png" alt="" ></img>
										</a>
									</div>
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
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.							
										</div>
									</div>
									<div className="user">
										<div className="img">
											<img src="images/profile.png" alt="Ryan Adlard" ></img>
										</div>
										<div className="info">
											<div className="name">Ryan Adlard</div>
											<div className="company">Web Designer</div>
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


			<div className="card-inner" id="resume-card">
				<div className="card-wrap">

				
					<div className="content resume">

				
						<div className="title">Resume</div>

						<div className="row">

							<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div className="resume-title border-line-h">
									<div className="icon"><i className="fa fa-briefcase"></i></div>
									<div className="name">Experience</div>
								</div>
								<div className="resume-items">
									<div className="resume-item border-line-h active">
										<div className="date">2013 - Present</div>
										<div className="name">Art Director</div>
										<div className="company">Facebook Inc.</div>
										<p>
											Collaborate with creative and development teams on the execution of ideas.
										</p>
									</div>
									<div className="resume-item border-line-h">
										<div className="date">2011 - 2012</div>
										<div className="name">Front-end Developer</div>
										<div className="company">Google Inc.</div>
										<p>
											Monitored technical aspects of the front-end delivery for several projects.
										</p>
									</div>
									<div className="resume-item">
										<div className="date">2009 - 2010</div>
										<div className="name">Senior Developer</div>
										<div className="company">Abc Inc.</div>
										<p>
											Optimize website performance using latest technology.
										</p>
									</div>
								</div>
							</div>

						
            
							<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div className="resume-title border-line-h">
									<div className="icon"><i className="fa fa-university"></i></div>
									<div className="name">Education</div>
								</div>
								<div className="resume-items">
									<div className="resume-item border-line-h">
										<div className="date">2006 - 2008</div>
										<div className="name">Art University</div>
										<div className="company">New York</div>
										<p>
											Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri
										</p>
									</div>
									<div className="resume-item border-line-h">
										<div className="date">2005 - 2006</div>
										<div className="name">Programming Course</div>
										<div className="company">Paris</div>
										<p>
											Coursework - Git, WordPress, Javascript, iOS, Android.
										</p>
									</div>
									<div className="resume-item">
										<div className="date">2004 - 2005</div>
										<div className="name">Web Design Course</div>
										<div className="company">London</div>
										<p>
											Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript
										</p>
									</div>
								</div>
							</div>

							<div className="clear"></div>
						</div>

					</div>

					<div className="content skills">

				
						<div className="title">My Skills</div>
					
			
						<div className="row">
						
		
							<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div className="skills-list">
									<div className="skill-title border-line-h">
										<div className="icon"><i className="fa fa-paint-brush"></i></div>
										<div className="name">Design</div>
									</div>
									<ul>
										<li className="border-line-h"> 
											<div className="name">Web Design</div>
											<div className="progress">
												<div className="percentage" ></div>
											</div>
										</li>
										<li className="border-line-h"> 
											<div className="name">Write Music</div>
											<div className="progress">
												<div className="percentage" ></div>
											</div>
										</li>
										<li className="border-line-h"> 
											<div className="name">Photoshop</div>
											<div className="progress">
												<div className="percentage" ></div>
											</div>
										</li>
										<li>
											<div className="name">Graphic Design</div>
											<div className="progress">
												<div className="percentage"></div>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div className="skills-list dotted">
									<div className="skill-title border-line-h">
										<div className="icon"><i className="fa fa-flag"></i></div>
										<div className="name">Languages</div>
									</div>
									<ul>
										<li className="border-line-h"> 
											<div className="name">English</div>
											<div className="progress">
												<div className="percentage" ></div>
											</div>
										</li>
										<li className="border-line-h"> 
											<div className="name">German</div>
											<div className="progress">
												<div className="percentage" ></div>
											</div>
										</li>
										<li className="border-line-h"> 
											<div className="name">Italian</div>
											<div className="progress">
												<div className="percentage" ></div>
											</div>
										</li>
										<li>
											<div className="name">French</div>
											<div className="progress ">
												<div className="percentage" ></div>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div className="skills-list circles">
									<div className="skill-title border-line-h">
										<div className="icon"><i className="fa fa-code"></i></div>
										<div className="name">Coding</div>
									</div>
									<ul>
										<li> 
											<div className="name">WordPress</div>
											<div className="progress p90">
												<span>90%</span>
											</div>
										</li>
										<li> 
											<div className="name">PHP / MYSQL</div>
											<div className="progress p75">
												<span>75%</span>
											</div>
										</li>
										<li> 
											<div className="name">Angular / JavaScript</div>
											<div className="progress p85">
												<span>85%</span>
											</div>
										</li>
										<li> 
											<div className="name">HTML / CSS</div>
											<div className="progress p95">
												<span>95%</span>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div className="skills-list list">
									<div className="skill-title border-line-h">
										<div className="icon"><i className="fa fa-list"></i></div>
										<div className="name">Knowledge</div>
									</div>
									<ul>
										<li> 
											<div className="name">Website hosting</div>
										</li>
										<li> 
											<div className="name">iOS and android apps</div>
										</li>
										<li> 
											<div className="name">Create logo design</div>
										</li>
										<li> 
											<div className="name">Design for print</div>
										</li>
										<li> 
											<div className="name">Modern and mobile-ready</div>
										</li>
										<li> 
											<div className="name">Advertising services include</div>
										</li>
										<li> 
											<div className="name">Graphics and animations</div>
										</li>
										<li> 
											<div className="name">Search engine marketing</div>
										</li>
									</ul>
								</div>
							</div>
							
							<div className="clear"></div>
						</div>
						
					</div>


					<div className="content testimonials">

				
						<div className="title">Testimonials</div>

				
						<div className="row testimonials-items">

						
							<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
								<div className="revs-carousel default-revs">
									<div className="owl-carousel">
										<div className="item">
											<div className="revs-item">
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												</div>
												<div className="user">
													<div className="img"><img src="images/man1.jpg" alt="" ></img></div>
													<div className="info">
														<div className="name">Helen Floyd</div>
														<div className="company">Art Director</div>
													</div>
													<div className="clear"></div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="revs-item">
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												</div>
												<div className="user">
													<div className="img"><img src="images/man1.jpg" alt="" ></img></div>
													<div className="info">
														<div className="name">Robert Chase</div>
														<div className="company">CEO</div>
													</div>
													<div className="clear"></div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="revs-item">
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												</div>
												<div className="user">
													<div className="img"><img src="images/man1.jpg" alt="" ></img></div>
													<div className="info">
														<div className="name">Helen Floyd</div>
														<div className="company">Art Director</div>
													</div>
													<div className="clear"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="clear"></div>
						</div>

					</div>

				</div>
			</div>


			<div className="card-inner" id="works-card">
				<div className="card-wrap">

			
					<div className="content works">

			
						<div className="title">Recent Works</div>

						<div className="filter-menu filter-button-group">
							<div className="f_btn active">
								<label><input type="radio" name="fl_radio" value="grid-item" />All</label>
							</div>
							<div className="f_btn">
								<label><input type="radio" name="fl_radio" value="photo" />Image</label>
							</div>
							<div className="f_btn">
								<label><input type="radio" name="fl_radio" value="gallery" />Gallery</label>
							</div>
							<div className="f_btn">
								<label><input type="radio" name="fl_radio" value="video" />Video</label>
							</div>
							<div className="f_btn">
								<label><input type="radio" name="fl_radio" value="music" />Music</label>
							</div>
							<div className="f_btn">
								<label><input type="radio" name="fl_radio" value="design" />Content</label>
							</div>
						</div>

					
						<div className="row grid-items border-line-v">

					
							<div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
								<div className="box-item">
									<div className="image">
										<a href="images/works/work1.jpg" className="has-popup-image">
											<img src="images/works/work1.jpg" alt="" ></img>
											<span className="info">
												<span className="ion ion-image"></span>
											</span>
										</a>
									</div>
									<div className="desc">
										<a href="images/works/work1.jpg" className="name has-popup-image">Motorcycle Helmet</a>
										<div className="category">Image</div>
									</div>
								</div>
							</div>

				
							<div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
								<div className="box-item">
									<div className="image">
										<a href="https://vimeo.com/97102654" className="has-popup-video">
											<img src="images/works/work2.jpg" alt="" ></img>
											<span className="info">
												<span className="ion ion-videocamera"></span>
											</span>
										</a>
									</div>
									<div className="desc">
										<a href="https://vimeo.com/97102654" className="name has-popup-video">Minimalism Shapes</a>
										<div className="category">Video</div>
									</div>
								</div>
							</div>

				

			
							

							<div className="clear"></div>
						</div>

					</div>

				</div>
			</div>


			<div className="card-inner blog" id="blog-card">
				<div className="card-wrap">

					<div className="content blog">

				
						<div className="title">
							<span >Blog</span>
						</div>

					
						<div className="row border-line-v">
		
							<div className="col col-d-6 col-t-6 col-m-12">
								<div className="box-item">
									<div className="image">
										<a href="blog-post-new.html">
											<img src="images/blog/blog1.jpg" alt="By spite about do of allow" ></img>
											<span className="info">
												<span className="ion ion-document-text"></span>
											</span>
										</a>
									</div>
									<div className="desc">
										<a href="blog-post-new.html">
											<span className="date">April 28, 2020</span>
										</a>
										<a href="blog-post-new.html" className="name">By spite about do of allow</a>
										<div className="text">
											<p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos&#8230;</p>
										</div>
									</div>
								</div>
							</div>
					
							<div className="col col-d-6 col-t-6 col-m-12">
								<div className="box-item">
									<div className="image">
										<a href="blog-post-new.html">
											<img src="images/blog/blog2.jpg" alt="By spite about do of allow" ></img>
											<span className="info">
												<span className="ion ion-document-text"></span>
											</span>
										</a>
									</div>
									<div className="desc">
										<a href="blog-post-new.html">
											<span className="date">April 28, 2020</span>
										</a>
										<a href="blog-post-new.html" className="name">By spite about do of allow</a>
										<div className="text">
											<p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos&#8230;</p>
										</div>
									</div>
								</div>
							</div>
						
							<div className="col col-d-6 col-t-6 col-m-12">
								<div className="box-item">
									<div className="image">
										<a href="blog-post-new.html">
											<img src="images/blog/blog3.jpg" alt="By spite about do of allow" ></img>
											<span className="info">
												<span className="ion ion-document-text"></span>
											</span>
										</a>
									</div>
									<div className="desc">
										<a href="blog-post-new.html">
											<span className="date">April 28, 2020</span>
										</a>
										<a href="blog-post-new.html" className="name">By spite about do of allow</a>
										<div className="text">
											<p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos&#8230;</p>
										</div>
									</div>
								</div>
							</div>
					
							<div className="col col-d-6 col-t-6 col-m-12">
								<div className="box-item">
									<div className="image">
										<a href="blog-post-new.html">
											<img src="images/blog/blog1.jpg" alt="By spite about do of allow" ></img>
											<span className="info">
												<span className="ion ion-document-text"></span>
											</span>
										</a>
									</div>
									<div className="desc">
										<a href="blog-post-new.html">
											<span className="date">April 28, 2020</span>
										</a>
										<a href="blog-post-new.html" className="name">By spite about do of allow</a>
										<div className="text">
											<p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos&#8230;</p>
										</div>
									</div>
								</div>
							</div>
							<div className="clear"></div>
						</div>

						<div className="pager">
							<nav className="navigation pagination">
								<div className="nav-links">
									<span className="page-numbers current">1</span>
									<a className="page-numbers" href="#">2</a>
									<a className="next page-numbers" href="#">Next</a>
								</div>
							</nav>
						</div>

					</div>

				</div>
			</div>


			<div className="card-inner contacts" id="contacts-card">
				<div className="card-wrap">


					<div className="content contacts">

						<div className="title">Get in Touch</div>

				
						<div className="row">
							<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
								<div className="map" id="map"></div>
								<div className="info-list">
									<ul>
										<li><strong>Address . . . . .</strong> California, USA</li>
										<li><strong>Email . . . . .</strong> adlard@example.com</li>
										<li><strong>Phone . . . . .</strong> +123 654 78900</li>
										<li><strong>Freelance . . . . .</strong> Available</li>
									</ul>
								</div>
							</div>
							<div className="clear"></div>
						</div>

					</div>

					<div className="content contacts">

						<div className="title">Contact Form</div>



					</div>

				</div>
			</div>

		</div>

		<div className="s_overlay"></div>
		<div className="content-sidebar">
			<div className="sidebar-wrap search-form">
				<aside id="secondary" className="widget-area">
	
					<section className="widget widget_recent_entries">
						<h2 className="widget-title">
							<span className="widget-title-span"><span className="first-word">Recent</span> Posts</span>
						</h2>
						<ul>
							<li>
								<a href="#">Creativity Is More Than</a>
							</li>
							<li>
								<a href="#">Designing the perfect</a>
							</li>
							<li>
								<a href="#">Music Player Design</a>
							</li>
							<li>
								<a href="#">A Song And Dance Act</a>
							</li>
							<li>
								<a href="#">By spite about do of allow</a>
							</li>
						</ul>
					</section>
					<section className="widget widget_recent_comments">
						<h2 className="widget-title">
							<span className="widget-title-span"><span className="first-word">Recent</span> Comments</span>
						</h2>
						<ul>
							<li className="recentcomments">
								<span className="comment-author-link">JOHN SMITH</span> on <a href="#">Creativity Is More Than</a>
							</li>
							<li className="recentcomments">
								<span className="comment-author-link">ADAM SMITH</span> on <a href="#">Creativity Is More Than</a>
							</li>
							<li className="recentcomments">
								<span className="comment-author-link">admin</span> on <a href="#">Designing the perfect</a>
							</li>
							<li className="recentcomments">
								<span className="comment-author-link">James</span> on <a href="#">Designing the perfect</a>
							</li>
						</ul>
					</section>
					<section className="widget widget_archive">
						<h2 className="widget-title">
							<span className="widget-title-span">
								<span className="first-letter">Archives</span>
							</span>
						</h2>
						<ul>
							<li>
								<a href="#">November 2018</a>
							</li>
						</ul>
					</section>
					<section className="widget widget_categories">
						<h2 className="widget-title">
							<span className="widget-title-span"><span className="first-letter">Categories</span></span>
						</h2>
						<ul>
							<li className="cat-item cat-item-2">
								<a href="#">Design</a>
							</li>
							<li className="cat-item cat-item-3">
								<a href="#">Music</a>
							</li>
						</ul>
					</section>
					<section className="widget widget_meta">
						<h2 className="widget-title">
							<span className="widget-title-span"><span className="first-letter">Meta</span></span>
						</h2>
						<ul>
							<li><a href="#">Log in</a></li>
							<li><a href="#">Entries feed</a></li>
							<li><a href="#">Comments feed</a></li>
							<li><a href="#">WordPress.org</a></li>
						</ul>
					</section>
				</aside>
			</div>
			<span className="close"></span>
		</div>
  </div>
	

  );
  }
}
  
export default Home;