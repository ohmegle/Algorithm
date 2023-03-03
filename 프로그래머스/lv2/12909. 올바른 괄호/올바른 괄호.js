// function solution(s){
//     let count = 0; //count 변수 선언 

//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === "(") count++; //여는 괄호일 경우 count 1증가
//         else if(s[i] === ")") count--; // 이미 스택이 차있다면 count 1 감소
        
//         if(count < 0)return false; // 그 외에 (count가 0이 아닌 경우는 괄호 순서가 틀린경우니까) false;
//     }

//     return count === 0; // count가 0이면 true이고, count가 0이 아니면 false 반환
// }



function solution(s){
    let count = 0; //count 변수 선언 

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") count++; //여는 괄호일 경우 count 1증가
        else if(count !== 0) count--; // 이미 스택이 차있다면 count 1 감소
        else return false; // 그 외에 (count가 0이 아닌 경우는 괄호 순서가 틀린경우니까) false;
    }

    return count === 0; // count가 0이면 true이고, count가 0이 아니면 false 반환
}