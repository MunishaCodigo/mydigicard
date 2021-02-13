import React, { Component } from 'react';

class Contact extends Component {
  render() {

    return (

   <div className="card-inner contacts" id="contacts-card">
      <div className="card-wrap">

         <div className="content contacts">

           
            <div className="title">Get in Touch</div>

           
            <div className="row">
               <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                  <div className="info-list">
                     <ul>
                     <li><strong>Email . . . . .</strong> munisha4947@gmail.com</li>
                        <li><strong>Address . . . . .</strong> Trondheim, Norway</li>
                        <li><strong>Phone . . . . .</strong> +47 91262163</li>
                        <li><strong>Available . . . . .</strong> ASAP</li>
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

export default Contact;
