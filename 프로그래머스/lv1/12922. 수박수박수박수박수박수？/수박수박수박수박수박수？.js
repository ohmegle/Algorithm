function solution(n) {
    let answer = '';
    let subak = "수박";
    
    for(let i = 0; i < n; i++) {
        answer += subak[i % 2];
    }
    
    return answer;
}