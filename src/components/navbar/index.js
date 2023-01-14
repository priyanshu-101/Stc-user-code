import React, { useState } from "react";
import { useLocation } from "react-router";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBNavbarNav,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../../asset/logo.png";
import { logout } from "../../features/userSlice";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const nav = useNavigate();
  const logout = () =>{
       localStorage.removeItem("user");
       console.log(JSON.parse(localStorage.getItem("user")))
       nav('/')
  }
  // const dispatch = useDispatch
  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(logout());
  // };
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    //<div>AKHIL</div>
    <>
      <MDBNavbar expand="lg" className="primary-bg">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={logo} alt="logo" style={{ width: "100px" }} />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavExternal} >
            <MDBNavbarNav
              className="mr-auto mb-2 mb-lg-0"
              id="navbar-navigation"
            >
              <MDBNavbarItem
                className="remove-nr-style"
                id="navbar-navigation-item"
              >
                <MDBNavbarLink
                  className="text-white"
                  
                  aria-current="page"
                  href="/dashboard"
                >
                  Dashboard
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  
                  className="text-white"
                  href="/reports"
                >
                  Reports
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
                <MDBNavbarLink
                  
                  className="text-white"
                  href="/about"
                >
                  AboutUS
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBDropdown>
              <MDBDropdownToggle className="text-light nav-link" tag="a">
                <MDBIcon fas icon="power-off" />
              </MDBDropdownToggle>
              <MDBDropdownMenu id="logout-menu">
                <MDBDropdownItem>
                  <MDBDropdownLink className="text-danger" onClick={()=> {logout()}}>
                    Logout
                  </MDBDropdownLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
