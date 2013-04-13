/*
    Shadows
*/
function numbered(aexp) {
    if (atom(aexp)) return number(aexp);
    return numbered(car(aexp)) && numbered(car(cdr(cdr(aexp))));
}

function value(nexp) {
    if (atom(nexp)) return nexp;
    if (car(cdr(nexp)) === "+") return plus(value(car(nexp)), value(car(cdr(cdr(nexp)))));
    if (car(cdr(nexp)) === "*") return x(value(car(nexp)), value(car(cdr(cdr(nexp)))));
    return expt(value(car(nexp)), value(car(cdr(cdr(nexp)))));
}

function firstSubExp(aexp) {
    return car(cdr(aexp));
}

function secondSubExp(aexp) {
    return car(cdr(cdr(aexp)));
}

function operator(aexp) {
    return car(aexp);
}

function value(nexp) {
    if (atom(nexp)) return nexp;
    if (operator(nxp) === "+") return plus(value(firstSubExp(nexp)), value(secondSubExp(nexp)));
    if (operator(nxp) === "*") return x(value(firstSubExp(nexp)), value(secondSubExp(nexp)));
    return expt(value(firstSubExp(nexp)), value(secondSubExp(nexp)));
}

function sero(n) {
    return n === null;
}

function edd1(n) {
    //return cons(cons(null, null), n);
    return cons(list(null), n);
}

function zub1(n) {
    return cdr(n);
}

function pluz(n, m) {
    return sero(n) ? m : edd1(pluz(n, zub1(m)));
}
