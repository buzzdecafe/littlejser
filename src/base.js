
function cons(x, y) {
    var fn = function(pick) {
        return pick(x, y);
    };

    // for display:
    fn.toString = function() {
        return "(" + asArray(this).join(" ") + ")";
    };
    // to support isAtom function
    fn.pair = true;

    return fn;
}

function car(f) {
    return f(function(x, y) { return x; });
}

function cdr(f) {
    return f(function(x, y) { return y; });
}

// helpers
function list() {
    var args = Array.prototype.slice.call(arguments);
    return (args.length === 0) ? null : cons(args.shift(), list.apply(null, args));
}

function asArray(list) {
    var arr = arguments[1] || [];
    return (list && car(list)) ? (arr.push(car(list)), asArray(cdr(list), arr)) : arr;
}

function asList(arr) {return list.apply(null, arr);}