//const text = require("fs").readFileSync("test.txt").toString()
const text = require("fs").readFileSync("input.txt").toString()

let cal = []
let tmp = 0;

for (const x of text.split("\n")) {
    if (x == "") {
        cal.push(tmp)
        tmp = 0;
        continue;
    }
    tmp += +x
}

console.log(cal.sort((a, b) => b - a).slice(0, 3).reduce((a,b) => a + b, 0))
