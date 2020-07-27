const express = require('express');
const app = express();

app.get('/', (req,res)=>{ //index route or homepage 
    res.send('Hello World!'); //http://localhost:3000

});

app.get('/example', (req,res)=>{ //a call back
    res.send('hitting example route'); //http://localhost:3000/example
});

//route parameters
app.get('/example/:name/:age', (req,res)=>{ //http://localhost:3000/example/amy/20
    console.log(req.params); //start off with ? > name of query = value
    // for above, http://localhost:3000/example/amy/20?tutorial=parametersTutorial
    console.log(req.query); //query string parameters
    // for above, http://localhost:3000/example/amy/20?tutorial=parametersTutorial&sort=byage
    //start off with &sort = type
    res.send(req.params.name + " is " + req.params.age + " years old!"); //prints out an object with the properties name and age
    //sends name and age back to user

});

//need route parameter to establish name and age types
//query to sort



app.listen(3000); 

