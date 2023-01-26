function solve(input) {
    let gold = 67.51;
    let bitcoin = 11949.16;
    let bitcoinMined = 0;
    let bitcoinPerRound = 0;
    let dayCount = 0;
    let firstDay = 0;
    let minedGold = 0;
    let goldValue = 0;
    let coinCount = 0

    for (let i = 0; i < input.length; i++) {
        dayCount++;
        minedGold = Number(input[i]);

        if (dayCount % 3 === 0) {
            minedGold *= 0.7;
        }
        goldValue += gold * minedGold;

        if (goldValue >= bitcoin) {
            bitcoinMined += Math.floor(goldValue / bitcoin);
            bitcoinPerRound = Math.floor(goldValue / bitcoin)
            goldValue -= bitcoinPerRound * bitcoin;
            coinCount++;
            
            if (coinCount === 1) {
                firstDay = dayCount;
            }
        }
    }
   if (coinCount >= 1) {
    console.log(`Bought bitcoins: ${bitcoinMined}`);
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    console.log(`Left money: ${goldValue.toFixed(2)} lv.`);

   } else {
    console.log(`Bought bitcoins: ${bitcoinMined}`);
    console.log(`Left money: ${goldValue.toFixed(2)} lv.`);

   }
}
solve([100, 200, 300])