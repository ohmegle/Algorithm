function solution(n) {
    // n이 홀수라면 n이하 모든 홀수의 제곱의 합 return
    // n이 짝수라면 n이하 모든 짝수의 제곱의 합 return
    let answer = 0;
    
    if(n % 2 === 1) {
       for(let i = n; i > 0; i--) {
           if(i % 2 === 1) answer += i;
       }
    } else {
        for(let i = n; i > 0; i--) {
            if(i % 2 === 0) answer += i**2;
        }
    }
    
    return answer;
}