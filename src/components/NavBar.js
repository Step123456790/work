import './NavBar.css';
import Search from './Search';
import BLang from './BLang';

function NavBar() {
   return (
      <div className="NavBar">
         <div className="NavBar_container">
            <a href='#d' className='NavBar_logo'>
               <p>LOGO</p>
            </a>
            <div className='NavBar_center_menu'>
               <a href="#d">PRODUCTS</a>
               <a href="#d">PLACEMAKING</a>
               <a href="#d">ABOUT</a>
            </div>
            <div className='NavBar_right_menu'>
               <Search className={"NavBar_searchIcon"} />
               <a className='NavBar_a_desTools' href="#d">DISIGNER TOOLS</a>
               <a className='NavBar_a_contact' href="#d">CONTACT</a>
               <BLang className={"NavBar_langIcon"} />
            </div>
         </div>
      </div>
   );
}

export default NavBar;