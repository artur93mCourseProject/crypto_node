const { pbkdf2 } = require('crypto');

const originalText = 'Hello world';
const salt = 'jbsaudygasud613yi21heiuabdsbaduiqte821y3iu21bejb|}|{}@#BJH#BJ DBJHGGH@$# '

pbkdf2(originalText, salt, 100000, 64, 'sha512', (err,derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex'));
})
