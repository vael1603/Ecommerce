import './App.css';
import Rutas from './routes';
import ItemProvider from './components/context/ItemProvider';
import CartProvider from './components/context/CartProvider';

function App() {
  return (
    <div className="App">
      <CartProvider>
          <ItemProvider>
            <Rutas />
          </ItemProvider>
      </CartProvider>
    </div>
  );
}

export default App;
