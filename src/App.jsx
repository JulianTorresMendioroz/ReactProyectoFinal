import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./components/Cart/Cart"
import CartContextProvider from './Context/CartContext';
import './App.css';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>} />
          <Route path="/*" element={<Navigate to="/"proyectoreactjs/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

// system new
