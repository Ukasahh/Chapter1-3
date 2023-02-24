const fs = require('fs');

const callback = (err, data) => {
    //do process
    if (!err){
        console.log('kedua')
        console.log(data);
    }
};

fs.readFile('test.txt',{encoding:'utf-8'},callback);
console.log('pertama')