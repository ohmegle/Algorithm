function solution(cipher, code) {
    return [...cipher].filter((el, a) => (a + 1) % code === 0).join("");
}