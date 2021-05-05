const mongoose=require('mongoose');

const toDoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const doList=mongoose.model('ToDoList',toDoSchema);

module.exports=doList;

