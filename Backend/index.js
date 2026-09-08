import express from 'express'

const app = express();
const PORT = 8000;

app.get('/',(req,res)=>{
    res.send("Hello world")

})
app.get('/login',(req,res)=>{
    res.send("Welcome to Google");
})

app.listen(PORT,()=>{
    console.log(`App is Listening on Port ${PORT}`);
    

})

