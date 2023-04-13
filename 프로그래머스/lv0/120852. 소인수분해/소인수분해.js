function solution(n) {
    let arr = [];
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        while(n % i === 0) {
            arr.push(i);
            n = n / i;
        }
    }
    
    if(n >= 2) {
        arr.push(n);
    }
    
    let answer = Array.from(new Set(arr));
    
    return answer;
}