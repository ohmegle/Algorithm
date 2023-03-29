function solution(array) {
    let mid = Math.floor(array.length / 2);
    array.sort((a, b) => a - b);
    return array[mid];
}