/**
 * @param {Function} fn
 */
function memoize(fn) {
    var memo = [];
    return function(...args) {
        let [a,b] = args;
        for(let i = 0;i < memo.length;i++)
            if (memo[i].a == a && memo[i].b == b)
                return memo[i].result;
        let result = fn(a,b);
        memo.push({a,b,result});
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */