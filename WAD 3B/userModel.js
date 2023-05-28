require('mongoose');
// creating the mongoose schema -> schema defines structure of your data in JSON format
const userSchema = mongoose.Schema({ name: { type: String, required: true }, email: { type: String, required: true }, password: { type: String, required: true }, gender: { type: String, required: true }, branch: { type: String, required: true },
});
// using schema we are creating database model called user (user is nothing but the name for collection) module.exports = mongoose.model('user', userSchema);