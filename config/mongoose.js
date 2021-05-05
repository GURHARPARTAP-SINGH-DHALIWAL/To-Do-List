const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/ToDoList');

const db=mongoose.connection;


db.on('error',console.error.bind(console,'Error'));

db.once('open',function(){
    console.log('Succesfully Connected');
});