const fs = require ("fs")
//  fs.writeFileSync ("./jay.txt" , "hello")
//  console.log ( "file created")

//  fs.writeFile("rohit.txt", "hiii" , (erro)=>{}) 



// const result = fs.readFileSync("./contact.txt" , "utf-8")
// console.log(result)

// fs.readFile("./contact.txt" ,"utf-8" , (err , result)=>{
// if(err){
//     console.log(result);
//     console.log("read success");
    
// } else{
//     console.log("content added")

// }



// });

// fs.appendFile("./rohit.txt" , "hello how are you")
// console.log("content added")

//   fs.copyFileSync("./contact.txt" , "./copy.txt")
//   console.log("data copied")

// fs.copyFile("./jay.txt" , "./raja.txt" , (err)=>{
//     if (err)
//         console.log(err)
//     else 
//     console.log("file copied succesfully")
// })

// fs.unlinkSync("./rohit.txt")
// console.log("file deleted")


// fs.mkdirSync("app-d/a/b/c/d" ) ;
// console.log("mkdir success")

const path = require ("path");
const dirPath = path.join(__dirname , "example/a");
fs.mkdir(dirPath,{recursive:true}, (err)=>{
    if (err){
        console.log("error", err);

    }
    else{
        console.log("created successfully")
    }
})
