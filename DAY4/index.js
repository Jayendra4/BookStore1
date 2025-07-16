// const express = require("express");
// const app = express();
// const PORT = 8000;

const { urlencoded } = require("express");

// app.use(express.urlencoded({extended:true}))

// app.get("/" , (req,res)=>{
//     return res.send("HOMEPAGE");
// })
// app.get("/about",(req,res)=>{
//     return res.send(`Hello ${req.query.name}`);


// });
//  app.listen(PORT,()=>console.log("server started on port 8000"));
























const express = require("express")
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));

app.get("/" , (req,res)=>{
    return res.send("hello Debugshaala")
})

app.get("/about" , (req,res)=>{
    return res.send (`Hello,, ${req.query.name}`)
})


app.listen(PORT, (req,res)=>{
    console.log(`hello, server started on ${PORT}`)
})

