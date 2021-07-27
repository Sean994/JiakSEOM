const User = require('../models/userModel')
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
    try { 
    await User.findOne({username : req.body.username}, (error, foundUser) => {
        if (error) {
            console.log(error);
            res.send("oops the db had a problem");
            // res.status(400).json({error : error.messwage})
        } else if (!foundUser) {
            console.log("User not found")
            res.send('No user found');
            // res.status(400).json("no found user!")
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser
                console.log(foundUser)
                res.status(200).json("logged in!")
            } else {
                console.log("Wrong password")
                res.send('wrong password');
                // res.status(400).json("wrong password my dude")
            } 
        }
    })
    }
 catch {
        res.status(500).send("error my guy")
    }
}

exports.logOut = async (req, res) => {
    try { await req.session.destroy(() => {
        res.status(201).send("Logged Out")
    })
    }
 catch {
        res.status(500).send("error my guy")
    }
}

exports.sessions = async (req,res) => {
    res.send(req.session.currentUser)
}
