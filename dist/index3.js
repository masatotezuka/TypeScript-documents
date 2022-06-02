"use strict";
function add4(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const e1 = {
    name: "max",
    name1: "test",
    privileges: ["create-server"],
    startDate: new Date(),
};
class Car {
    drive() {
        console.log("車を運転中...");
    }
}
class Truck {
    drive() {
        console.log("トラックを運転中...");
    }
    loadCargo(amount) {
        console.log("荷物を載せています..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log(animal.type + "移動のスピード:" + speed);
}
const userInputElement = document.getElementById("user-input");
userInputElement.value = "こんにちは";
function add5(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result2 = add5("Hello", "TypeScript");
result2.split("");
console.log(result2);
const fetchedUserData = {
    id: "u1",
    name: "user1",
};
const userInput2 = undefined;
const storedData = userInput2 !== null && userInput2 !== void 0 ? userInput2 : "DEFAULT";
console.log(storedData);
//# sourceMappingURL=index3.js.map