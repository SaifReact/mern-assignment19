import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';

const MasterLayout = (props) => {

    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebarToggle = () => {
        setShowSidebar(!showSidebar);
    };


    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 px-0">
                <button className="btn-food d-block d-md-none m-3 p-2" onClick={handleSidebarToggle}>
                    <i className="bi bi-list"></i>
                </button>
                <Header showSidebar={showSidebar} />
                
            </div>
            <div className="col-md-10 col-12 px-0"></div>
            <hr className="m-0 p-0" />
        </div>

      <div className="row">
        <div className={`col-md-2 m-0 p-0 d-md-block ${showSidebar ? '' : 'd-none'}`}>
          <SideBar />
        </div>

        <div className="col-md-10 col-12">
          {props.children}
        </div>
      </div>
    </div>
    );
};

export default MasterLayout;