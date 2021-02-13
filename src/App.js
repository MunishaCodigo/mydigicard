import React, {useState, useEffect} from 'react';
import $ from 'jquery';

import Login from './login'
import './App.scss';

import fire from './fire';

import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Resume from './Components/Resume';
import Work from './Components/Work';
import Contact from './Components/Contact';


function App() {

  const [user, setUser]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [emailError, setEmailError]= useState('');
  const [passwordError, setPasswordError]= useState('');
  const [hasAccount, setHasAccount] = useState('false');

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }

  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = (event) => { 
    clearErrors();
    event.preventDefault();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;  
      }
    })
  };

  const handleSignup = (event) => { 
    event.preventDefault();
    clearErrors();
    
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/inavlid-email":
          setEmailError(err.message);
          break;
        
        case "auth/weak-password":
          setPasswordError(err.message);
          break;  
      }
    })
  };

  const handleLogout = () =>{

    fire.auth().signOut();
  };

  const showCard = (e) =>{

    var width = $(window).width();  
    var container = $('.container');
    var card_items = $('.card-inner');
    var animation_in = container.data('animation-in');
    var animation_out = container.data('animation-out');
  
      var id = e.currentTarget.dataset.href ;
      var h = parseFloat($(id).offset().top);
      var card_item = $(id);
      var menu_items = $('.top-menu li');
      var menu_item = $(this).closest('li');
      var d_lnk = $('.lnks .lnk.discover');
  
      if((width >= 1024)) {
    
    
        if(!menu_item.hasClass('active') & (width > 1023) & $('#home-card').length) {
  
      
          menu_items.removeClass('active');
          container.find(card_items).removeClass('animated '+animation_in);
  
          if($(container).hasClass('opened')) {
            container.find(card_items).addClass('animated '+animation_out);
          }
  
        
          menu_item.addClass('active');
          container.addClass('opened');
          container.find(card_item).removeClass('animated '+animation_out);
          container.find(card_item).addClass('animated '+animation_in);
          
          $(card_items).addClass('hidden');
          
          $(card_item).removeClass('hidden');
          $(card_item).addClass('active');
        }
      }
  
      if((width < 1024) & $('#home-card').length) {
  
      
        $('body,html').animate({
          scrollTop: h - 100
        }, 800);
      }

  };



  const authListener = () =>{
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser("");
      }
    });
  }

  useEffect(() => {
    
    authListener();
    
  }, []);

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
          <div className="background-gradient">
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

          
      {user ? (

      
      <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
        <Header handleLogout={handleLogout} showCard={showCard}/>
        <Portfolio />
        <About />
        <Resume />
        <Work />
        <Contact />

      </div>
      ): (      <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}

      
        />)}
    </div>
  );


}

export default App;
