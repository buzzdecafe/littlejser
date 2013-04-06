/*
    Numbers Games
*/

function add1(n) {
    return n + 1;
}

function sub1(n) {
    return n - 1;
}

function plus(n, m) {
    return (m === 0) ? n : add1(plus(n, sub1(m)));
    //return (n === 0) ? m : plus(sub1(n), add1(m));
}

function minus(n, m) {
    return (m === 0) ? n : sub1(minus(n, sub1(m)));
}

function addtup(tup) {
    return (tup === null) ? 0 : plus(car(tup), addtup(cdr(tup)));
}

function x(n, m) {
    return (m === 0) ? 0 : plus(n, x(n, sub1(m)));
}

function tupplus(tup1, tup2) {
    return  (tup1 === null) ? tup2 :
            (tup2 === null) ? tup1 :
            cons(plus(car(tup1, car(tup2))), tupplus(cdr(tup1), cdr(tup2)));
}

function gt(n, m) {
    return  (n === 0) ? false :
            (m === 0) ? true :
            gt(sub1(n), sub1(m));
}

function lt(n, m) {
    return  (m === 0) ? false :
            (n === 0) ? true :
            lt(sub1(n), sub1(m));
}

function eqnum(n, m) {
    return  (m === 0) ? (n === 0) :
            (n === 0) ? false :
            eqnum(sub1(n), sub1(m));
}

function expt(n, m) {
    return (m === 0) ? 1 :
        x(n, expt(n, sub1(m)));
}

function divide(n, m) {
    return lt(n, m) ? 0 :
        add1(divide(minus(n, m), m));
}

function length(lat) {
    return (lat === null) ? 0 : add1(length(cdr(lat)));
}

function pick(n, lat) {
    return sub1(n) === 0 ? car(lat) : pick(sub1(n), cdr(lat));
}

function rempick(n, lat) {
    return sub1(n) === 0 ? cdr(lat) : cons(car(lat), rempick(sub1(n), cdr(lat)));
}

function number(x) {
    return typeof x === "number";
}

function nonums(lat) {
    return  (lat === null) ? null :
            number(car(lat)) ? nonums(cdr(lat)) :
            cons(car(lat), nonums(cdr(lat)));
}

function allnums(lat) {
    return  (lat === null) ? null :
            number(car(lat)) ? cons(car(lat), allnums(cdr(lat))) :
            allnums(cdr(lat));
}

function eqan(a1, a2) {
    return a1 === a2;
}

function occur(a, lat) {
    return (lat === null) ? 0 :
        eqan(a, car(lat)) ? add1(occur(a, cdr(lat))) :
        occur(a, cdr(lat));
}

function one(n) {
    return n === 1;
}

// rewritten with "one"
function rempick(n, lat) {
    return one(n) ? cdr(lat) : cons(car(lat), rempick(sub1(n), cdr(lat)));
}