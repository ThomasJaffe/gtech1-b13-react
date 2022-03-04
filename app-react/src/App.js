import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Accueil from './Accueil';
import Apropos from './Apropos';
import Panier from './Panier';
import Boiteclassique from "./Boiteclassique";
import Boitegamer from "./Boitegamer";
import Boiterepas from "./Boiterepas";
import Boitebricolage from "./Boitebricolage";
import Boiteartiste from "./Boiteartiste";
import Boitemeuble from "./Boitemeuble";
import Boitecocktail from "./Boitecocktail";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Accueil />} />
          <Route exact path='/apropos' element={<Apropos />} />
          <Route exact path='/panier' element={<Panier />} />
          <Route exact path='/boiteclassique' element={<Boiteclassique />} />
          <Route exact path='/boitegamer' element={<Boitegamer />} />
          <Route exact path='/boiterepas' element={<Boiterepas />} />
          <Route exact path='/boitebricolage' element={<Boitebricolage />} />
          <Route exact path='/boiteartiste' element={<Boiteartiste />} />
          <Route exact path='/boitemeuble' element={<Boitemeuble />} />
          <Route exact path='/boitecocktail' element={<Boitecocktail />} />
        </Routes>
      </Router>
  );
}

export default App;
