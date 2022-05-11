"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("終わりました");
    }, 2000);
});
promise.then((data) => {
    data.split("");
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = "値がありません。";
    if (element.length > 0) {
        descriptionText = `値は${element.length}個です。`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("お疲れ様です。"));
console.log(countAndDescribe(["Sports"]));
function extractAndConvert(obj, key) {
    return `Value is ${obj[key]}`;
}
console.log(extractAndConvert({ name: "Max" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Data1");
textStorage.addItem("Data2");
textStorage.removeItem("Data1");
console.log(textStorage.getItems());
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
console.log(updateTodo(todo1, todo2));
const movie = {
    title: "Movie1",
};
//# sourceMappingURL=index4.js.map