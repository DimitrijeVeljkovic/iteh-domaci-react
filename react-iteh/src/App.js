import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart'
import data from './data';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const { products } = data;

  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Routes>
            <Route path='/products' element={<ProductList products={products}/>} />
            <Route path='/shopping-cart' element={<Cart/>} />
            <Route path='/' element={<ProductList products={products}/>} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
