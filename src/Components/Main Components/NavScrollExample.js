import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function NavScrollExample() {
  return (
    <Navbar style={{ backgroundColor: "#61d400" }} expand="lg">
      <Container>
        <img src={logo} alt="" style={{ width: 35 }} />
        <NavLink to="/" className="navbar-brand">
          Foods Recipe
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/" className="navbar-brand" style={{ fontSize: 17 }}>
              Home
            </NavLink>
            <NavLink
              to="/profile"
              className="navbar-brand"
              style={{ fontSize: 17 }}
            >
              Profile
            </NavLink>
          </Nav>

          <Link to="/login">
            <Button variant="btn btn-dark ">login</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
