/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let temp = [...this];
    let arr = {};
    for(let i = 0; i < temp.length;i++)
    {
        let key = fn(temp[i]);
        if(!arr.hasOwnProperty(key))arr[key] = [];
        arr[key].push(temp[i]);
    }
    return arr;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */