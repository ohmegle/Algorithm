function solution(array, height) {
    let answer = array.filter(el => el > height);
    return answer.length;
}