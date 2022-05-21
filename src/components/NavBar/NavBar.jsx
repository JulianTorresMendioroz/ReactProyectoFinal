import {Navbar, Container, Nav} from 'react-bootstrap/'
import CartWidget from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {

    return (

        <Navbar bg="black" variant="dark">
        <Container>
        <Link to='/'>
        <Navbar.Brand>Hoodies Shop</Navbar.Brand>
        </Link>
        <CartWidget/>
        <Nav className="nav navbar-nav navbar-center">
        <Link to='/category/Buzo sin capucha' style={{ textDecoration: 'none' }}>
        <li>Buzos sin capucha</li>
        </Link>
        <Link to='/category/Buzo con capucha' style={{ textDecoration: 'none' }}>
        <li>Buzos con capucha</li>
        </Link>
        </Nav>
        </Container>
        
    </Navbar>
)
}

export default NavBar