import React, { Component } from 'react';
import Typed from 'react-typed';

class Portfolio extends Component {
  render() {

    return (

<div className="card-started" id="home-card">



<div className="profile no-photo">


   <div className="slide"></div>

   
   <div className="title">Munisha Choudhary</div>
   <div className="subtitle subtitle-typed">
      <div className="typing-title">
      <div>
                <Typed
                    strings={['Web Developer',
                    'Full-stack Developer']}
                    typeSpeed={80}
                    backSpeed={50}
                    loop 
                />
            </div>
      </div>
   </div>
   
   <div className="lnks">
      <a href="./docs/Munisha_cv.pdf" className="lnk" download>
         <span className="text">Download CV</span>
         <span className="ion ion-archive"></span>
      </a>
      <a href="./docs/Munisha_cover_letter.pdf" className="lnk discover" download>
         <span className="text">Cover Letter</span>
         <span className="ion ion-archive"></span>
      </a>
   </div>

</div>

</div>
    );
  }
}

export default Portfolio;
