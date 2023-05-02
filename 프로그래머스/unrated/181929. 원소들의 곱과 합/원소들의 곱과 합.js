function solution(num_list) {
    let a = num_list.reduce((acc, cur) => acc * cur);
    let b = Math.pow(num_list.reduce((acc, cur) => acc + cur), 2);
    
    return a < b ? 1 : 0;
}