function solution(progresses, speeds) {
    // 첫번째 작업을 기준으로 잡는다.
    // 완료될 때까지 걸리는 시간을 계산한다.
    // 해당 시간을 기준으로 다음 작업을 계산한다.
    // 다음 작업이 완료될 시 포함한다.
    // 다음 작업이 완료가 안될 시 첫번째 작업은 내보내고, 다음 작업을 기준으로 잡는다.
    // 모든 작업이 완료될때까지 반복한다. 
    var answer = [];
    let count = 1;
    let time = 0; 

    for(let i=0; i<progresses.length; i++){     
        if(time === 0) {
            time = Math.ceil((100 - progresses[i]) / speeds[i]);
        } else if(time >= (100 - progresses[i]) / speeds[i]) {
            count++;  
        } else {
            answer.push(count);
            count = 1;
            time = Math.ceil((100 - progresses[i]) / speeds[i]);
        }
        
        if(i === progresses.length - 1) answer.push(count);
    }
    return answer;
}