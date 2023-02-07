import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {login} from "../slices/auth";
import { Navigate, useNavigate } from "react-router-dom"
import { faEye,faEyeSlash,faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faEye,faEyeSlash,faArrowRight,faArrowLeft);

const Login=()=>
{
  let navigate=useNavigate();
  const { isLoggedIn,user } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [phone, setPhone] = useState("password");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
   
    const handleSubmit=()=>
    {
    
      dispatch(login({ phone, passwordInput }))
      .unwrap()
      .then(() => {
       // navigate("/");
       
      })
      .catch((err) => {
       console.log(err)
      });
    }
    if (isLoggedIn) {
      return <Navigate to="/" />;
    }
    return (
    <div className="row my-5 Login">
      
        <div className="col-1 text-center">
            <h3><Link to="/" className="justify-content-end oranged font-large">  <FontAwesomeIcon icon="arrow-left"/></Link></h3>
        </div>
        <div className="col-10 col-md-6 text-center">
            <h1 ><b>Login  </b></h1>
            
            <div className=" col-12 col-md-6 offset-md-3 text-center top-100 border rounded p-5">
              
                <form className="mt-3" onSubmit={(e)=>{e.preventDefault();}}>
             <PhoneInput
             country={'sy'}
            value={phone}
            placeholder= "000-000-000"
            disableCountryCode={true}
            onChange= {phone =>setPhone(phone)}
            className="mb-2 w-100"
            />
           <div className="border input p-1">
          
           <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="border-0 w-90 px-4" placeholder="Password"/>
           <FontAwesomeIcon icon={passwordType==="password"?"eye":"eye-slash"} onClick={togglePassword}  className="oranged w-10"/>
           </div>
           <button className="w-100 my-3" onClick={handleSubmit} >Login</button> 
                </form>
        
         <div className="forget-password text-center">
           <Link to="/" className="justify-content-start black"> Forgot Password?</Link>
           <Link to="/" className="justify-content-end"> Sign Up <FontAwesomeIcon icon="arrow-right"/></Link>
        </div>
            </div>
            <div className="d-flex  col-10 offset-1 col-md-6 offset-md-3  mt-4 ">
            <div className="col-5"><div className="border-top my-2"></div></div>
            <div className=" col-2 icons justify-content-center px-2">
            <Link to="/" > <img className="mx-3" src={process.env.PUBLIC_URL +"/images/facebook.png"} alt="fs"/></Link>
           <Link to="/"><img  className="mx-3" src={process.env.PUBLIC_URL +"/images/google.png" }alt="fs"/></Link>
            </div>
           <div className="col-5"><div className="border-top my-2"></div></div>

            </div>
           
        </div>
        <div className=" col-10 offset-1 col-md-3 img-right my-3 ">
            <img src={process.env.PUBLIC_URL +"/images/torbet.png"} alt=""></img>
        </div>
    </div>
    )
}
export default Login;