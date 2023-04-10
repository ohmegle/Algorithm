function solution(n, t) {
    let arr = new Array(t);
    let num = n;
    
    for(let i = 0; i < arr.length; i++) {
        num = num * 2;
        arr[i] = num;
    }
    
    return arr[t - 1];
}