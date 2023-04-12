function solution(emergency) {
    let sort = emergency.slice().sort((a,b) => b - a);
    return emergency.map(el => sort.indexOf(el) + 1);    
}