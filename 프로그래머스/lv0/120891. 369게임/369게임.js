function solution(order) {
    let answer = 0;
    order = [...order.toString()];
   
    for(let el of order) {
        if(el === "0") continue;
        else if(el % 3 === 0) answer++;
    }
    
    return answer;
}