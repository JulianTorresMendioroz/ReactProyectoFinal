import {Navbar, Container, Nav} from 'react-bootstrap/'
import CartWidget from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'


const NavBar = () => {

    return (

        <Navbar bg="black" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Hoodies Shop</Navbar.Brand>
        <CartWidget/>
        <Nav className="nav navbar-nav navbar-center">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">Nosotros</Nav.Link>
        </Nav>
        </Container>
        
    </Navbar>
)
}

export default NavBar