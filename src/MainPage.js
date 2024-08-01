import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
 
function MainPage() {
   return (
      <>
         <NavBar />
         <Outlet />
         <Header />
         <Main />
         <Footer />
      </>
   );
}
 
export default MainPage;