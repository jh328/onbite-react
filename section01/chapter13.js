/* // 콜백함수. 
function main(value) {
    console.log("호출 1");
    
    console.log("main 함수에 있는 log : ",value);

    console.log("호출 2");

}

function sub() {
    console.log("호출 3");

    console.log("sub 함수에 있는 log `I am Sub : ");
        
    console.log("호출 4");

}

console.log("호출전0");

main(sub)

console.log("호출 5");


console.log("호출후");
 */
// 예제. 

/* function repeat(count){
    for (let index =0; index <= count; index++){
        console.log("for 함수 index 확인하는 로직 : ",index);
    }
}

function repeatDouble(count){
    for (let index =0; index <= count; index++){
        console.log("for 함수 index 확인하는 로직 : ",index * 2);
    }
} 
이렇게 하면 코드가 길어지고 안좋으니 콜백함수를 사용을 하는게 좋다. 

*/


// repeat(5)
// repeatDouble(5)

function repeat(count,  callback){

}