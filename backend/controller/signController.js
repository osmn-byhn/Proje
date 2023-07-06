const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10
const User = require('../modals/User')
const sign_post = async (req, res, next) => {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds)
    try {
        if (await User.findOne({ email: req.body.email }).exec() === null) {
            const insertResult = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mail: req.body.mail,
                telNumber: req.body.telNumber,
                password: hashedPwd
            })
            res.send(insertResult)
            console.log("oldu bro")
        } else {
            return res.status(401).json({
                title: 'signup failed',
                error: 'This e-mail is being used'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error occured")
    }
}

module.exports = {sign_post}