const fs = require('fs');//built-in files system module


// Read file
if(fs.existsSync("./blog1.txt")){
fs.readFile("./blog1.txt",(error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data.toString());
})
}else{ 
    console.log("File doesn't exist.");
}


//Write to file & if file doesn't exist, create one
// fs.writeFile("./blog2.txt","Hello dear Peace!",()=>{
//     console.log("File written!");
// })


// Directories
// if(!fs.existsSync("./Streams")){
//     fs.mkdir("./Streams",(error)=>{
//         if(error){
//             console.log(error);
//         }else{
//             console.log("forlder is created!");
//         }
//     })
// }else{
//     fs.rmdir("./Streams",(error)=>{
//         if(error){
//             console.log(error);
//         }
//         console.log("An existing folder has been deleted!");
//     })
// }



//Delete file 
// if(fs.existsSync("./deleteMe.txt")){
//     fs.unlink("./deleteMe.txt",(error)=>{
//         if(error)
//         console.log(error);
//         console.log("File Deleted Successfully");
//     })
// }
