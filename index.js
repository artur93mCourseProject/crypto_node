const {createHmac} = require('crypto');

const salt = 'asgdjasgdkuyqwtyue1t3768|}|{WBJH$#D\\sdskdfnkjshk ; s';
const hash = createHmac('sha512', salt)
    .update('Hello world from Mega Kurs')
    .digest("hex");

console.log(hash);
