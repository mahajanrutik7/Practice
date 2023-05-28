const express = require('express');
// initialize router from express
const router = express.Router();
// import all functions from
userController const { register, login,
updateUser,
deleteUser,
getUser,
} = require('../controllers/userController');
// all api routes
// @Method --> POST @Path --> http://localhost:4000/api/register
router.post('/register', register);
// @Method --> POST @Path --> http://localhost:4000/api/login
router.post('/login', login);
// @Method --> PUT @Path --> http://localhost:4000/api/updateuser
router.put('/updateuser', updateUser);
// @Method --> DELETE @Path --> http://localhost:4000/api/deleteuser:email
router.delete('/deleteuser/:email', deleteUser);
// @Method --> GET @Path --> http://localhost:4000/api/getuser:email
router.get('/getuser/:email', getUser);
// export the router
module.exports = router;