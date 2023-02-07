import { Navbar, Nav, NavItem,NavDropdown } from "react-bootstrap";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import {logout} from "../slices/auth"
import { useDispatch, useSelector } from "react-redux";
export default function NavBar() {
    const { isLoggedIn ,user} = useSelector((state) =>state.auth);
    const dispatch=useDispatch();
    const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <Navbar
      className="navbar navbar-expand-sm  p-2 "
      collapseOnSelect
      expand="lg"
    >
      <Navbar.Brand href="#home" className="offset-1">
        <img
          src= "/images/Logo.png"
          id="logo"
       
        />
        
      </Navbar.Brand>
      
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-left offset-1">
        <Nav className="navbar-nav d-flex text-nowrap">
          <Nav.Item >
            <Link className="nav-link" eventkey="1" to="/about">
            <img  src= "/images/icons/HomeIcon.png"  alt="" />  
                  Home 
            </Link>
          </Nav.Item>

          <Nav.Item >
            <Link className="nav-link" eventkey="2" to="/">
            <img  src= "/images/icons/AboutIcon.png"  alt="" />  
                  About
            </Link>
          </Nav.Item>
         
            <Nav.Item >
              <Link className="nav-link" eventkey="3" to="/">
              <img  src= "/images/icons/ServicesIcon.png"  alt="" />  
                  Services
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" eventkey="4" to="/">
              <img  src= "/images/icons/FeatureIcon.png"  alt="" />  
                  Features
              </Link>
            </Nav.Item>
            <Nav.Item >
              <Link className="nav-link" eventkey="5" to="/">
              <img  src= "/images/icons/PartnerIcon.png"  alt="" />  
                  Parterns
              </Link>
            </Nav.Item>
             <Nav.Item >
            <Link className="nav-link" eventkey="6" to="/">
              <img  src= "/images/icons/ExploreIcon.png" alt="" />  
                  Explore
              </Link>
              </Nav.Item>  
              {!isLoggedIn ?<>
                <Nav.Item className=" offset-md-2 ">
                <Link className="nav-link" eventkey="7" to="/">
                    <img  src= "/images/icons/CallIcon.png"  alt=""/>  
                     Contact Us
              </Link>
              </Nav.Item>    
              <Nav.Item className=" nav-button ">
              <Link className="nav-link" eventkey="8" to="/login">
                    <img  src= "/images/icons/LoginIcon.png"  alt=""/>  
                    Login/Sign Up
              </Link>
              </Nav.Item>   
              </>:
              <NavItem className="LoggedInIcons offset-md-3"> 
                <Link className="nav-link" eventkey="9" to="#">
                  <img  src= "/images/icons/CartIcon.png" alt=""/>
                </Link>  
                <Link className="nav-link" eventkey="11" to="#">
                  <img  src= "/images/icons/CalendarIcon.png"  alt="/images/icons/LoginIcon.png"/>
                </Link> 
                <Link className="nav-link" eventkey="10" to="#">
                  <img  src="/images/icons/MessageIcon.png"  alt="/images/icons/LoginIcon.png"/>
                </Link>  
                <Link className="nav-link" eventkey="9" to="#">
                  <img  src= "/images/icons/NotificationIcon.png" alt=""/>
                </Link>
                <img  className="User mx-3"src="https://www.adecco.ca/-/media/adeccogroup/brands/adecco-global-2016/canada/media/images/blog/why-linkedin-is-important-for-personal-branding.jpg" alt="" /> 
                <NavDropdown title={ 
                            <img className="thumbnail-image" 
                            src= "/images/icons/MoreIcon.png" 
                            alt="user pic"
                        />} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <span onClick={logOut}>
                   Log out
                </span>
              </NavDropdown.Item>
             
              
            </NavDropdown>       
              </NavItem>
              
               } 
             
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
