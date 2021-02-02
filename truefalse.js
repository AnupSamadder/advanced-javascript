// falsy{ 0;, "", undefined, null, NaN, false }

//  Trufy{ "0", " ", {}, [] }

let name = 10;
console.log(name);
if(name || name == 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}