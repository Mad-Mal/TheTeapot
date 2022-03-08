//Component Imports
import Header from '/components/Header.js'
import Navbar from '/components/Navbar.js'

//Style imports
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="mainContainer">
      <div className="innerContainer">
        <Header />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
