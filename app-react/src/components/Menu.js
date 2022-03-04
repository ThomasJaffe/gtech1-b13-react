import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Menu(){
    return <Navbar expand="lg">
      <Link className='home' to="/" >Les Boiboites</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <NavDropdown title="Produits" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/boiteclassique">Boites mystères Classique</Link>
            <Link className="dropdown-item" to="/boitegamer">Boites mystères Gamer</Link>
            <Link className="dropdown-item" to="/boiterepas">Boites mystères Repas</Link>
            <Link className="dropdown-item" to="/boitebricolage">Boites mystères Bricolage</Link>
            <Link className="dropdown-item" to="/boiteartiste">Boites mystères Artiste</Link>
            <Link className="dropdown-item" to="/boitemeuble">Boites mystères Meuble</Link>
            <Link className="dropdown-item" to="/boitecocktail">Boites mystères Cocktail</Link>
          </NavDropdown>
        <Link className="nav-link" to="/apropos">À propos</Link>
        <Link className="nav-link" to="/panier">Panier</Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
}

export default Menu;