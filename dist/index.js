"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        return phrase + result;
    }
    else {
        return result;
    }
}
function add2(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("入力値が正しくありません。");
    }
    return n1 + n2;
}
const number1 = 5;
const number2 = 3;
const printResult = true;
const resultPhrase = "Result is ";
let result;
console.log(result);
result = add(number1, number2, printResult, resultPhrase);
console.log(result);
const person = {
    name: "taro",
    age: 30,
};
const capitals = {
    Japan: "Tokyo",
    Korea: "Seoul",
    1: 1,
    2: "test",
};
capitals.China = "Beijing";
console.log(capitals);
const person1 = {
    name: "taro",
    age: 30,
    hobbies: ["Sports", "Cooking"],
};
let favoriteActivities;
favoriteActivities = ["Sports"];
for (const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase());
}
const person2 = {
    name: "taro",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
const friends = ["Taro", "Kazuki", "Jiro"];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person3 = {
    name: "taro",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
if (person3.role === Role.ADMIN) {
    console.log("管理者ユーザー");
    console.log(Role.ADMIN);
}
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAge = combine(30, 26, "as-number");
console.log(combineAge);
const combineName = combine("taro", "anna", "as-text");
console.log(combineName);
console.log("========関数========");
//# sourceMappingURL=index.js.map