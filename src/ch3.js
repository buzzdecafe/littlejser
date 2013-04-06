/*
    Cons the Magnificent
*/

function rember(a, lat) {
    if (lat === null) return null;
    if (car(lat) === a) return cdr(lat);
    return cons(car(lat), rember(a, cdr(lat)));
}

function firsts(l) {
    if (l === null) return null;
    return cons(car(car(l)), firsts(cdr(l)));
}

function insertR(_new, old, lat) {
    if (lat === null) return null;
    if (car(lat) === old) return cons(old, cons(_new, cdr(lat)));
    return cons(car(lat), insertR(_new, old, cdr(lat)));
}

function insertL(_new, old, lat) {
    if (lat === null) return null;
    if (car(lat) === old) return cons(_new, cons(_old, cdr(lat)));
    return cons(car(lat), insertL(_new, old, cdr(lat)));
}

function subst(_new, old, lat) {
    if (lat === null) return null;
    if (car(lat) === old) return cons(_new, cdr(lat));
    return cons(car(lat), subst(_new, old, cdr(lat)));
}

function subst2(_new, o1, o2, lat) {
    if (lat === null) return null;
    if (car(lat) === o1 || car(lat) === o2) return cons(_new, cdr(lat));
    return cons(car(lat), subst2(_new, o1, o2, cdr(lat)));
}

function multirember(a, lat) {
    if (lat === null) return null;
    if (car(lat) === a) return multirember(a, cdr(lat));
    return cons(car(lat), multirember(a, cdr(lat)));
}

function multiinsertR(_new, old, lat) {
    if (lat === null) return null;
    if (car(lat) === old) return cons(old, cons(_new, multiinsertR(_new, old, cdr(lat))));
    return cons(car(lat), multiinsertR(_new, old, cdr(lat)));
}

function multiinsertL(_new, old, lat) {
    if (lat === null) return null;
    if (car(lat) === old) return cons(_new, cons(_old, multiinsertL(_new, old, cdr(lat))));
    return cons(car(lat), multiinsertL(_new, old, cdr(lat)));
}

function multisubst(_new, old, lat) {
    if (lat === null) return null;
    if (car(lat) === old) return cons(_new, multisubst(_new, old, cdr(lat)));
    return cons(car(lat), multisubst(_new, old, cdr(lat)));
}

