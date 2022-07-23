import './App.css';
import NavBarElectro from './components/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBarElectro></NavBarElectro>
      <ItemListContainer texto={'Lista de productos electronicos'}></ItemListContainer>
    </div>
  );
}

export default App;
