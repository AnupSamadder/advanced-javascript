// const numbers = [ 2, 3, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// const numbers = [ 2, 3, 5, 6, 7, 8];
// const result = numbers.map(function(element){
//     return element * element;
//  })

// const numbers = [ 2, 3, 5, 6, 7, 8];
// const result = numbers.map(x => x * x);
// console.log(result);

 const numbers = [ 2, 3, 5, 6, 7, 8];
const bigger = numbers.filter(x => x < 2);

const finding = numbers.find(x => x > 2);
console.log(finding);
