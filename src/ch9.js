function keeplooking(a, sorn, lat) {
    return number(sorn) ? keeplooking(a, pick(sorn, lat), lat) : sorn === a;
}

function looking(a, lat) {
    keeplooking(a, pick(1, lat), lat);
}

// BOOOOOOOOM
function eternity(x) {
    return eternity(x);
}

function shift(pair) {
    return build(first(first(pair)), build(second(first(pair)), second(pair)));
}

function align(pora) {
    return atom(pora) ? pora :
        apair(first(pora)) ? align(shift(pora)) :
            align(second(pora));
}

function lengthStar(pora) {
    return atom(pora) ? 1 : plus(lengthStar(first(pora)), lengthStar(second(pora)));
}

function weightStar(pora) {
    return atom(pora) ? 1 : plus(x(weightStar(first(pora)), 2), weightStar(second(pora)));
}

function shuffle(pora) {
    return atom(pora) ? pora :
        apair(first(pora)) ? shuffle(revpair(pora)) :
            build(first(pora), suffle(second(pora)));
}

function C(n) {
    return one(n) ? 1 : even(n) ? C(n/2) : C(add1(x(3, n)));
}

function A(n, m) {
    return n === 0 ? add1(m) : m === 0 ? A(sub1(n), 1) : A(sub1(n), A(n, sub1(m)));
}

// deriving Y starts here .....

// only works for empty list! only works for lazy evaluated language!
var anon = function (l) {
    return l === null ? 0 : add1(eternity(cdr(l))); // BOOOOOOM
}



