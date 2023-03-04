import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Cards from './components/Cards/Cards';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Filter/>
      <Cards/>
    </div>
  );
}

export default App;
