import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Menu(){
  return (
    <>
    <Navbar expand="lg" sticky="top">
      <Link className='home' to="/" >Les Boiboites</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="">
        <Link className="nav-link" to="/category">Produits</Link>
        <Link className="nav-link" to="/apropos">À propos</Link>
        <Link className="nav-link panier" to="/panier" float="right"> <img src="http://localhost:1337/uploads/panier_eda1084066.png?updated_at=2022-03-04T11:28:05.517Z"></img></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default Menu;