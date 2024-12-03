function funcA() {
    // console.log("funA");
}

let varA = funcA;
// console.log(varA);

let varB = function () {
    // console.log("funcB");
}
varB()


// ARROW FUNCTION
let varC = () =>  1;


console.log(varC());
