function solution(my_string) {
    return [...my_string].filter((el, a) => my_string.indexOf(el) === a).join('');
}