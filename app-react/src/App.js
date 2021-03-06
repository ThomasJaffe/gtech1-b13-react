import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Accueil from './Accueil';
import Apropos from './Apropos';
import Panier from './Panier';
import Category from './Category';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Accueil />} />
          <Route exact path='/apropos' element={<Apropos />} />
          <Route exact path='/panier' element={<Panier />} />
          <Route exact path='/category' element={<Category />} />
        </Routes>
      </Router>
  );
}

export default App;
