import './maincss/SectionPublicSpaces.css';

import { IoIosArrowRoundForward } from "react-icons/io";

import image from '../image/ascent-double-rise-3-1-scaled.jpg'


function SectionPublicSpaces() {
   return (
      <section className='SectionPublicSpaces'>
         <div className='SectionPublicSpaces_text'>
            <h2>We make public spaces thrive</h2>
            <p>
               We’re working to boost the standard of public space interiors, bringing nature indoors, 
               <br/> connecting people to places, and with each other.
            </p>
         </div>
         <div className="SectionPublicSpaces_container">
            <a href='#g' className="SectionPublicSpaces_content" >
               <div className="SectionPublicSpaces_content-lift__container">
                  <div className="SectionPublicSpaces_content-lift">
                     <a href='#f'>
                        <text>EXPLORE</text>
                        <IoIosArrowRoundForward />
                     </a>
                     <span>We design for travellers and commuters, <br/> families, and individuals, making <br/> comfortable environments a part of every...</span>
                  </div>
               </div>
               <img src={image} alt='dddd'/>
               <p>DESIGNING TRANSPORT HUBS</p>
            </a>
            <a href='#g' className="SectionPublicSpaces_content" >
               <div className="SectionPublicSpaces_content-lift__container">
                  <div className="SectionPublicSpaces_content-lift">
                     <a href='#f'>
                        <text>EXPLORE</text>
                        <IoIosArrowRoundForward />
                     </a>
                     <span>We create places that make commercial <br/> centres more memorable, because feeling <br/> good is part of the experience. The...</span>
                  </div>
               </div>
               <img src={image} alt='dddd'/>
               <p>DESIGNING RETAIL SPACES</p>
            </a>
            <a href='#g' className="SectionPublicSpaces_content" >
               <div className="SectionPublicSpaces_content-lift__container">
                  <div className="SectionPublicSpaces_content-lift">
                     <a href='#f'>
                        <text>EXPLORE</text>
                        <IoIosArrowRoundForward />
                     </a>
                     <span>Places inspired by nature have the power to <br/> fnurture and soothe, bringing a sense of <br/> wellbeing to clinical...</span>
                  </div>
               </div>
               <img src={image} alt='dddd'/>
               <p>DESIGNING HEALTHCARE SPACES</p>
            </a>
            <a href='#g' className="SectionPublicSpaces_content" >
               <div className="SectionPublicSpaces_content-lift__container">
                  <div className="SectionPublicSpaces_content-lift">
                     <a href='#f'>
                        <text>EXPLORE</text>
                        <IoIosArrowRoundForward />
                     </a>
                     <span>Our approach creates the right kind of <br/> learning environment, making it easier for <br/> students to learn, share knowledge...</span>
                  </div>
               </div>
               <img src={image} alt='dddd'/>
               <p>DESIGNING EDUCATIONAL SPACES</p>
            </a>
            <a href='#g' className="SectionPublicSpaces_content" >
               <div className="SectionPublicSpaces_content-lift__container">
                  <div className="SectionPublicSpaces_content-lift">
                     <a href='#f'>
                        <text>EXPLORE</text>
                        <IoIosArrowRoundForward />
                     </a>
                     <span>Whether working with a blank canvas or <br/> retrofitting a terminal, we will help you bring <br/> a comfortable experience from...</span>
                  </div>
               </div>
               <img src={image} alt='dddd'/>
               <p>DESIGNING AIRPORTS</p>
            </a>
            <a href='#g' className="SectionPublicSpaces_content" >
               <div className="SectionPublicSpaces_content-lift__container">
                  <div className="SectionPublicSpaces_content-lift">
                     <a href='#f'>
                        <text>EXPLORE</text>
                        <IoIosArrowRoundForward />
                     </a>
                     <span>Natural materials and living plants do more <br/> than transform workplace environments – <br/> they make them come alive. Nature...</span>
                  </div>
               </div>
               <img src={image} alt='dddd'/>
               <p>DESIGNING WORKPLACES</p>
            </a>
         </div>
      </section>
   );
}

export default SectionPublicSpaces;