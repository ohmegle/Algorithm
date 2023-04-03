function solution(sides) {
    let arr = sides.sort((a,b) => a - b);
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[0] + arr[1] > arr[2]) return 1;
        else return 2;
    }
}