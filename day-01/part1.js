//const text = require("fs").readFileSync("test.txt").toString()
const text = require("fs").readFileSync("input.txt").toString()

let max = 0;
let tmp = 0;

for (const x of text.split("\n")) {
    if (x == "") {
        tmp = 0;
        continue;
    }
    tmp += +x
    if (max < tmp)
        max = tmp
}

console.log(max)
