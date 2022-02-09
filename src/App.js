import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <NavBar />
      <div className="container pt-3">
        <div className="row">
          <div className="col-4">
            <ItemListContainer item1="Pantalon" item2="Remera" item3="Zapatillas" />
          </div>
          <div className="col-3">
            <ItemCount initial={1} stock={13}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
