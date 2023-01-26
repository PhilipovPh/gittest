function solve(n) {
    
    console.log('<div class="chessboard">');

    for (let row =0; row < n; row++) {
        console.log('  <div>');
        for (let col = 0; col < n; col++) {
            if (row === 1) {
                console.log(col % 2 === 0 ? '    <span class="white"></span>' : '    <span class="black"></span>');
            } else if (row % 2 === 0) {
                console.log(col % 2 === 0 ? '    <span class="black"></span>' : '    <span class="white"></span>');
            } else {
                console.log(col % 2 === 0 ? '    <span class="white"></span>' : '    <span class="black"></span>');
            }
        }
        console.log('  </div>');
    }
    console.log('</div>');
}

solve(8)