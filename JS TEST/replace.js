const str = "Twas the night before Xmas...";

const result = str.replace(/mas/i, r => r.toUpperCase())
console.log(result) // Twas the night before XMAS... 