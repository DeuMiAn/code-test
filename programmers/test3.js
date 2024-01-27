// let input = require('fs').readFileSync('example.txt').toString().split('\n');




function solution(before, after){
    let answer=0;
    let newArr=[];
    let temp;
    
    console.log(before);
    console.log(after);
    //a배열을->b배열로 변경할때
    // 최소로 변경
    // 수식은 대략 중복이면 +1회인듯함

    // 배열을 비교검사
    // 검사방식은 af->bf배열을 돌아가면서 검사함
    // 이때 중복이 있으면 temp에 일단 저장후 해당인덱스로 이동
    // af해당 인덱스로 bf 검사했을떄 또 있으면 일단 저장 
    // 위 과정 반복후 더이상 없을떄 해당 인덱스 교체



    isDone=false;
    while(!isDone){
        if(JSON.stringify(after)==JSON.stringify(before)){
            isDone=true;
        }
     
        for(i=0;i<after.length;i++){
            let select=after[i];
            if(select==before[i]){
                //옴길필요가 없는 상황
                continue;
            }

            //여기서 완변학 중복처리를 위한 처리
            isDuplic=false
            for(j=0;j<before.length;j++){
                if(before[j]==select){
                    isDuplic=true;
                    answer++;
                    temp=before[j];
                    before[j]=after[j];
                    answer++;
                    break;
                }
            }
            if(!isDuplic){
                answer++;
                before[i]=after[i];
                temp='';
            }
            
            // while(duplicCheck){
            //     if(select2!=""){
            //         bf.forEach((element,idx)=>{
            //             if(idx==select2Idx)
            //                 continue;
            //             if(element==select2){
            //                select2=element;
            //                temp=element;
            //                break;
            //             }else{
            //                 break;
            //             }
            //         })

            //     }else{
                    // bf.forEach((element,idx)=>{
                    //     if(element==select){
                    //        select2=af[idx];
                    //        select2Idx=idx;
                    //        temp=element;
                    //        break;
                    //     }
                    // })
            //     }
            // }
            
     

        }


    }

    

    

}


const bf=["A","B","C","D"];
const af=["B","Z","D","C"];
// const af=["B","C","A"];
// const str="1011";
// const str="0110011";

let result =solution(bf,af);
// console.log("결과: "+ result)