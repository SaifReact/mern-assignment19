import React from 'react';
import MasterLayout from '../components/MasterLayout';
import FoodUpdateForm from '../components/FoodUpdateForm';

const FoodUpdate = () => {
    return (
        <MasterLayout>
             <div className="col-md-10 col-12 px-0">
                <div className="m-5">
                    <h4>Create Food Item</h4>
                    <div className="mt-4">
                        <div className="row">
                            <FoodUpdateForm />
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default FoodUpdate;