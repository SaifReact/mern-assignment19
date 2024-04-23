import React from 'react';
import MasterLayout from '../components/MasterLayout';
import FoodForm from '../components/FoodForm';

const FoodAdd = () => {
    return (
        <MasterLayout>
            <div className="col-md-10 col-12 px-0">
                <div className="m-5">
                    <h4>Create Food Item</h4>
                    <div className="mt-4">
                        <div className="row">
                            <FoodForm />
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default FoodAdd;