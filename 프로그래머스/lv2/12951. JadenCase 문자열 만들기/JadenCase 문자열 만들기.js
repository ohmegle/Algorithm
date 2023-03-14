function solution(s) {
    return s.split(" ").map(e => {
        if(e === "") return e;    
        return e[0].toUpperCase() + e.slice(1).toLowerCase();
    }).join(" ");
}