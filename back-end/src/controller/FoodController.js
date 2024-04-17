const FoodModel = require("../model/FoodModel");


exports.AddFood = async (req, res) => {

    try {
        const foodInfo = req.body;
        if (foodInfo==null) {
            return res.json({status:'warning', response: 'All fields are required'});
        }

        await FoodModel.create(foodInfo);
        res.json({status:'success', response: 'Food added successfully'});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }

}

exports.ReadFood = async (req, res) => {

    try {
        const foodInfo = await FoodModel.find();
        res.json({status:'success', response:foodInfo})
    } catch (error) {
        res.json({status:'error', response: error.message});
    }
    
}


exports.UpdateFood = async (req, res) => {

    try {
        const {id} = req.params;
        const foodInfo = req.body;
        if (foodInfo==null) {
            return res.json({status:'warning', response: 'All fields are required'});
        }
        await FoodModel.updateOne({_id: id},foodInfo)
        res.json({status:'success', response: 'Food updated successfully'});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }

}


exports.DeleteFood = async (req, res) => {

    try {
        const {id} = req.params;
        await FoodModel.deleteOne({_id: id})
        res.json({status:'success', response: 'Food deleted successfully'});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }

}