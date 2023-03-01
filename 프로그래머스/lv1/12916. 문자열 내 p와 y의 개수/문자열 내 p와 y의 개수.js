function solution(s){
    let a = s.toUpperCase().split('')
    
    let pCount = 0;
    let yCount = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] === "P") pCount++;
        else if(a[i] === "Y") yCount++;
    }
    
    if(pCount === yCount) return true;
    else return false;
}