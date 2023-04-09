function solution(my_string) {
    let answer = 0;
    my_string.split('').map((el) => !isNaN(el) ? answer += Number(el) : 0);
    
    return answer;
}