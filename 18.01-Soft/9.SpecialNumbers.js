function solve(n) {
   

    for (let i = 1; i <= n; i++) {
        let numb = i.toString();
        let sum = 0;
        for (let index = 0; index < numb.length; index++) {
            sum += Number(numb[index]);
            
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${numb} -> True`);
        } else {
            console.log(`${numb} -> False`);
        }

    }
}

solve(7);