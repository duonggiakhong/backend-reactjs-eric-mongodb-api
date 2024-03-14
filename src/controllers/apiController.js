const User = require('../models/user');


const getUserApi = async (req, res) => {
    let results = await User.find();
    res.status(200).json({
        er: 0,
        data: results
    })
}

const postusernameAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let users = await User.create({
        email: email,
        name: name,
        city: city
    })

    res.status(200).json({
        er: 0,
        data: users
    })
}

//update user api
const putUploadNameAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.id;
    let users = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    res.status(200).json({
        er: 0,
        data: users
    })
}

const DeleteUser = async (req, res) => {
    let userId = req.body.id
    let users = await User.deleteOne({ _id: userId })//mongoDB connection query

    res.status(200).json({
        er: 0,
        data: users
    })
}

module.exports = { getUserApi, postusernameAPI, putUploadNameAPI, DeleteUser }