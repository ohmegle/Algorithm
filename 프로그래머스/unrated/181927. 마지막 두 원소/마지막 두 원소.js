function solution(num_list) {
    let answer = num_list;
    const last = num_list[num_list.length - 1];
    const before = num_list[num_list.length - 2];
    
    if(last > before) answer.push(last - before);
    else answer.push(last * 2);
    
    return answer;
}