// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 10 - Creating & Removing Directories
// -------
// this app will REMOVE a directory
var fs = require('fs');

// make a directory sync version
// fs.mkdirSync('stuff');

// remove a directory sync version
// fs.rmdirSync('stuff');

// make a directory async version
// 1 - make a drctry named stuff2
// 2 - read the data in readMe.txt
// 3 - write that data to a new writeMe.txt in the stuff2 drctry 
fs.mkdir('stuff2', function(){
// reading data from readMe.txt
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        console.log( "\ncreated directry and file\n");
        fs.writeFile('./stuff2/writeMe.txt', data, function(){});
    });
});

// remove a directory's contents & 
// then the dirctry - async version
/* fs.unlink('./stuff/writeMe.txt', function(err){
    fs.rmdir('./stuff/', function(){});
}); */