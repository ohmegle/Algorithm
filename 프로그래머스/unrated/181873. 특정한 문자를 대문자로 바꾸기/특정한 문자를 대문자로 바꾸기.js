function solution(my_string, alp) {
    return [...my_string].map((el) => el === alp ? alp.toUpperCase() : el).join('');
}