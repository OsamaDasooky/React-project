import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useIsAuthenticated } from "react-auth-kit";
import { useSignOut } from "react-auth-kit";
import useOperation from "../../Hook/useOperation";

function NavScrollExample() {
  const { removeTokenFromLocal } = useOperation();
  const isAuth = useIsAuthenticated();
  const logout = useSignOut();
  const navigate = useNavigate();
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
              to="/contact"
              className="navbar-brand"
              style={{ fontSize: 17 }}
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className="navbar-brand"
              style={{ fontSize: 17 }}
            >
              About
            </NavLink>
            {isAuth() ? (
              <NavLink
                to="/profile"
                className="navbar-brand"
                style={{ fontSize: 17 }}
              >
                Profile
              </NavLink>
            ) : (
              ""
            )}
          </Nav>
          {isAuth() ? (
            <Button
              className="bg-danger border-danger"
              variant="btn btn-dark "
              onClick={() => {
                logout();
                removeTokenFromLocal();
                navigate("/", { replace: true });
              }}
            >
              logout
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="btn btn-dark ">login</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
