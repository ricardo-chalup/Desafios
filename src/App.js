
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemListContainer.jsx/ItemListContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import {BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route pach='/' element={<ItemListContainer/>} />
        <Route pach='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route pach='/cart' element={<Cart />} />
        <Route pach='/detalle/detalleId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
);
}

      
      
      
    

export default App;


