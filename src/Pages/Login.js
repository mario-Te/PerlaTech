import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {Link as RouterLink } from "react-router-dom"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {login} from "../slices/auth";
import {clearMessage} from "../slices/message"
import { useNavigate } from "react-router-dom"
import {
  Link,
  TextField,
  IconButton,
  Box,
  Typography,
  Button,
} from '@mui/material';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';

import { faEye,faEyeSlash,faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faEye,faEyeSlash,faArrowRight,faArrowLeft);



const Login=()=>
{
  const [loading, setLoading] = useState(false);
  let navigate=useNavigate();
  const { isLoggedIn,user } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
   const [errorPhone,setErrorPhone]=useState(false)
   const [errorPass,setErrorPass]=useState(false)
    const handleSubmit=()=>
    {
      let phone =formValues.phone;
      let password=formValues.password;
      if(phone===""||password==="")
      {
        if(phone==="")
      {
        setErrorPhone(true);
      }
      if(password==="")
      {
        setErrorPass(true);
      }
      }
       
      else {
        dispatch(login( {phone, password} )).unwrap()
      .then(() => {
       navigate('/')
      })
      .catch(() => {
        setLoading(false);
      });
      }
    }
    const initialValues = {
      phone: "",
      password: "",
  };
  const [values, setValues] =useState({
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleInputChange = (e) => {
  
    if(e.target)
   { const { name, value } = e.target;
    setFormValues({
        ...formValues,
        [name]: value,
    });
    if(value!=="")
    setErrorPass(false)
  }
  else 
  {
    setFormValues({
      ...formValues,
      phone: e,
  });
  if(e!=="")
  setErrorPhone(false)
  }
 
};
useEffect(() => {
  dispatch(clearMessage());
}, [dispatch]);

    return (
    <Box sx={{my:5 ,display:'flex'}} className="Login">
      
        <Box sx={{width:'8%',textAlign:'center'}}>
            <h3><Link to="/" component={RouterLink}>  <FontAwesomeIcon icon="arrow-left"/></Link></h3>
        </Box>
        <Box sx={{textAlign:'center',width:{xs: '85%', md: '50%'}}}>
            <h1 ><b>Login </b></h1>
            
            <Box sx={{borderRadius:'0.625rem',textAlign:'center',width:{xs: '100%', md: '50%'},p:1,mx:{xs:0,md:15,lg:25},mt:10,border:'1px solid #d2d2d2'}}>
              
                <form className="mt-3" onSubmit={(e)=>{e.preventDefault();handleSubmit();}} >
                <Box sx={{m:2}}   >
                 
                 <PhoneInput
                  id="phone"
                  country={'sy'}
                  name="phone"                  
                  placeholder= "000-000-000"
                 disableCountryCode={true}
                 value={formValues.phone}
                 onChange={handleInputChange}
                 />
               {errorPhone &&<Typography
            variant="p"
            noWrap
            sx={{
              display: 'block',
              flexGrow: 1,
              fontWeight: 300,
              color: '#fff',
              backgroundColor:'#dc3545 ',
              my:1,
              borderRadius:'15px'
            }}
          >
          Phone Number is required
          </Typography>}
                </Box>
                  <Box sx={{m:2}}  >
                      
                        <TextField sx={{backgroundColor: '#F2F2F2',width:'100%'}}
                            id="password"
                            name="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={formValues.password}
                            onChange={handleInputChange}
                            size="small"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                   <IconButton
                                     aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    sx={{color:'#ED9D99'}}
                                >
                                 {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                 </IconButton>
                                </InputAdornment>
                                
                              ),
                            }}
                 />
                 {errorPass&&<Typography
            variant="p"
            noWrap
            sx={{
              display: 'block',
              flexGrow: 1,
              fontWeight: 300,
              color: '#fff',
              backgroundColor:'#dc3545 ',
              my:1,
              borderRadius:'15px'
            }}
          >
          Password is required
          </Typography>}
                 </Box>
                
                 <Box>
                 <Button
                  type="submit"
                     sx={{ 
                color:'#333333',
                background: 'linear-gradient(266.31deg, #56CCF2 0%, #3B7EC5 100%)',
                fontFamily: 'Montserrat',
               fontSize: '14px',
               fontWeight: '400',
               lineHeight: '20px',
               letterSpacing: '0em',
               textAlign: 'center',
                width:{xs:'90%',sm:'95%',lg:'92%'},  
                color:'#fff',
                borderRadius:'6px',    
               '&:hover': { color: "#333333"},
               }}
              >
              
                Login
              </Button>
            </Box>
            {message &&<Typography
            variant="p"
            noWrap
            sx={{
              display: 'flex',
              flexGrow: 1,
              fontWeight: 300,
              color: '#fff',
              backgroundColor:'#dc3545 ',
              m:1,
              borderRadius:'15px',
              textAlign:'center',
              px:15
            }}
          >
          This User is not exist
          </Typography>}
                </form>
        
              <Box sx={{display:'flex',justifyContent:'space-between',my:1}}>
           <Link to="/" component={RouterLink} underline="none" sx={{fontFamily: 'Montserrat',color:'#828282',
fontSize: '16px',
fontWeight: '500',
lineHeight: '20px',
letterSpacing: '0em',
textAlign: 'left'
}} > Forgot Password?</Link>
           <Link to="/" component={RouterLink} underline="none" sx={{fontFamily: 'Montserrat',
fontSize: '16px',
fontWeight: '500',
lineHeight: '20px',
letterSpacing: '0em',
textAlign: 'left'
}} > Sign Up <FontAwesomeIcon icon="arrow-right"/></Link>
              </Box>
              
              </Box>
              <Box sx={{display:'flex',mt:4,width:{xs: '100%', md: '50%'},p:1,mx:{xs:0,md:15,lg:25}}}>
           
              <Box sx={{width:'42%'}}>
              <Box sx={{borderTop:'1px solid #d2d2d2',my:1}}>
                </Box>
                </Box>
            <Box sx={{width:'16%',justifyContent:'center',display:'flex',px:1}}>
            <Link to="/" component={RouterLink}> <img style={{width:'25px',height:'25px',marginLeft:'15px'}} src="/images/facebook.png" alt="fs"/></Link>
           <Link to="/" component={RouterLink}><img style={{width:'40px',height:'30px',marginLeft:'15px',marginRight:'10px'}} src="/images/google.png" alt="fs"/></Link>
            </Box>
            <Box sx={{width:'42%'}}>
              <Box sx={{borderTop:'1px solid #d2d2d2',my:1}}>
                </Box>
                </Box>

          
            </Box>
        </Box>
       <Box sx={{ display:{xs:'none',md:'block'},background:"linear-gradient(208.62deg, #ED9D99 0%, #D14DCD 100%)",width:'25%',float:"left",borderRadius:'15px',height:'700px'}}>
        <Box
        component="img"
          sx={{
         position:"relative",
         top:"-40px",
         right:"100px",
         display:{xs:'none',md:'flex'},
         textAlign:'center',
         mr:1 
         }}
        alt="The house from the offer."
      src="/images/torbet.png"
       />
       </Box>
    </Box>
    )
}
export default Login;