import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
// import { Movies } from './components/Movies';
// import {NavMov} from "./components/NavMov";
// import {Fav} from "./components/Fav";
import { Landing } from './components/E-landing/Landing';
// import { Formvalid } from './components/FORM/Formvalid';

function App() {


  return (
    <div className="App">
     {/* <Formvalid/> */}
     <Landing/>
      
    </div>
  );
}

export default App;
