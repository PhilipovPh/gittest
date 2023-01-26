function solve(numb) {
    let stringNumb = numb.toString();
    let sum = 0;

    for (let i = 0; i< stringNumb.length; i++) {
        sum += Number(stringNumb[i]);
    
    }
    console.log(sum);
}

solve(2222);