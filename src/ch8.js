/*
    Lambda the Ultimate
*/

function remberf(test, a, l) {
    return (l === null) ? null :
        test(car(l), a) ? cdr(l) :
            cons(car(l), remberf(test, a, cdr(l)));
}

function eqc(a) {
    return function(x) {
        return x === a;
    }
}

var eqcsalad = eqc("salad");

function remberf(test) {
    return function(a, l) {
        return (l === null) ? null :
            test(car(l), a) ? cdr(l) :
                cons(car(l), remberf(test, a, cdr(l)));
    }
}

function insertLf(test) {
    return function(_new, old, l) {
        return l === null ? null :
            test(car(l), old) ? cons(_new, cons(old, cdr(l))) :
                cons(car(l), insertLf(test)(_new, old, cdr(l)));
    }
}

function seqL(_new, old, l) {
    return cons(_new, cons(old, l));
}

function seqR(_new, old, l) {
    return cons(old, cons(_new, l));
}

function insertg(seq) {
    return function(_new, old, l) {
        return l === null ? null :
            car(l) === old ? seq(_new, old, cdr(l)) :
                cons(car(l), insertg(seq(_new, old, l)));
    }
}

var insertL = insertg(seqL);

var insertR = insertg(seqR);

function seqS(_new, old, l) {
    return cons(_new, l);
}

var subst = insertg(seqS);

function seqrem(_new, old, l) {
    return l;
}

var rember = insertg(seqrem);

function atomtofunction(x) {
    return x === "+" ? plus : x === "*" ? x : expt;
}

function value(nexp) {
    return atom(nexp) ? nexp : atomtofunction(operator(nexp))(value(firstSubExp(nexp)), value(secondSubExp(nexp)));
}

function multiremberf(test) {
    return function(a, lat) {
        return lat === null ? null :
            test(a, car(lat)) ? multiremberf(test)(a, cdr(lat)) :
                cons(car(lat), multiremberf(test)(a, cdr(lat)));
    }
}

function multiremberT(test, lat) {
    return lat === null ? null :
        test(car(lat)) ? multiremberT(test, cdr(lat)) :
            cons(car(lat), multiremberT(test, cdr(lat)));
}


function multiremberco(a, lat, col) {
    if (lat === null) { return col(null, null); }
    if (car(lat) === a) {
        return multiremberco(a, cdr(lat), function(newlat, seen) { return col(newlat, cons(car(lat), seen)); })
    } else {
        return multiremberco(a, cdr(lat), function(newlat, seen) { return col(cons(car(lat), newlat), seen); })
    }
}

function multiinsertLR(_new, oldL, oldR, lat) {
    if (lat === null) return null;
    if (car(lat) === oldL) return cons(_new, cons(oldL, multiinsertLR(_new, oldL, oldR, cdr(lat))));
    if (car(lat) === oldR) return cons(oldR, cons(_new, multiinsertLR(_new, oldL, oldR, cdr(lat))));
    return cons(car(lat), multiinsertLR(_new, oldL, oldR, cdr(lat)));
}

function multiinsertLRco(_new, oldL, oldR, lat, col) {
    if (lat === null) return null;
    if (car(lat) === oldL) return cons(_new, cons(oldL, multiinsertLRco(_new, oldL, oldR, cdr(lat), function(newlat, L, R) {
        return col(cons(_new, cons(oldL, newlat)), add1(L), R);
    })));
    if (car(lat) === oldR) return cons(oldR, cons(_new, multiinsertLRco(_new, oldL, oldR, cdr(lat), function(newlat, L, R) {
        return col(cons(oldR, cons(_new, newlat)), L, add1(R));
    })));
    return cons(car(lat), multiinsertLRco(_new, oldL, oldR, cdr(lat), function(newlat, L, R) {
        return col(cons(car(lat), newlat, L, R));
    }));
}

function even(n) {
    return n % 2 === 0;
}

function evensonlyStar(l) {
    if (l === null) return l;
    if (atom(car(l))) {
        if (even(car(l))) return cons(car(l), evensonlyStar(cdr(l)));
        else return evensonlyStar(cdr(l));
    } else {
        return cons(evensonlyStar(car(l)), evensonlyStar(cdr(l)));
    }
}

function evensonlyStarco(l, col) {
    if (l === null) return l;
    if (atom(car(l))) {
        if (even(car(l))) return cons(car(l), evensonlyStarco(cdr(l), function(newl, p, s) {
            return col(cons(car(l), newl), x(car(l), p), s);
        }));
        else return evensonlyStarco(cdr(l), function(newl, p, s) {
            return col(newl, p, plus(car(l), s));
        });
    } else {
        return evensonlyStarco(car(l), function(al, ap, as) {
            return evensonlyStarco(cdr(l), function(dl, dp, ds) {
                col(cons(al, dl), x(ap, dp), plus(as, ds));
            });
        });

    }
}


