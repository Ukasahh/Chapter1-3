const strArray =['js','golang','php'];

function forEach(array, callback){
    const newArray = [];

    array.forEach((data) =>{
        newArray.push(callback(data));
    });
    return newArray;
}

let hasil = forEach(strArray, (str) =>{
    return str.length;
});

console.log(hasil);