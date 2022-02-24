import './App.css';
import NavBar from './components/NavBar';
import Rutas from './routes';
import ItemProvider from './components/context/ItemProvider';

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
        <ItemProvider>
          <Rutas />
        </ItemProvider>
      </div>
    </div>
  );
}

export default App;
