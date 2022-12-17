const express = require('express')
const router = express.Router()

const {
    getUser, 
    addUser,
    getSingleUser,
    updateUser,
    deleteUser
} = require('../controller/user')

router.route('/').get(getUser).post(addUser)
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser)

module.exports = router