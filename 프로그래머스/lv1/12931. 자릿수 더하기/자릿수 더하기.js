function solution(n) {
    let sum = 0;
    
    let arr = String(n).split('');
    for(let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}