function solution(age) {
    let str = String(age);
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    
    return [...str].map((el) => alphabet[el]).join("");
}