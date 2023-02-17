import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link';
import {Link as RouterLink } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux';
import {logout} from "../slices/auth"
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch=useDispatch();
  const logOut = React.useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const LogginSx=
  {
    background: 'linear-gradient(266.31deg, #56CCF2 0%, #3B7EC5 100%)',
    borderRadius: '10px',
    border:'0px',
    color:'#fff',
    height:'40px',
    width:'200px',
    padding:'6px',
    textAlign:'center',
    '&:hover': { color: "#333333"},
  }
  const LoginMenu=
  {
    py:2,
    px:1,
  }
  const BoxSx=
  
    { fontFamily: 'Montserrat',
      fontSize: {lg:'16px',md:'12px'},
      fontWeight: '400',
      lineHeight: '20px',
      letterSpacing: '0em',
      textAlign: 'left',
      color:"#828282",
      py:2,
      px:1,
    "&:hover": { color: "#333333",borderBottom:"3px solid rgba(237, 157, 153, 0.5)"}, 
     fontSize: {sm:'14x',lg:'18px'}
    }
    const { isLoggedIn,user } = useSelector((state) => state.auth);
  return (
    <AppBar position="static" sx={{ background: '#E5E5E5' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <img src="/images/Logo.png" alt=""/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">Services</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">Features</Typography>
                </MenuItem>
             
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              width:'fit-content',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             <img src="/images/Logo.png" alt=""/>
          </Typography>
         
          <Box sx={{ mx:{lg:5,md:3},maxWidth: 'fit-content',flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Link
                underline="none"
                component={RouterLink}
                to="/"
                sx={BoxSx}
                nowrap
              >
                <img src="/images/icons/HomeIcon.png" alt=""/>
                Home
              </Link>
              <Link
              underline="none"
              component={RouterLink}
              to="/"
              sx={BoxSx}
              >
                 <img src="/images/icons/AboutIcon.png" alt=""/>
                About
              </Link>
               <Link
                underline="none"
                to="/"
                component={RouterLink}
                sx={BoxSx}>
                <img src="/images/icons/ServicesIcon.png" alt=""/>
                Services
              </Link>
               
               <Link
                underline="none"
                to="/"
                sx={BoxSx}
                component={RouterLink}
              >
                <img src="/images/icons/FeatureIcon.png" alt=""/>
                Features
              </Link>
               <Link
              underline="none"
              to="/"
                sx={BoxSx}
                component={RouterLink}
             
              >
                <img src="/images/icons/PartnerIcon.png" alt=""/>
                Partners
              </Link>
               <Link
                underline="none"
                to="/"
                sx={BoxSx}
                component={RouterLink}
              >
                <img src="/images/icons/ExploreIcon.png" alt=""/>
                Explore
              </Link>
              
          </Box>
           {!isLoggedIn?<Box sx={{display:{md:'flex',xs:'none'},marginLeft:'200px'}}>
            <Button
                component="a"
                href="/contact"
               sx={{ 
                color:'#333333',
                fontFamily: 'Montserrat',
               fontSize: '14px',
               fontWeight: '400',
               lineHeight: '20px',
               letterSpacing: '0em',
               textAlign: 'center',
               mx:3,
               '&:hover': { color: "#333333"},
               }}
              >
                <img src="/images/icons/CallIcon.png" alt=""/>
                Contact Us
              </Button>
              <Link
                component={RouterLink}
                to="/login"
                underline="none"
                sx={LogginSx}
              >
                <Box
                  component="img"
                    sx={{
                   height: 30,
                   width: 30,
                   textAlign:'center',
                   mx:1 
                   }}
                  alt="The house from the offer."
                src="/images/icons/LoginIcon.png"
                 />
                 Login/SignUp
              </Link>
              </Box>
              :  <Box sx={{ ml:{lg:50,md:20},maxWidth: 'fit-content',flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Link
                underline="none"
                component={RouterLink}
                to="/"
                sx={LoginMenu}
              >
                <img src="/images/icons/CartIcon.png" alt=""/>
               
              </Link>
              <Link
              underline="none"
              component={RouterLink}
              to="/"
              sx={LoginMenu}
              >
                 <img src="/images/icons/CalendarIcon.png" alt=""/>
                
              </Link>
               <Link
                underline="none"
                to="/"
                component={RouterLink}
                sx={LoginMenu}>
                <img src="/images/icons/MessageIcon.png" alt=""/>
                
              </Link>
               
               <Link
                underline="none"
                to="/"
                sx={LoginMenu}
                component={RouterLink}
              >
                <img src="/images/icons/NotificationIcon.png" alt=""/>
                
              </Link>
              <Link
                underline="none"
                to="/"
                sx={LoginMenu}
                component={RouterLink}
              >
                <img src="/https://www.adecco.ca/-/media/adeccogroup/brands/adecco-global-2016/canada/media/images/blog/why-linkedin-is-important-for-personal-branding.jpg" alt=""/>
                
              </Link>
              <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} >
                <Avatar alt="Remy Sharp" src="/images/icons/MoreIcon.png"  sx={{height:'auto',p:1}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={logOut}>Logout</Typography>
                </MenuItem>
            </Menu>
              <Box >
           
          </Box>
              
          </Box>} 
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;