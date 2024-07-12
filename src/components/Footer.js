import './css/Footer.css';
import { FaFacebookF, FaInstagram , FaPinterest, FaLinkedinIn, FaYoutube} from "react-icons/fa";




function Footer() {
   return (
      <footer className="Footer">
         <section className='Footer_leftPart'>
            <div className='Footer_leftPart-container'>
               <h3>Join the Green community </h3>
               <p>Sign up to get the latest Green insights, news, and projects worldwide.</p>
               <a href='#d'>JOIN HERE</a>
            </div>
         </section>
         <section className='Footer_rightPart'>
            <div className='Footer_rightPart-container'>
               <div className='Footer_rightPart-container-row'>
               
                  <div className='Footer_rightPart-content'>
                     <h3>Products</h3>
                     <div>
                        <a href='#d'>Ascent Seating</a>
                        <a href='#d'>Nova C Seating</a>
                        <a href='#d'>Leaf Lamp Lighting</a>
                        <a href='#d'>Seamless Series</a>
                        <a href='#d'>Accessories</a>
                     </div>
                  </div>
                  <div className='Footer_rightPart-content'>
                     <h3>Spaces</h3>
                     <div>
                        <a href='#d'>Designing transport hubs</a>
                        <a href='#d'>Designing retail spaces</a>
                        <a href='#d'>Designing healthcare spaces</a>
                        <a href='#d'>Designing educational spaces</a>
                        <a href='#d'>Designing airports</a>
                        <a href='#d'>Designing workplaces</a>
                     </div>
                  </div>
                  <div className='Footer_rightPart-content'>
                     <h3>Projects</h3>
                     <div>
                        <a href='#d'>London Bridge Station</a>
                        <a href='#d'>Rive Gauche Charleroi</a>
                        <a href='#d'>University Hospital of Malmö</a>
                        <a href='#d'>University of Michigan, Modern Languages</a>
                        <a href='#d'>Building</a>
                        <a href='#d'>Keflavik International Airport</a>
                     </div>
                  </div>
                  <div className='Footer_rightPart-content'>
                     <h3>Questions</h3>
                     <div>
                        <a href='#d'>Contact us</a>
                     </div>
                  </div>
                  <div className='Footer_rightPart-content'>
                     <h3>Contact</h3>
                     <h4>GLOBAL</h4>
                     <p>Carlsgatan 3</p>
                     <p>211 20 Malmö, Sweden</p>
                     <p>+46 (0)40 600 93 30</p>
                  </div>
                  <div className='Footer_rightPart-content' style={{width: "220px"}}>
                     <h3 style={{height: "21px"}}> </h3>
                     <h4>AMERICAS</h4>
                     <p>15 Main St #244</p>
                     <p>Watertown MA, 02472 USA</p>
                     <p>Toll Free: 1 (877) 582-8664</p>
                  </div>

               </div>
            </div>
            <div className='Footer_rightPart-socials'>

               <a href='#d'>
                  <FaFacebookF className='Footer_rightPart-socials-icons' />
               </a>
               <a href='#d'>
                  <FaInstagram className='Footer_rightPart-socials-icons' />
               </a>
               <a href='#d'>
                  <FaLinkedinIn className='Footer_rightPart-socials-icons' />
               </a>
               <a href='#d'>
                  <FaPinterest className='Footer_rightPart-socials-icons' />
               </a>
               <a href='#d'>
                  <FaYoutube className='Footer_rightPart-socials-icons' />
               </a>

            </div>
         </section>
      </footer>
   );
}

export default Footer;