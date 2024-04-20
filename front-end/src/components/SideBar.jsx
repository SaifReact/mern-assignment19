import React from 'react';
import { Navbar, Container, Button, Offcanvas } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { isAuthenticated } from '../utility/Helper';


const SideBar = () => {

    const [showSidebar, setShowSidebar] = React.useState(false);
    const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('token');
    !isAuthenticated && navigate('/');

    // localStorage.removeItem('token');
    // navigate('/'); 
};

    return (
        <>
          <Navbar expand="md" bg="light" variant="light">
        <Container fluid>
          <Button className="me-2" variant="outline-secondary" onClick={handleSidebarToggle}>
            <span className="navbar-toggler-icon" />
          </Button>
          {/* Logout button visible on mobile */}
          <Button className="d-md-none" variant="outline-danger" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="nav flex-column">
            <Link className="nav-link" to="/create">
              <i className="bi bi-cart-dash-fill"></i> Create Food
            </Link>
            <Link className="nav-link" to="/">
              <i className="bi bi-card-list"></i> All Foods
            </Link>
            {/* Logout link visible on mobile */}
            <Button className="nav-link" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right"></i> Logout
            </Button>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Sidebar visible only on desktop */}
      <div className="d-none d-md-block sidebar" id="sideberID">
        <h2>Menu</h2>
        <nav className="nav flex-column">
          <Link className="nav-link" to="/create">
            <i className="bi bi-cart-dash-fill"></i> Create Food
          </Link>
          <Link className="nav-link" to="/">
            <i className="bi bi-card-list"></i> All Foods
          </Link>
          {/* Logout link visible only on desktop */}
          <Link className="nav-link" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right"></i> Logout
            </Link>
        </nav>
      </div>
        </>
    );
};

export default SideBar;