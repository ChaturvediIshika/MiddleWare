const express=require('express');
const app=express();

// app.use((req,res,next)=>{
//     // res.send("App.use");
//     req.username='Ishika';
//     next();
// })

const verify=(req,res,next)=>{
    const {password}=req.query;
    if(password!=='orange'){
        res.send('Invalid password');
    }
    next();
}

app.get('/',(req,res)=>{
    res.send("home");
})

app.get('/cat',(req,res)=>{
    const {username}=req;
    console.log(username);
    res.send("Cat");
})

app.get('/secret',verify,(req,res)=>{
    res.send("Hello");
})

app.listen(5000,()=>{
    console.log("Server Running");
})