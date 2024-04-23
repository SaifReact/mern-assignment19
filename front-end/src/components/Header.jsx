import React from 'react';
import { Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = ({showSidebar}) => {

    return (
        <Navbar className={`d-md-block d-flex p-3 ${showSidebar ? '' : 'd-none'}`} >
            <Link to="/" className="px-4 py-1 ms-5 main-menu justify-content-center">
                <i className="bi bi-circle"></i> CRUD Food
            </Link>
        </Navbar>
    );
};

export default Header;