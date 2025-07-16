const http = require('http');
const fs = require ('fs');
const url = require ('url');

const myServer = http.createServer((req,res)=>{
    const log10 = `${Date.now}: ${req.method}: ${req.url} new req coming...`
    const myUrl = url.parse(req.url , true)
    console.log(myUrl);

    fs.appendFile("log10.txt" ,log10,(err,data)=>{

    switch (myUrl.pathname){
        case "/":
            if(req.method==='GET')
                res.end("my Homepage")
            break;
            case "/about":
            const userName = myUrl.query.name;
            res.end(`hyyy , ${userName}`)
            break;
            case "/signup":
                if(req.method === 'GET'){
                    res.end("this is a sign up page")
    
                }else if(req.method ==='POST'){
                    res.end("success")
                }
                break;
                default:
                    res.end("404 not found")
    }
    })
})

myServer.listen(7000,()=>{
    console.log("server started on port 7000")
});


// http://localhot:7000