import React from 'react';
import Typed from 'react-typed';

const Login = (props) => {

    const{
        email, 
        setEmail, 
        password, 
        setPassword,
        handleLogin,
        emailError,
        passwordError
    } = props;

    return (
    
        <div className="container login">
        <section id="formHolder">
          <div className="row">
           <div className="col-md-6 col-sm-12 brand">
              <div className="heading">
                <h2>Munisha</h2>
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

   </div>

            </div>
  
   
            <div className="col-md-6 col-sm-12 form">
             
              <div className="login form-peice">
                
              
                <form className="login-form" action="#" method="post">
                  <div className="form-group">
                  <div className="formHeading">
                    <h1>
                      Sign In
                    </h1> 
                  </div>
                    <input
                      type="email"
                      name="loginemail"
                      id="loginemail"
                      placeholder="Email Address"
                      required
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                  </div>
  
                  <div className="form-group">
                    
                    <input
                      type="password"
                      name="loginPassword"
                      id="loginPassword"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                  </div>
  
                  <div className="CTA">
                      <button className="sign" onClick={handleLogin}>Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>


    )
}

export default Login;