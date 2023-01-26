function solve(str, char, result) {
    let res = str.replace('_', char);
    final = res === result? 'Matched' : 'Not Matched';
    console.log(final);
}