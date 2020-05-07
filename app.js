var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route.js');
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected', () => {
    console.log("Connected At database");
});
mongoose.connection.on('err', (err) => {
    if (err) {
        console.log('Error data in '+err);
    }
});

const port = 3000;

app.use(cors());

app.use(bodyparser.json());
    

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);




app.get('/', (req, res) => {
    res.send("sckhsfdggggggggggghfhtj");
});

app.listen(port, () => {
    console.log('server started at port' + port);
});