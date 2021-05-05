const express=require('express');
const port=8000;

const app=express();




app.set('view engine','ejs');
app.set('views','./Views');
//MiddleWare
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){
    return res.render('home');
});

app.listen(port,function(err){
    if(err)
    {
        console.log(`Error : In running Server ,${err}`);
        return ;
    }
    console.log(`Server is Running on Port : ${port}`);
});
