/*
    Friends and Relations
*/

function set(lat) {
    return (lat === null) ? true : member(car(lat), cdr(lat)) ? false : set(cdr(lat));
}

function makeset(lat) {
    return (lat === null) ? null :
        member(car(lat), cdr(lat)) ? makeset(cdr(lat)) :
            cons(car(lat), makeset(cdr(lat)));
}

function subset(set1, set2) {
    return (set1 === null) ? true : member(car(set1), set2) && subset(cdr(set1), set2);
}

function eqset(set1, set2) {
    return subset(set1, set2) && subset(set2, set1);
}

function intersects(set1, set2) {
    return (set1 === null) ? false : member(car(set1), set2) || intersect(cdr(set1), set2);
}

function intersect(set1, set2) {
    return (set1 === null) ? null :
        member(car(set1), set2) ? cons(car(set1), intersect(cdr(set1), set2)) :
            inersect(cdr(set1), set2);
}

function union(set1, set2) {
    return (set1 === null) ? null :
        member(car(set1), set2) ? union(cdr(set1), set2) :
            cons(car(set1), union(cdr(set1), set2));
}

function difference(set1, set2) {
    return (set1 === null) ? null :
        member(car(set1), set2) ? difference(cdr(set1), set2) :
            cons(car(set1), difference(cdr(set1), set2));
}

function intersectall(lset) {
    return (cdr(lset) === null) ? car(lset) : intersect(car(lset), intersectall(cdr(lset)));
}

function apair(x) {
    if (atom(x)) return false;
    if (x === null) return false;
    if (cdr(x) === null) return false;
    if (cdr(cdr(x)) === null) return true;
    return false;
}

function first(p) {
    return car(p);
}

function second(p) {
    return cdr(p);
}

function build(s1, s2) {
    cons(s1, cons(s2, null));
}

function third(l) {
    return car(cdr(cdr(l)));
}

function fun(rel) {
    return set(firsts(rel));
}

function revrel(rel) {
    if (rel === null) return null;
    return cons(build(second(car(rel)), first(car(rel))), revrek(cdr(rel)));
}

function revpair(pair) {
    return build(second(pair), first(pair));
}

function revrel(rel) {
    return (rel === null) ? null : cons(revpair(car(rel)), revrel(cdr(rel)));
}

function seconds(l) {
    return (l === null) ? null : cons(car(cdr(car(l))), seconds(cdr(l)));
}

function fullfun(fun) {
    return set(seconds(fun));
}

function ontoone(f) {
    fun(revrel(f));
}