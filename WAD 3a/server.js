const express = require('express'); 
const path = require('path'); 
const app = express(); 
app.use(express.static(__dirname + '/WAD 3A'));
app.get('/', (req, res) => {
res.sendFile('/index.html');
});
app.get('/about', (req, res) => {
res.sendFile(path.join(__dirname + '/WAD 3A/about.html'));
});
app.get('/signup', (req, res) => {
res.sendFile(path.join(__dirname + '/WAD 3A/signup.html'));
});
app.listen(3000, () => {
console.log('Server listening on port 3000.');
});