function solve(a, b, c) {
    if (a >= b && a >= c) {
        if (b >= c) {
            console.log(a);
            console.log(b);
            console.log(c);
        } else if (c >= b) {
            console.log(a);
            console.log(c);
            console.log(b);
        }
    } else if (b >= a && b >= c) {
        if (a >= c) {
            console.log(b);
            console.log(a);
            console.log(c);
        } else if (c >= a) {
            console.log(b);
            console.log(c);
            console.log(a);
        }
    } else if (c >= b && c >= a) {
        if (b >= a) {
            console.log(c);
            console.log(b);
            console.log(a);
        } else if (a >= b) {
            console.log(c);
            console.log(a);
            console.log(b);
        }
    }
}

solve(-2, 0, 0);