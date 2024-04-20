import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import { Container, Row } from 'react-bootstrap';



const MasterLayout = (props) => {
    return (
        <div className=''>
            <SideBar />
            <div className="content">
                <Container>
                    <Row id="foodItemsContainer">
                    {props.children}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default MasterLayout;