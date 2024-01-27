// let input = require('fs').readFileSync('example.txt').toString().split('\n');




function solution(s,b){
    let answer=true;
    let duplicCheckArr=[];
    let dupYn=false;
    
    data={}
    s.forEach((element,index) => {
        //문자에 암호대입
        data[element]=b[index];
    });

    //암호대입 중복체크
    duplicCheckArr=Object.values(data)
    for(let i = 0; i < duplicCheckArr.length; i++) {
        const currElem = duplicCheckArr[i];
        
        for(let j = i+1; j < duplicCheckArr.length; j++) {
          if(currElem === duplicCheckArr[j]) {
            dupYn = true;
            break;
          }
        }
        if(dupYn)  {
          break;
        }
      }

     return !dupYn
}


const str="hello";
// const code="bbvmu";
const code="cbvvu";


let result =solution([...str],[...code]);
console.log("결과: "+ result)