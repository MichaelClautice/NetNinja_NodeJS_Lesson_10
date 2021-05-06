// Michael_Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 10 - Creating & Removing Directories
// -------
// this app will remove the writeMe.txt file from the app directory
var fs = require('fs');

// statement does not work:
// fs.unlink('writeMe.txt');

// statement requires a callback error function:

fs.unlink('writeMe.txt', function(err) {
    if (err) throw err;
    console.log('File deleted');
})