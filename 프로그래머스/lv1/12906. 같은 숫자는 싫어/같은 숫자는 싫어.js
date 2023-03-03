function solution(arr)
{
    // 답을 담을 배열을 만든다.
    var answer = [];
      
        for(let i=0; i<arr.length; i++) { // 반복문을 순회하며
          if(arr[i] !== arr[i+1]) { //arr
              answer.push(arr[i]);
          } 
        }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}