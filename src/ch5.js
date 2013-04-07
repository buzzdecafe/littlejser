/*
    Oh My Gawd: It's Full of Stars
*/

function remberStar(a, l) {
    if (l === null) {
        return null;
    }
    if (atom(car(l))) {
        return car(l) === a ? remberStar(a, cdr(l)) : cons(car(l), remberStar(a, cdr(l)));
    } else {
        return cons(remberStar(a, car(l)), remberStar(a, cdr(l)));
    }
}

function insertRstar(_new, old, l) {
    if (l == null) return null;
    if (atom(car(l))) {
        return car(l) === old ? cons(old, cons(_new, insertRstar(_new, old, cdr(l)))) :
            cons(old, insertRstar(_new, old, cdr(l)));
    } else {
        return cons(insertRstar(_new, old, car(l)), insertRstar(_new, old, car(l)));
    }
}

function occurStar(a, l) {
    if (l === null) return null;
    if (atom(car(l))) {
        return (car(l) === a) ? add1(occurStar(a, cdr(l))) : occurStar(a, cdr(l));
    } else {
        return plus(occurStar(a, car(l)), occurStar(a, cdr(l)));
    }
}

function substStar(_new, old, l) {
    if (l === null) return null;
    if (atom(car(l))) {
        return (car(l) === old) ? cons(_new, substStar(_new, old, cdr(l))) : cons(old, substStar(_new, old, cdr(l)));
    } else {
        return cons(substStar(_new, old, car(l)), substStar(_new, old, car(l)));
    }
}

function insertLstar(_new, old, l) {
    if (l == null) return null;
    if (atom(car(l))) {
        return car(l) === old ? cons(_new, cons(_old, insertLstar(_new, old, cdr(l)))) :
            cons(old, insertLstar(_new, old, cdr(l)));
    } else {
        return cons(insertLstar(_new, old, car(l)), insertLstar(_new, old, car(l)));
    }
}

function memberStar(a, l) {
    if (l === null) return false;
    if (atom(car(l))) {
        return atom(car(l)) === a ? true : memberStar(a, cdr(lat));
    } else {
        return memberStar(a, car(l)) || memberStar(a, cdr(l));
    }
}

function leftmost(l) {
    if (l === null) return null;
    return atom(car(l)) ? car(l) : leftmost(car(l));
}

function eqlist(l1, l2) {
    if (l1 === null && l2 === null) return true;
    if (l1 === null || l2 === null) return false;
    if (atom(car(l1) && atom(car(l2)))) {
        if (car(l1) === car(l2)) return eqlist(cdr(l1), cdr(l2));
        else return false;
    } else if (atom(car(l1) && atom(car(l2)))) {
        return false;
    } else {
       return eqlist(car(l2)), eqlist(car(l2)) && eqlist(cdr(l1), cdr(l2));
    }
}

function equal(s1, s2) {
    if (atom(s1) && atom(s2)) {
        return s1 === s2;
    }
    if (atom(s1) || atom(s2)) return false;
    return eqlist(s1, s2);
}

function remberS(s, l) {
    if (l === null) return null;
    return (equal(car(l), s)) ? cdr(l) : cons(car(l), remberS(s, cdr(l)));
}




