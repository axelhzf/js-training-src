function map (array, fn) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fn(array[i]));
    }
    return result;
}

function curry (fn) {
    var curryArguments = Array.prototype.slice.call(arguments);
    curryArguments.splice(0, 1);
    return function () {
        var currentArguments = Array.prototype.slice.call(arguments);
        return fn.apply(null, curryArguments.concat(currentArguments));
    }
}

function memoize (fn) {
    var cache = {};
    return function (param1) {
        if (cache.hasOwnProperty(param1)) {
            return cache[param1];
        }else {
            var result = fn(param1);
            cache[param1] = result;
            return result;
        }
    }
}