import {
   BrowserRouter,
   Routes,
   Route
} from 'react-router-dom';



import './App.css';
import MainPage from './MainPage';
import ProductPage from './ProductsPage';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={'/'} element={<MainPage />}>
               <Route path={'/products'} element={<ProductPage />} />        
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;