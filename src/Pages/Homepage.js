import NavBar from "../Layouts/Navbar"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect,useState } from "react"
// omit other imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faAngleLeft,faAngleRight} from "@fortawesome/fontawesome-free-solid";
import { fetchCourses } from '../slices/courses'
import Cards from '../Components/Cards'
import {Link} from 'react-router-dom'
const Homepage=()=>
{
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 576)").matches
  )
  const [SlideNum,setSlideNum]=useState(4);
    const [SlideIndex,setSlideIndex]=useState(0);
    
    const dispatch= useDispatch();
    const postStatus = useSelector(state => state.course.status)
    const postList = useSelector(state=>state.course.courses)
    const IncreaseIndex=()=>{
      if(SlideIndex+SlideNum<postList.length)
      setSlideIndex(i=>i+1)
    }
    const decreaseIndex=()=>{
      if(SlideIndex!==0)
      setSlideIndex(i=>i-1)
    }
    useEffect(() => {
      window
      .matchMedia("(max-width: 576px)")
      .addEventListener('change', e => setMatches( e.matches ));
        if (postStatus === 'idle') {
          dispatch(fetchCourses());
          
        }
        if(matches)
        {
          setSlideNum(1)
        }
        else setSlideNum(4);
      }, [postStatus, dispatch,matches])
    return < >
        <NavBar/>
        <div className="Homepage">
        <div className="col-8 offset-1 post-container p-2 mt-5">
        <div className="post-header">
          <span > <span className="vl">&nbsp;</span><h1 className="info">Top Trending Courses </h1> </span>
          <span className="link"><Link  to="/"> More <FontAwesomeIcon icon={faArrowRight} /></Link></span>
          <div className="arrows">
          <span onClick={decreaseIndex}><img  src= {SlideIndex===0?"/images/icons/Arrow-RightIcon.png":"/images/icons/Arrow-RightIconDisabled.png"}  alt=""/> </span>
          <span onClick={IncreaseIndex}> <img  src={SlideIndex+SlideNum!==postList.length?"/images/icons/Arrow-LeftIcon.png":"/images/icons/Arrow-LeftIconDisabled.png"}  alt=""/>  </span>
          </div>

       </div>
          <div className="row  justify-content-between post-wrapper">
           
             {postList.map((post) => (
             <Cards {...post} key={post.Id}/>
             )).slice(SlideIndex,SlideIndex+SlideNum)}
             </div>
        </div>
        </div>
    </>
}
export default Homepage;