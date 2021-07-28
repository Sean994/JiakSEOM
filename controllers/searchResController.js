const Restaurant = require('../models/restaurantModel')

exports.searchRes = async (req, res, next) => {
    // const lowerCase = req.query.restaurants.toLowerCase()
    console.log(req.query.restaurants)
    try {
        req.query.restaurants = req.query.restaurants.toLowerCase()
        const data = await Restaurant.aggregate(
            [    
                {$match : { "slug" : {"$regex" : req.query.restaurants}}},
            ]
        )
        res.status(200).json({
            status : 'success',
            data : {
                data
            }
        })
    }
        catch(error) {
            res.status(404).json({
                status : 'fail',
                message : 'Cannot find specific restaurant name'
            })
        }
    }