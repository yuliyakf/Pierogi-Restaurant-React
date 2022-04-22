import React from 'react';
import {
   Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
   Button, Modal, ModalHeader, ModalBody,
   Form, FormGroup, Input, Label
} from 'reactstrap';


const Header = () => {
   return (
      <header>
         <nav class="navbar navbar-expand-md navbar-light py-3 sticky-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon sky"></span>
            </button>
            <a class="navbar-brand" href="#">
               <p class="logo">Pierogi Restaurant</p>
            </a>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
               <ul class="navbar-nav">
                  <li class="nav-item active"><a class="nav-link" href="#">
                     <p class="list">Home</p>
                  </a></li>
                  <li class="nav-item"><a class="nav-link" href="Menu.html">
                     <p class="list">Menu</p>
                  </a></li>
                  <li class="nav-item"><a class="nav-link" href="JoinOurTeam.html">
                     <p class="list">Join Our Team</p>
                  </a></li>
                  <li class="nav-item"><a class="nav-link" href="ContactUs.html">
                     <p class="list">Contact Us</p>
                  </a></li>
               </ul>
            </div>
         </nav>
      </header>
   )
}

export default Header; 