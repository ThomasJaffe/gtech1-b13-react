import {Navbar, Nav, NavDropdown,Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Menu(){
  return (
    <>
      <Navbar expand="lg" sticky="top">
        <Link className='home' to="/" >Les Boiboites</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="">
          <NavDropdown title="Produits" id="basic-nav-dropdown">
              <Dropdown.Item href="/category?id=1">Boites mystères Classique</Dropdown.Item>
              <Dropdown.Item href="/category?id=2">Boites mystères Gamer</Dropdown.Item>
              <Dropdown.Item href="/category?id=3">Boites mystères Repas</Dropdown.Item>
              <Dropdown.Item href="/category?id=4">Boites mystères Bricolage</Dropdown.Item>
              <Dropdown.Item href="/category?id=5">Boites mystères Artiste</Dropdown.Item>
              <Dropdown.Item href="/category?id=6">Boites mystères Meuble</Dropdown.Item>
              <Dropdown.Item href="/category?id=7">Boites mystères Cocktail</Dropdown.Item>
          </NavDropdown>
            <Link className="nav-link" to="/apropos">À propos</Link>
            <Link className="nav-link panierimg" to="/panier" float="right"> <img src="http://localhost:1337/uploads/panier_eda1084066.png?updated_at=2022-03-04T11:28:05.517Z"></img></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Menu;