
// --------------------------------------------------
// PART 1 : CREATE THE PROJECT
// --------------------------------------------------

// 1- Make you project a NPM project
// ***** npm init -y

// 2- Install NPM axios package 
// ***** npm i axios

// 3 -Require thie package in your main.js
const axios = require('axios');
const chalk = require('chalk');

// 4- Send a get request to this endpoint : 'https://random-words-api.vercel.app/word'
//		and print the result of the request in the console
const url = 'https://random-words-api.vercel.app/word'
axios
.get(url)
.then(respone => console.log(chalk.bgBlue(respone.data[0].word)));


// 5 - Install NPM chalk package 
// 		 Change the display in the console as you want using chalk 
//		 https://www.npmjs.com/package/chalk
//***** npm install chalk(i challk)


// 7 Run it : it should work

console.log(chalk.red.bgGreen('welcome chalk'));

// --------------------------------------------------
// PART 2 : PUSH.. BUT NOT ALL
// --------------------------------------------------

// 1- Create a new GITHUB repository and close it

// 2- Put the previous code on it

// 3- Create a file  .gitignore file:
//			It should contain the line: 
//			/node_modules 

// 4- Commit and push
//		Check the /node_modules folder is NOT on gitHub

// 5- Clone your project again (new folder)

// 6- INstall the NPM dependancies

// 7 Run it : it should work and you should have the /node_modules created
