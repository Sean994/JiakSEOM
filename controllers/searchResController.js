const Restaurant = require('../models/restaurantModel')
const MenuItem = require('../models/menuItemModel')
exports.searchRes = async (req, res, next) => {
    console.log("current query.query : " , req.query.query)
        try {
            req.query.query = req.query.query.toLowerCase()
            const data = await Restaurant.aggregate(
                [    
                    {$match : { "slug" : {"$regex" : req.query.query}}},
                ]
            )
            if(data.length === 0) {
                throw new Error (`Sorry! No Restaurant is found with this name : ${req.query.query}`)
            } 
            res.status(200).json({
                status : 'success',
                data 
            })
        }
            catch(error) {
                res.status(404).json({
                    status : 'fail',
                    message : error.message
                })
            }
}
    
exports.searchItems = async (req, res, next) => {
    const test = req.query.query.toString()
    let test2 = test.split('')
    let test3 = test2.map((data) =>  {return data.toLowerCase()})
    test3[0] = test3[0].toUpperCase()
    test3 = test3.join('')
    
    console.log(test3)
    
    try {
        // req.query.query = req.query.query.toLowerCase()
        const data = await MenuItem.aggregate(
            [    
                {$match : { "name" : {"$regex" : test3}}},
            ]
        )

        if(data.length === 0) {
            throw new Error (`Sorry! No item is found with this name : ${req.query.query}`)
        }
        const array = []
        data.forEach((item) => {
            const id = item.restaurant_id.toString()
            if (array.indexOf(id) === -1 ) {
            array.push(id)
            } 
        })
        const newData = await Restaurant.find( {_id : {$in : array}} )
        
        res.status(200).json({
            status : 'success',
            data : newData,
            total_results : newData.length,            
        })
    }
        catch(error) {
            res.status(404).json({
                status : 'fail',
                message : error.message
            })
        }
}