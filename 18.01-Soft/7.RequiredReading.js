function solve(pages, pagesPerHour, days) {
    let totalHourReading = pages / pagesPerHour;
    let totalDayHours = totalHourReading / days;
    console.log(totalDayHours);
}