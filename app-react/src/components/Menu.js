import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Menu(){
    return <Navbar expand="lg">
      <Navbar.Brand href="#home">Les Boiboites</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <NavDropdown title="Produits" id="basic-nav-dropdown">
            <NavDropdown.Item href="#miniboite">Boite mystère (Minuscule)</NavDropdown.Item>
            <NavDropdown.Item href="#petiteboite">Boite mystère (Petite)</NavDropdown.Item>
            <NavDropdown.Item href="#moyenneboite">Boite mystère (Moyenne)</NavDropdown.Item>
            <NavDropdown.Item href="#grandeboite">Boite mystère (Grande)</NavDropdown.Item>
            <NavDropdown.Item href="#geanteboite">Boite mystère (Géante)</NavDropdown.Item>
          </NavDropdown>
        <Nav.Link href="#raretes">Raretés</Nav.Link>
        <Nav.Link href="#apropos">À propos</Nav.Link>
        <Nav.Link href="#panier">Panier</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
}

export default Menu;