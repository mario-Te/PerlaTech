import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/fontawesome-free-solid";
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
const Cards =(post)=>
(
<div className="col-md-3 col-12 card p-2" >
<img src={post.Image} alt="" className="p-2"/>
<div className="d-block my-2">
<img src="/images/icons/UserIcon.png" alt="" className="icon"/> <span className="tutor">{post.Tutor}</span>
</div>

<p className="name px-1"><b>{post.Name}</b></p>
<p className="info px-1">{post.Description}</p>
<span className="hint-star star">
{Array.apply(null, { length: post.Rating }).map((_, i) => (
 <FontAwesomeIcon icon={faStar} key={i} />
))}{
Array.apply(null, { length: 5-parseInt(post.Rating) }).map((e, i) => (
 <FontAwesomeIcon icon={farStar} key={i} />
 ))
}
</span>
<div className="vl d-flex p-2">
<p className="newprice">{post.OfferPrice?post.OfferPrice:post.Price} SYP</p>
{post.OfferPrice &&<p className="oldprice ">{post.Price} SYP</p>}
{
 post.OfferPrice !== post.Price &&
 (
   <span className="badge-red text-center py-1">{ 100- Math.round(post.OfferPrice/post.Price *100).toFixed(0)} % OFF</span>
 )
}
</div>
</div>

)
export default Cards