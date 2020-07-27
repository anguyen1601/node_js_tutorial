const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1,num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1,2);

class Person extends EventEmitter{ //create new object
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let amy = new Person('Amy');
let kenny = new Person('Kenny');
amy.on('name', ()=>{
    console.log('my name is ' + amy.name);
});

kenny.on('name', ()=>{
    console.log('my name is ' + kenny.name);
});

amy.emit('name');
kenny.emit('name');