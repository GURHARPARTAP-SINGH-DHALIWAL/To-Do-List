const express=require('express');
const port=8000;
//DB Schema and connection
const db=require('./config/mongoose');
const doList=require('./models/ToDoDB');
const app=express();




app.set('view engine','ejs');
app.set('views','./Views');
//MiddleWare
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){

    doList.find({},function(err,doList){
        if(err)
        {
            console.log(`Error : In Fetching Data From DB ${err}`);
            return ;
        }
        return res.render('home',{
            dolist:doList
        });
    });
});
//Adding tasks
app.post('/add',function(req,res){
    doList.create({
        description:req.body.description,
        category:req.body.type,
        date:req.body.date
    },function(err,item){
        if(err)
        {
            console.log(`Error : In Adding to DB ${err}`);
            return ;
        }
        console.log(item);
        return res.redirect('back');
    });
});
//Deleting Tasks
app.post('/delete',function(req,res){
    for(i of req.body.task)
    {
        doList.findByIdAndDelete(i,function(err){
            if(err)
            {
                console.log(`Error : In Deleting ${err}`);
                return ;
            }
            // return res.redirect('back');    
        });
        console.log(i);
    }
    return res.redirect('back');
});
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error : In running Server ,${err}`);
        return ;
    }
    console.log(`Server is Running on Port : ${port}`);
});
