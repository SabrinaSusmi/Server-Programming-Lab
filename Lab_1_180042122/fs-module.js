//Synchronous and Asynchronous Function

//readFile
//writeFile
//AppendFile
//Delete
//Rename

const fs = require('fs');

// fs.writeFileSync('./contents/demoFile.txt', 'We are learning JavaScript.');
// fs.appendFileSync('./contents/demoFile.txt', 'It is NdeJS.');

// fs.rename('./contents/demoFile.txt','./contents/RenamedFile.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log('Write Successful');
//     }
// });

// fs.readFile('./contents/RenamedFile.txt','utf-8',(err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// });

// const data = fs.readFileSync('./contents/RenamedFile.txt','utf-8');

// console.log('before');

// fs.readFile('./contents/RenamedFile.txt','utf-8',(err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         fs.appendFile('./contents/RenamedFile.txt','Is it a synchronus process?',(err)=>{console.log(err);});
//         fs.readFile('./contents/RenamedFile.txt','utf-8',(err, data) => {
//             if(err){
//                 console.log(err);
//             }
//             else {
//                 console.log(data);
//             }
//         });
//     }
// });

// console.log('after');

fs.unlink('./contents/RenamedFile.txt', (err) =>{
    if(!err) {
        console.log('Delete Successful!');
    }
})
