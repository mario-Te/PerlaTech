import NavBar from "../Layouts/Navbar"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect,useState } from "react"
import  React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faAngleLeft,faAngleRight} from "@fortawesome/fontawesome-free-solid";
import { fetchCourses } from '../slices/courses'
import Cards from '../Components/Cards'
import {Link as RouterLink} from 'react-router-dom'
import { Link,Typography,Box } from "@mui/material";
const Homepage=()=>
{
  
    const [SlideIndex,setSlideIndex]=useState(0);
    
    const dispatch= useDispatch();
    const postStatus = useSelector(state => state.course.status)
    const postList = useSelector(state=>state.course.courses)
   
    useEffect(() => {
     
        if (postStatus === 'idle') {
          dispatch(fetchCourses());
          
        }
       
      }, [postStatus, dispatch])
    return < >
        <NavBar/>
        <div className="Homepage">
          <Box sx={{mt:4,display:'block',direction:'row'}} nowrap>
    
          <Typography
            variant="span"
            noWrap
            sx={{
              width:{lg:'24%',xs:'12%'},
              pl:{lg:"100px",xs:"5px"},
              flexGrow: 1,
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#333333',
              fontSize:{lg:'32px',sm:'23px'},
              textDecoration: 'none',
              borderBottom:{md:'2px solid black',xs:'1px solid black'},  paddingBottom:{sm:'15px',xs:'5px'}, position:'relative',
              "::after":{
                 position:'absolute', right:0,bottom:'-5px', height:'10px', width:'10px', background:'black', content: '""', borderRadius:'5px'
                },
              
              }
            }
          >
            Top Trending Courses
          </Typography>
          <Link to="/" component={RouterLink} underline="none" sx={{fontFamily: 'Montserrat-regular',
            fontSize: '16px',
            fontWeight: '300',
            lineHeight: '20px',
            letterSpacing: '0.1em',
            textAlign: 'left',
            ml:{xs:0,sm:5,lg:4},
            width:'10%'
            }} > More <FontAwesomeIcon icon="arrow-right"/></Link>
            <Typography
            variant="span"
            noWrap
            sx={{
              width:'fit-content',
              ml:{xs:0,sm:3,md:30,lg:70},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
            onClick={()=>{setSlideIndex(state=>state-1)}}
           >
             <img  src= {SlideIndex===0?"/images/icons/Arrow-RightIcon.png":"/images/icons/Arrow-RightIconDisabled.png"}  alt=""/>
          </Typography>
          <Typography
            variant="span"
            noWrap
            sx={{
              width:'fit-content',
              
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={()=>{setSlideIndex(state=>state+1)}}
            >
             <img  src={SlideIndex==postList.length?"/images/icons/Arrow-LeftIcon.png":"/images/icons/Arrow-LeftIconDisabled.png"}  alt=""/>
          </Typography>
          </Box>
          <Box sx={{position:'absolute',top:'100px',background:'linear-gradient(246.61deg, rgba(251, 154, 11, 0.05) 0%, rgba(59, 126, 197, 0.05) 100%);',left:{sm:'0',md:'30px',lg:'50px'},right:{sm:0,md:'500px'}}} nowrap>
            <Box sx={{mt:'100px',ml:{sm:0,md:'120px'},display:'flex',width:{xs:'25%',sm:'100%'},justifyContent:'space-between',overflowX:'hidden'}}>
              <Box sx={{transform:{sm:`translateX(-${(SlideIndex)*50}%)`,lg:`translateX(-${(SlideIndex)*25}%)`},width:'100%',display:'flex'}}>
            {postList.map((post) => (
             <Cards {...post} key={post.Id}/>
             ))}
              </Box>
              </Box>
          </Box>
        </div>
    </>
}
export default Homepage;