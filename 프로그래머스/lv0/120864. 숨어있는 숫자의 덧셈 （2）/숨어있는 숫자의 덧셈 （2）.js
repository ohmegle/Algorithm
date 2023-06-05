function solution(my_string) {
    let answer = 0;
    
    for(let i = 0; i < my_string.length; i++) {
        let result = 0;
        while(!Number.isNaN(Number(my_string[i]))) {
            result += my_string[i];
            i++;
        }
        answer += Number(result);
    }
    
    return answer;
}