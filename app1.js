// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 10 - Creating & Removing Directories
// -------
// this app will remove the writeMe.txt file from the app directory
const fs = require('fs');

// statement does not work:
// fs.unlink('writeMe.txt');

// statement requires a callback error function:

fs.unlink('writeMe.txt', function(error) {
    if (error) throw error;
    console.log('\nFile deleted!\n');
})