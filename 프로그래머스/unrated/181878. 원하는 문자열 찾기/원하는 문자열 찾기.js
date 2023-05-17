function solution(myString, pat) {
    const word = pat.toLowerCase();
    
    return myString.toLowerCase().includes(word) ? 1 : 0;
}