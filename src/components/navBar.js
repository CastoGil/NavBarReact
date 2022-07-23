import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import TypesExample from './navBarElectro/CartWidget';
function NavBarElectro() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="warning" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">ElectroLibre</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ElectroLibre
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav  className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">Inicio</Nav.Link>
                  <Nav.Link href="#">Productos</Nav.Link>
                  <Nav.Link href="#">Nosotros</Nav.Link>
                  <Nav.Link href="#">Contacto</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscador"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscador</Button>
                </Form><br></br>
                <TypesExample></TypesExample>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}


export default NavBarElectro;
