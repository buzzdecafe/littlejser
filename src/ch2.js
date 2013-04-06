/*
    Do it, do it again, and again, and again ...
*/

function isLat(l) {
    return (l === null) ? true :
           atom(car(l)) ? isLat(cdr(l)) :
           false;
}

function member(a, lat) {
    return (lat === null) ? false : car(lat) === a || member(a, cdr(lat));
}