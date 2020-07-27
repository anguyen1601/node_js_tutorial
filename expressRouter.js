//separate app into files

const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static'))); //alias for static folder
app.set('view engine', 'ejs');

const people = require('./routes/people');

app.use('/people',people);
app.listen(3000); 

//output = sign no output no = sign 
//dynamically adding