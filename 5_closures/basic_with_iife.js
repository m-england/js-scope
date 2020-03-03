var factorial = (function cacheValues() {
    var cache = {};
    function factorial(x) {
        if (x < 2) return 1;
        if (!(x in cache)) {
            cache[x] = x * factorial(x - 1);
        }
        return cache[x];
    }
    return factorial;
})();


let answer = factorial(6);

console.log(answer);