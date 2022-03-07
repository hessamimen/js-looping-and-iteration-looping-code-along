// Code your solutions in this file
function writeCards(names, event){
    let newArr = [];
    for(let i=0; i<names.length; i++){
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArr;
}
// console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

function countDown(num){
    let i = num;
    while(i>=0){
        console.log(i--);
        
    }
}
// countDown(10);
