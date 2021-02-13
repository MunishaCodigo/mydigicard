import React, { Component } from 'react';


class Header extends Component {
  render() {


	  var handleLogout = this.props.handleLogout;
	  var showCard = this.props.showCard;
    

    return (
         <header className="header">
				<div className="top-menu">
					<ul>
						<li className="active">
							<a href="#about-card" onClick={showCard} data-href="#about-card" >
								<span className="icon ion-person"></span>
								<span className="link">About</span>
							</a>
						</li>
						<li>
							<a href="#resume-card" onClick={showCard} data-href="#resume-card" >
								<span className="icon ion-android-list"></span>
								<span className="link">Resume</span>
							</a>
						</li>
						<li>
							<a href="#works-card" onClick={showCard} data-href="#works-card">
								<span className="icon ion-paintbrush"></span>
								<span className="link">Works</span>
							</a>
						</li>
						<li>
							<a href="#contacts-card" onClick={showCard} data-href="#contacts-card">
								<span className="icon ion-at"></span>
								<span className="link">Contact</span>
							</a>
						</li>
                  <li>
                  <button onClick={handleLogout} >
								<span className="icon ion-log-out"></span>
								<span className="link">Logout</span>
						</button>
					</li>
					</ul>
				</div>

			</header>


    );
  }
}

export default Header;
