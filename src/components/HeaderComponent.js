import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';




const Header = () => {
   return (
      <header>
         <Navbar dark sticky="top" expand="md">
            <div className="container">
               <Nav navbar>
                  <NavItem>
                     <NavLink className="nav-link" to="/home">
                        Home
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to="/menu">
                        Menu
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to="/joinourteam">
                        Join Our Team
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to="/contactus">
                        Contact Us
                     </NavLink>
                  </NavItem>
               </Nav>
            </div>
         </Navbar>

      </header>
   );
}

export default Header; 