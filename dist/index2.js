"use strict";
function add3(n1, n2) {
    return n1 + n2;
}
function printCalculatedResult(num) {
    console.log("Result is " + num);
}
printCalculatedResult(add3(1, 2));
let combineValues;
combineValues = add3;
console.log(combineValues(1, 3));
function addAndHandle(n1, n2, cd) {
    const result = n1 + n2;
    cd(result);
}
addAndHandle(3, 5, (result) => {
    console.log(result);
});
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const errorResult = generateError("エラーが発生しました", 500);
console.log(errorResult);
//# sourceMappingURL=index2.js.map