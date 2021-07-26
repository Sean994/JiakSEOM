const User = require('../models/userModel')
const bcrypt = require('bcrypt')


exports.login = async (req, res) => {
    try {
    User.findOne({username : req.body.username}, (error, foundUser) => {
        if (error) {
           res.status(400).json({error : error.message})
        } else if (!foundUser) {
            res.status(400).json("no found user!")
        } else {
            if (bcrypt.compare(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser
                console.log(foundUser)
                res.status(200).json("logged in!")
            } else {
                res.status(400).json("wrong password my dude")
            } 
        }
    })
    }
 catch {
        res.status(500).send("error my guy")
    }
}

