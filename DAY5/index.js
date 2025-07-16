// const users = require('./MOCK_DATA.json')

// const app = express();
// const PORT =8000;

// app.use(express.urlencoded({extended:false

// }))

// app.get("/api/users",(req,res)=>{
//     return res.json(users);

// });

// app.listen(PORT,()=>console.log(`server started on http://localhost:800`));


const express = require("express");

const fs = require ("fs");

const users = require ("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log("hello from Middleware 1")
next();
})

app.use((req,res,next)=>{
    fs.appendFile(
        "log.txt",`\n ${Date.now()} : ${req.method} : ${req.path}\n`,
        (err,data)=>{
            next();
        }
  )
})
app.get("/api/users",(req,res)=>{
    return res.json(users)

});

app.post("/api/user",(req,res)=>{
    const body = req.body;
    if(
        !body ||
        !body.first_name||
        !body.last_name||
        !body.email||
        !body.gender||
        !body.job_title
    ){
        return res.status(400).json({msg : "All field are req..."})
    }

    users.push({...body , id:users.length+1})
    fs.writeFile(
    `${__dirname}/MOCK_DATA.json`,
    JSON.stringify(users),
    (err,data)=>{
        return res.json({status:"success", id:users.length})
    }
    )
})


app.listen(PORT,()=> console.log(`Server started on http://localhost:8000`))
