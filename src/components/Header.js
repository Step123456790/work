import './css/Header.css';

function Header() {
   return (
      <header>
         <h1>We make <br /> places matter.</h1>
         <a href='#d' className='Header_circle-link'> 
            <div>
               <p>37800</p>
               <p>trees planted thanks to 608 <br/> Green projects worldwide</p>
            </div>
         </a>
      </header>
   );
}

export default Header;