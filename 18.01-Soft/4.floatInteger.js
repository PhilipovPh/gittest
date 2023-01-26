function solve(n, n1, n2) {
    let sum  = n + n1 + n2;
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}