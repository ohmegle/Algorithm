function solution(a, b) {
    let cal = String(a) + String(b);
    
    return 2 * a * b > cal ? 2 * a * b : Number(cal);
}