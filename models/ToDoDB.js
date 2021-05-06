const mongoose=require('mongoose');

//Schema
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
//Collection
const doList=mongoose.model('ToDoList',toDoSchema);

module.exports=doList;

