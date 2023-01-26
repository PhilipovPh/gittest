function solve(yield) {
    let spiceMined = 0;
    let dayCount = 0;

    for (let i = yield; i >= 100; i = i - 10) {
        spiceMined += i - 26;
        dayCount++;
        if (yield < 100) {
            spiceMined -= 26;
        }
    }

    console.log(dayCount);
    console.log(spiceMined);
}



function solve (yield) {
    let dayCount = 0;
    let spiceMined = 0;

    while (yield >= 100) {
        let extracted = yield -26;
        spiceMined += extracted;
        dayCount++;
        yield -= 10;
        if (yield < 100) {
            spiceMined -= 26;
        }
    }
    console.log(dayCount);
    console.log(totalSpiceMined);
}


solve(111)