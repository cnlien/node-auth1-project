const router = require('express').Router();
const restricted = require('../../auth/restricted-middleware.js')

const Users = require('./usersModel.js')

router.get('/', restricted, (req, res) => {
    Users.find()
        .then( users => {
            res.status(200).json(users);
        })
        .catch( err => {
            res.status(500).json({message: "There was an error on the server."});
        })
})

module.exports = router