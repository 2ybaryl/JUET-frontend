import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
class alumini extends React.Component {
  render() {
    return (
      <alumini id="alumini">
          <div className="alumini">
          <div className="container-head">Alumini Testimonials</div>
         <div className="alumini-container">
             <div className="testimonial" id="alumini1">
                 <div className="left-container">
                    <div className="left-top">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti et reprehenderit quod quas iste eum ipsum mollitia enim ex, aspernatur, quae praesentium tenetur ad."</div>
                    <div className="left-bottom">Elon Musk <br></br>Batch (2002-2006)</div>
                    <div className="left-right">
                     <ul>
                        <li><FontAwesomeIcon icon= {faTwitterSquare} /></li>
                        <li> <FontAwesomeIcon icon= {faLinkedin} /></li>
                        <li><FontAwesomeIcon icon= {faGithub} /></li>
                     </ul>
                    </div>
                 </div>
                 <div className="right-container">
                    <img src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/03/12/elon-musk-tesla-paypal-spacex.jpg?quality=75&width=982&height=726&auto=webp"></img>
                 </div>
             </div>
             <div className="testimonial" id="alumini2">
             <div className="left-container">
                    <div className="left-top">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti et reprehenderit quod quas iste eum ipsum mollitia enim ex, aspernatur, quae praesentium tenetur ad."</div>
                    <div className="left-bottom">Elon Musk <br></br>Batch (2002-2006)</div>
                    <div className="left-right">
                     <ul>
                        <li><FontAwesomeIcon icon= {faTwitterSquare} /></li>
                        <li> <FontAwesomeIcon icon= {faLinkedin} /></li>
                        <li><FontAwesomeIcon icon= {faGithub} /></li>
                     </ul>
                    </div>
                 </div>
                 <div className="right-container">
                    <img src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/03/12/elon-musk-tesla-paypal-spacex.jpg?quality=75&width=982&height=726&auto=webp"></img>
                 </div>
             </div>
             <div className="testimonial" id="alumini3">
             <div className="left-container">
                    <div className="left-top">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti et reprehenderit quod quas iste eum ipsum mollitia enim ex, aspernatur, quae praesentium tenetur ad."</div>
                    <div className="left-bottom">Elon Musk <br></br>Batch (2002-2006)</div>
                    <div className="left-right">
                     <ul>
                        <li><FontAwesomeIcon icon= {faTwitterSquare} /></li>
                        <li> <FontAwesomeIcon icon= {faLinkedin} /></li>
                        <li><FontAwesomeIcon icon= {faGithub} /></li>
                     </ul>
                    </div>
                 </div>
                 <div className="right-container">
                    <img src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/03/12/elon-musk-tesla-paypal-spacex.jpg?quality=75&width=982&height=726&auto=webp"></img>
                 </div>
             </div>
         </div>
         </div>
      </alumini>
    );
  }
}
export default alumini;
