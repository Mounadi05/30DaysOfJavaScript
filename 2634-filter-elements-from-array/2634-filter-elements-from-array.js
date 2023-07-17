/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var returnedArray = []
    for(let i = 0; i < arr.length ; i++)
        if(fn(arr[i],i))
            returnedArray.push(arr[i]);
    return  returnedArray;
};