function solution(num_list) {
    let a = num_list.reduce((acc, cur) => acc + cur);
    let b = num_list.reduce((acc, cur) => acc * cur);
    
    return num_list.length >= 11 ? a : b;
}