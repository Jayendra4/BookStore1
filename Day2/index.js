// function add (a,b){
//     return a+b ;
// }
// function sub (a,b){
//     return a-b;
// }
  
// module.exports = {
//     add,
//     sub
// }

// const http = require ("http");
// const fs = require ("fs");

// const myServer1 = http.createServer((req , res)=>{
//     const log1 = `${Date.now()} : ${req.url} New Request comming.....\n`;
//     fs.appendFile("log.txt" ,log1, (error,data)=>{
//         switch(  req.url )
//           {
//             case "/":
//             res.end("HomePage");
//             break;
//             case "/about":
//                 res.end("welcome to about page");
//                 break;
//                 case "/contact":
//                 res.end("welcome to contact page");
//                 break;
//                 default:
//                     res.end("404 not found")

//         }
//     } ) 
// });

// myServer1.listen(7000,()=>console.log("server 1 started...."))


const http = require("http");
const fs = require ("fs");
const url = require ("url");

const myServer = http.createServer((req,res)=>{
    const log1 = `${Date.now()} : $(req.url) New Request coming....\n`;
    const myUrl = url.parse(req.url,true)
    console.log(myUrl);

    fs.appendFile("log1.txt" , log1 , (err,data)=>{
        switch (myUrl.pathname){
            case "/":
                res.end("This is my homepage");
                break;
                case "/about":
const userName = myUrl.query.myName;
res.end(`hi,${userName}`);
break;
case "/contact-us":
    res.end("my contact page");
    break;
    default:
        res.end("404 not found");
        }
    });
});

myServer.listen(9000,()=>console.log("server 1 started...."));