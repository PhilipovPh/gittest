function solve(numb) {
    let result = ''

    if (numb === 1) {
        result = 'false'
    } else if (numb === 2) {
        result = 'true';
    } else {
        for (let i = 2; i < numb; i++) {
            if (numb % i === 0) {
                result = 'false';
                break;
            } else {
                result = 'true';
            }
        }

    }
    console.log(result);

}

solve(8);