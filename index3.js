const {hash, compare} = require('bcrypt');

const originalText = 'Hello world';

hash(originalText,10,(err,hash) => {
    if(err) {
        console.error(err);
    }
    console.log(hash);

    compare('Hello world', hash, (err, res)=>{
        if(res) {
            console.log('Logged in!');
        } else {
            console.log('Nope!');
        }
    })
})


