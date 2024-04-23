import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SideBar = () => {

    return (
      <div className={`sidebar min-vh-100 p-4`}>
      <Container className="mx-3">
        <p className="m-1 p-1 ps-2">Menu</p>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link as={Link} to="/create" className="nav-link px-4 py-2 m-1">
              <i className="bi bi-cart-dash-fill ps-2 me-2"></i>Create Food
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/" className="nav-link px-4 py-2 m-1">
              <i className="bi bi-card-list ps-2 me-2"></i>All Foods
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
    );
};

export default SideBar;