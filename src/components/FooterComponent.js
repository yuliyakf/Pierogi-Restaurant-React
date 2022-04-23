import React from 'react';




const Footer = () => {
   return (
      <>
         <footer className="site-footer">
            <div className="container">
               <div className="row">
                  <div className="col-sm-6 align-self-center offset-sm-3 social">
                     <a className="btn btn-social-icon btn-instagram" href="http//instagram.com/"><i
                        className="fa fa-instagram"></i></a>
                     <a className="btn btn-social-icon btn-facebook" href="http//facebook.com/"><i className="fa fa-facebook"></i></a>
                     <a className="btn btn-social-icon btn-twitter" href="http//twitter.com/"><i className="fa fa-twitter"></i></a>
                     <a className="btn btn-social-icon btn-google" href="http//youtube.com/"><i className="fa fa-youtube"></i></a>
                  </div>

                  <div className="col-sm-6 offset-sm-3  social">
                     <a role="button" class="btn btn-link" href="tel:+12034651245"><i
                        className="fa fa-phone fa-lg text-primary"></i>1-203-465-1245</a>
                     <a role="button" className="btn btn-link" href="mailto:pierogirestaurant@gmail.com"><i
                        className="fa fa-envelope-o fa-lg text-primary"></i>pierogirestaurant@gmail.com</a>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}


export default Footer;