const express =require('express');
const app = express();
app.get('/',(req,res)=>{
    const a = 123;
    res.send('Hello world')
})
app.listen(4000,()=>console.log('Example app Listening on port 3000!!'))