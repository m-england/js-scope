var factorial = (function cacheValues() {
    let cache = {};
    return (x) => {
        if (x < 2) return 1;
        if (!(x in cache)) {
            cache[x] = x * factorial(x - 1);
        }
        return cache[x];
    }
})();

let answer = factorial(6);

console.log(answer);