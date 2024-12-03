// for

/* for (초기식; 조건식; 증감식;){
    
} */

/* 
for (let index = 0; index<5; index++){
    console.log("몇번 증감을 했는지 확인하는 로그 : ",index);
} */

for (let index = 1; index <= 10; index++) {
  console.log("몇번 증감을 했는지 확인하는 로그 : ", index);

  if(index >=5){
    console.log("멈춰~");
    break
  }
}
