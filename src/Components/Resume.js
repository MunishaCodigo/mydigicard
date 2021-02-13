import React, { Component } from 'react';
import $ from 'jquery';
class Resume extends Component {

  componentDidMount(){
    var skills_circles = $('.skills-list.circles .progress');
    if(skills_circles.length){
      skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
    }
  }


  render() {

    
  
    return (
      <div className="card-inner" id="resume-card">
      <div className="card-wrap">
        <div className="content resume">
          <div className="title">Resume</div>


          <div className="row">

            <div className="col col-md-6 col-sm-6 col-xs-12 border-line-v">
              <div className="resume-title border-line-h">
                <div className="icon"><i className="fa fa-briefcase"></i></div>
                <div className="name">Experience</div>
              </div>
              <div className="resume-items">
                <div className="resume-item border-line-h active">
                  <div className="date">2018 - Present</div>
                  <div className="name">Web Designer and Developer</div>
                  <div className="company">Digi Publishing, Trondheim</div>
                  <p>
                
                  Develop full stack web solutions for a variety of projects.
                  </p>
                </div>
                <div className="resume-item border-line-h">
                  <div className="date">2018 - 2018</div>
                  <div className="name">Full Stack Web Developer Intern</div>
                  <div className="company">Globuzzer, Sweden</div>
                  <p>
                  Collaborated with creative and development teams on the execution of ideas.
                  </p>
                </div>
                <div className="resume-item">
                  <div className="date">2016 - 2017</div>
                  <div className="name">Software Developer</div>
                  <div className="company">Global Voiced Ltd, UK</div>
                  <p>
                    Optimized website performance using latest technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="col col-md-6 col-sm-6 col-xs-12 border-line-v">
              <div className="resume-title border-line-h">
                <div className="icon"><i className="fa fa-university"></i></div>
                <div className="name">Education</div>
              </div>
              <div className="resume-items">
                <div className="resume-item border-line-h">
                  <div className="date">2017 - 2018</div>
                  <div className="name">Front-end web development</div>
                  <div className="company">Udacity</div>
                  <p>
                    Crash course sponsored by “Google Developer Challenge Scholarship”.
                  </p>
                </div>
                <div className="resume-item border-line-h">
                  <div className="date">2013 - 2015</div>
                  <div className="name">Master of Technology</div>
                  <div className="company">Banasthali University, India</div>
                  <p>
                    Masters program in computer science.
                  </p>
                </div>
                <div className="resume-item">
                  <div className="date">2008 - 2012</div>
                  <div className="name">Bachelore of technology</div>
                  <div className="company">Kurukshetra University, India</div>
                  <p>
                    Bachelors program in computer science.
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
          
           
            <div className="col col-md-6 col-sm-6 col-xs-12 border-line-v">
              <div className="skills-list">
                <div className="skill-title border-line-h">
                  <div className="icon"><i className="fa fa-paint-brush"></i></div>
                  <div className="name">Development</div>
                </div>
                <ul>
                  <li className="border-line-h"> 
                    <div className="name">Web Development</div>
                    <div className="progress">
                      <div className="percentage" style={{width:"95%"}}></div>
                    </div>
                  </li>
                  <li className="border-line-h"> 
                    <div className="name">Backend Development</div>
                    <div className="progress">
                      <div className="percentage" style={{width:"90%"}}></div>
                    </div>
                  </li>
                  <li className="border-line-h"> 
                    <div className="name">Website Optimisation</div>
                    <div className="progress">
                      <div className="percentage" style={{width:"92%"}}></div>
                    </div>
                  </li>
                  <li>
                    <div className="name">Photoshop</div>
                    <div className="progress">
                      <div className="percentage" style={{width:"70%"}}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          
            <div className="col col-md-6 col-sm-6 col-xs-12 border-line-v">
              <div className="skills-list dotted">
                <div className="skill-title border-line-h">
                  <div className="icon"><i className="fa fa-flag"></i></div>
                  <div className="name">Languages</div>
                </div>
                <ul>
                  <li className="border-line-h"> 
                    <div className="name">English</div>
                    <div className="progress">
                      <div className="percentage" style={{width:"85%"}}></div>
                    </div>
                  </li>
                  <li className="border-line-h"> 
                    <div className="name">Hindi</div>
                    <div className="progress">
                      <div className="percentage" style={{width:"95%"}}></div>
                    </div>
                  </li>

                </ul>
              </div>
            </div>

            <div className="col col-md-6 col-sm-6 col-xs-12 border-line-v">
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
                      <span>90%</span>
                    </div>
                  </li>
                  <li> 
                    <div className="name">React / JavaScript</div>
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

         
            <div className="col col-md-6 col-sm-6 col-xs-12 border-line-v">
              <div className="skills-list list">
                <div className="skill-title border-line-h">
                  <div className="icon"><i className="fa fa-list"></i></div>
                  <div className="name">Knowledge</div>
                </div>
                <ul>
                  <li> 
                    <div className="name">Website Design</div>
                  </li>
                  <li> 
                    <div className="name">Website Development</div>
                  </li>
                  <li> 
                    <div className="name">Laraval application</div>
                  </li>
                  <li> 
                    <div className="name">Create logo design</div>
                  </li> 
                  <li> 
                    <div className="name">Modern and mobile-ready</div>
                  </li>
                  <li> 
                    <div className="name">Optimising internal CMS</div>
                  </li>
                </ul>
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

export default Resume;
