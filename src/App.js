import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/product' element={<Product />}/>
          <Route exact path='/product/:id' element={<ProductDetail />}/>
          <Route exact path='/cart' element={<Cart />}/>
          <Route exact path='/checkout' element={<Checkout />}/>
          <Route exact path='/contact' element={<Contact />}/>
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
