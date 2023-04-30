function solution(a, b) {
    let first = String(a) + String(b);
    let second = String(b) + String(a);
    
    return first > second ? Number(first) : Number(second);
}