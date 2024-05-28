const router = require("express").Router();
// const  User = require("../../controllers/user.controllers")
const{
    getUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user.controllers');


router.route('/')
    .get(getUser)
    .post(createUser);

router.route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;