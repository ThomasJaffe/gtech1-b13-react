import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Menu(){
    return <Navbar expand="lg">
      <Navbar.Brand href="/">Les Boiboites</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <NavDropdown title="Produits" id="basic-nav-dropdown">
            <NavDropdown.Item href="#boiteclassique">Boites mystères Classique</NavDropdown.Item>
            <NavDropdown.Item href="#boitegamer">Boites mystères Gamer</NavDropdown.Item>
            <NavDropdown.Item href="#boiterepas">Boites mystères Repas</NavDropdown.Item>
            <NavDropdown.Item href="#boitebricolage">Boites mystères Bricolage</NavDropdown.Item>
            <NavDropdown.Item href="#boiteartiste">Boites mystères Artiste</NavDropdown.Item>
            <NavDropdown.Item href="#boitemeuble">Boites mystères Meuble</NavDropdown.Item>
            <NavDropdown.Item href="#boitecocktail">Boites mystères Cocktail</NavDropdown.Item>
          </NavDropdown>
        <Nav.Link href="#raretes">Raretés</Nav.Link>
        <Nav.Link href="#apropos">À propos</Nav.Link>
        <Nav.Link href="#panier">Panier</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
}

export default Menu;