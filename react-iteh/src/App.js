import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import data from './data';

function App() {
  const { products } = data;

  return (
    <div className="App">
      <Header></Header>

      <ProductList products={products}></ProductList>
    </div>
  );
}

export default App;
