function solution(start, end) {
    let answer = [];
    
    for(let i = 0; i < end - start + 1; i++) {
        answer.push(start + i);
    }
    
    return answer;
}