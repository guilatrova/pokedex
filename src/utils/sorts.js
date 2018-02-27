function isNumeric(a) {
    return !isNaN(a);
}

// function isString(a) {
//     return (typeof a === 'string' || a instanceof String);
// }

export function sort(a, b, order) {
    if(isNumeric(a) && isNumeric(b)) {
        if (order === 'asc')
            return a - b;
        return b - a;
    }
    
    if (isNumeric(a)) {
        return (order === 'asc' ? -1 : 1);
    }
    
    if (isNumeric(b)) {
        return (order === 'asc' ? 1 : -1);
    }    

    a = a.toUpperCase();
    b = b.toUpperCase();

    if (order === 'desc')
        return (b > a) ? 1 : -1;
    
    return (a > b) ? 1 : -1;
}