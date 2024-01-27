// let input = require('fs').readFileSync('example.txt').toString().split('\n');


function solution(friends, gifts) {
    var answer = 0;
    let person = {};
    friends.forEach(name => {
        person[name] = {
            send: {},
            receive: {},
            nextReceive: 0,
            point: 0
        };
        friends.forEach(name2 => {
            person[name].send = {
                ...person[name].send,
                [name2]: 0
            }
            person[name].receive = {
                ...person[name].receive,
                [name2]: 0
            }
        })
    })
    
    // 선물지수가 클수록 선물을 많이 준것
    gifts.forEach(data => {
        let d = data.split(' ');
        let sender = d[0];
        let receiver = d[1];
        person[sender].send[receiver]++;
        person[sender].point++;
        person[receiver].receive[sender]++;
        person[receiver].point--;
    })
    
    for(let i=0; i<friends.length-1; i++){
        for(let k=i+1; k<friends.length; k++){
            if(
                person[friends[i]].send[friends[k]] > person[friends[k]].send[friends[i]]
            ) {
                person[friends[i]].nextReceive++;
            } else if (
                person[friends[i]].send[friends[k]] < person[friends[k]].send[friends[i]]
            ) {
                person[friends[k]].nextReceive++;
            } else if (
                person[friends[i]].send[friends[k]] === person[friends[k]].send[friends[i]]
            ) {
                if(person[friends[i]].point > person[friends[k]].point){
                    person[friends[i]].nextReceive++;
                } else if (person[friends[i]].point < person[friends[k]].point){
                    person[friends[k]].nextReceive++;
                }
            }
        }
    }
    

    let result = Object.entries(person).sort((a, b) => a[1].nextReceive - b[1].nextReceive);
    answer = result[result.length-1][1].nextReceive;

    
    
    return answer;
}


let result =solution(["a", "b", "c"],["a b", "b a", "c a", "a c", "a c", "c a"])
console.log(result);