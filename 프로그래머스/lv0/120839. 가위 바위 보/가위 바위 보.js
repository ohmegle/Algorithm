function solution(rsp) {
    let answer = "";
    
    for(let i = 0; i < rsp.length; i++) {
        let num = rsp.charAt(i);
        if(num === "2") answer += "0";
        if(num === "0") answer += "5";
        if(num === "5") answer += "2";
    }
    
    return answer;
}