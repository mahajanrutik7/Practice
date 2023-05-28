// import packages 
const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose');
// import router from routes 
const userRoute = require('./route/userRoute');
// initialize app 
const app = express();
app.use(express.json()); 
app.use(cors());
// start point of api 
app.use('/api', userRoute);
//
mongoose
.connect('mongodb://0.0.0.0:27017/puneuniversity')
.then(() => { app.listen(4000, () => {
console.log('Database is connected and server is running on port 4000!');
});
})
.catch((error) => { console.log(error);
});
