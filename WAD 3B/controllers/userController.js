// import user model from model const

User = require('../model/userModel');
// register user const register =
async (req, res) => { try {
// create new user with req.body as data
const user = await User.create(req.body);
// if user get created successfully then return success and user data
if (user) {
res.json({ success: true, data: user });
}
// else return success false 
else {
res.json({ success: false, data: 'Cannot register user' });
}
} catch (error) { console.log(error);
}
};
// login user 
const login = async (req, res) => { try {
// find the user by email and password 
const user = await User.findOne({ email: req.body.email, password: req.body.password,
});
// if user exist then return success and user data 
if (user) {
res.json({ success: true, data: user });
}
// else return success false 
else {
res.json({
success: false, data: 'Please enter valid email and password',
}); }
} catch (error) { console.log(error);
}
};
const updateUser = async (req, res) => { try {
// find the user by email and update the data provided in req.body 
const user = await User.findOneAndUpdate(
{ email: req.body.email }, req.body,
{ new: true }
);
// if user get updated then return data 
if (user) {
res.json({ success: true, data: user });
}
// else return success false 
else {
res.json({
success: false,
data: 'Cannot update user',
});
}
} catch (error) { console.log(error);
}
};
const deleteUser = async (req, res) => { try {
// delete user based on email id given in req parameter --> /deleteuser/email@gmai.com 
const user = await User.findOneAndDelete({ email: req.params.email });
// if user get deleted then return data of deleted user 
if (user) {
res.json({ success: true, data: user });
}
// else return success false 
else {
res.json({
success: false, data: 'Cannot delete user', });
}
} catch (error) { console.log(error);
}
};
const getUser = async (req, res) => { try {
// find user based on email id given in req parameter --> /deleteuser/email@gmai.com 
const user = await User.findOne({ email: req.params.email });
// if user exist then return user data 
if (user) {
res.json({ success: true, data: user });
}
// else return success false 
else {
res.json({
success: false, data: 'User not found',
});
}
} catch (error) { console.log(error);
}
};
module.exports = { register, login,
updateUser, deleteUser, getUser,
};