function solve(n) {
    let lastN = n % 10;

    if (n < 0) {
        lastN = Math.abs(lastN);
    }

    let engN = "";

    switch (lastN) {
        case 0:
            engN = "zero";
            break;
        case 1:
            engN = "one";
            break;
        case 2:
            engN = "two";
            break;
        case 3:
            engN = "three";
            break;
        case 4:
            engN = "four";
            break;
        case 5:
            engN = "five";
            break;
        case 6:
            engN = 'six';
            break;
        case 7:
            engN = 'seven';
            break;
        case 8:
            engN = "eight";
            break;
        case 9:
            engN = "nine";
            break;
    }
    console.log(engN);
}