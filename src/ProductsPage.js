import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

import './components/css/ProductPage.css';

import photo from "./components/image/ascent-double-rise-3-1-scaled.jpg"
 
function ProductPage() {
   return (
      <div className="ProductPage">
         <div className="ProductPage_container">
            <a href='#d' className="ProductPage_container-content">
               <img src={photo} alt='s' />
               <h4>ASCENT SEATING</h4>
            </a>
            <a href='#d' className="ProductPage_container-content">
               <img src={photo} alt='s' />
               <h4>NOVA C SEATING</h4>
            </a>
            <a href='#d' className="ProductPage_container-content">
               <img src={photo} alt='s' />
               <h4>LEAF LAMP LIGHTING</h4>
            </a>
            <a href='#d' className="ProductPage_container-content">
               <img src={photo} alt='s' />
               <h4>SEAMLESS TABLE</h4>
            </a>
            <a href='#d' className="ProductPage_container-content">
               <img src={photo} alt='s' />
               <h4>ACCESSORIES</h4>
            </a>
            <a href='#d' className="ProductPage_container-content">
               <img src={photo} alt='s' />
               <h4>DOWNLOAD OUR LOOK BOOK</h4>
            </a>
         </div>
         <div className="ProductPage_low-link" >
            <Link to={'/sss'}>VIEW ALL PRODUCTS SERIES</Link>
            <IoIosArrowRoundForward className="ProductPage_low-link-icon" />
         </div>
      </div>
   );
}
 
export default ProductPage;