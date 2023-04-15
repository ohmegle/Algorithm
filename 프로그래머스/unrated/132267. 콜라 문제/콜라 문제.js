function solution(a, b, n) {
    let answer = 0;
    let bottle = n;
    
    while(true) {
        if(a > bottle) {
            break;
        }
        answer += parseInt(bottle / a) * b;
        bottle = parseInt(bottle / a) * b + bottle % a;
    }
    
    return answer;
}