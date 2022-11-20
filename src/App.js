import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import { useState } from 'react';
import Home from './pages/Home';
import {Routes, Route, Navigate} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import NotFound from './components/NotFound';
import {ToastContainer} from 'react-toastify'
import Cart from './pages/Cart';

function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null)

  return (
    <div className="App">
      <ToastContainer />
      <NavBar setToken={setToken} /> 
      {token ? 
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/products' element={<Products />} />
      <Route exact path='/products/:id' element={<Product />} />
      <Route exact path='/cart' element={<Cart />} />
      <Route exact path='/not-found' element={<NotFound />} />
      <Route
        path="*"
        element={<Navigate to="/not-found" />}
      />
      </Routes> 
      : <Login token={token} setToken={setToken} />}
      <Footer />
    </div>
  );
}

export default App;
