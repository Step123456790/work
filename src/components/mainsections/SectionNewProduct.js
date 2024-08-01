import './maincss/SectionNewProduct.css';

import { IoIosArrowRoundForward } from "react-icons/io";

import bgImage from '../image/sbs-2000x11-1.jpg'


function SectionNewProduct() {
   return (
      <section className='SectionNewProduct'>
         <img src={bgImage} alt='bgimage' />
         <h2>The new Seamless Bar Seater!</h2>
         <div>
            <p className='SectionNewProduct-p'>Discover the new flexible seating for our popular Seamless Table. Sit on your own, share a seat, stand between or lean against. The Seamless Bar Seater is not only flexible, it’s comfortable and beautiful too. And stays in place, unlike free-standing stools.</p>
            <a href='#g' className='SectionNewProduct-link'>
               <p className='SectionNewProduct-link-p'>READ MORE</p>
               <IoIosArrowRoundForward className='SectionNewProduct-link-icons' />
            </a>
         </div>
      </section>
   );
}

export default SectionNewProduct;