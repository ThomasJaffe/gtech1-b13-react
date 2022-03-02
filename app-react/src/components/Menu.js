import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Menu(){
    return <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">Les Boiboites</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Produits" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Produit 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Produit 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Produit 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Produit 4</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Produit 5</NavDropdown.Item>
          </NavDropdown>
        <Nav.Link href="#raretes">Raretés</Nav.Link>
        <Nav.Link href="#apropos">À propos</Nav.Link>
        <Nav.Link href="#panier">Panier</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Menu;