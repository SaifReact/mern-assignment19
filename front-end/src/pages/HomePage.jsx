import React from 'react';
import MasterLayout from '../components/MasterLayout';
import FoodList from '../components/FoodList';

const HomePage = () => {
   
    return (
        <MasterLayout>
            <div className="col-md-10 col-12 px-0">
                <div className="m-5">
                    <h4>All Food List</h4>
                    <div className="mt-4">
                        <div className="row">
                            <FoodList />
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default HomePage;
