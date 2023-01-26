function solve(radius, height) {
    let volume = (1 / 3) * Math.pow(radius, 2) * Math.PI * height;
    let surface = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)))

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surface.toFixed(4)}`);
}