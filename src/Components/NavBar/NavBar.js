// import React, { useState } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavbarText,
//   NavLink,
// } from "reactstrap";
// import { Link } from "react-router-dom";

// const NavBar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   const [modal, setModal] = useState(false);

//   const toggle2 = () => setModal(!modal);

//   return (
//     <>
//       <div className="container mt-4">
//         <Navbar color="transparent" light expand="md">
//           <Link to="/">
//             <NavbarBrand>PMPD</NavbarBrand>
//           </Link>
//           <NavbarToggler onClick={toggle} />
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink>
//                   <Link to="/" className="alink">
//                     Home
//                   </Link>
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink>
//                   <Link to="/who-we-are" className="alink">
//                     Who we are
//                   </Link>
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <a href="#portfolio" exact className="alink">
//                   Portfolio
//                 </a>
//               </NavItem>
//               <NavItem>
//                 <Link to="/contact" className="alink">
//                   What we do
//                 </Link>
//               </NavItem>
//               <NavItem>
//                 <Link to="/contact" className="alink">
//                   Contact us
//                 </Link>
//               </NavItem>
//               {/* <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Option 1
//                 </DropdownItem>
//                 <DropdownItem>
//                   Option 2
//                 </DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>
//                   Reset
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown> */}
//             </Nav>
//             <NavbarText>
//               <div></div>
//             </NavbarText>
//           </Collapse>
//         </Navbar>
//       </div>
//     </>
//   );
// };

// export default NavBar;
