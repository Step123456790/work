import './css/Main.css';

import SectionPublicSpaces from './mainsections/SectionPublicSpaces';
import SectionNewProduct from './mainsections/SectionNewProduct';

function Main() {
   return (
      <main>
         <SectionPublicSpaces />
         <SectionNewProduct />
      </main>
   );
}

export default Main;