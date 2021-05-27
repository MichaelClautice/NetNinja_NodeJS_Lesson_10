// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 10 - Creating & Removing Directories
// -------
// this app will create a directory
var fs = require('fs');

// make a directory sync version
// fs.mkdirSync('stuff');

// remove a directory sync version
// fs.rmdirSync('stuff');

// make a directory async version

// 1 - make a drctry named stuff
fs.mkdir('stuff', function(){
// 2 - read the data in readMe.txt
    fs.readFile('readMe.txt', 'utf8', function(err, data){
// console.log a test mssg
        console.log( "\nMike created directry and file\n");
// 3 - write that data to a new writeMe.txt & plaace it in the stuff drctry
        fs.writeFile('./stuff/writeMe.txt', data, function(){});
    });
});

