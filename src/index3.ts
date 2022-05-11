//Interaction型　type = A & B
//Union型　type = A | B
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type StringAndNumber = string | number;
type NumericAndBoolean = number | boolean;
type Universal = StringAndNumber & NumericAndBoolean;
//string | number | boolean;

//タイプガード
//typeof
function add4(a: StringAndNumber, b: StringAndNumber) {
  //string型の値のみにするタイプガード
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//プロパティ in object
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date:" + emp.startDate);
  }
}

const e1: ElevatedEmployee = {
  name: "max",
  privileges: ["create-server"],
  startDate: new Date(),
};

printEmployeeInformation(e1);

//instanceofでタイプガード
//interfaceはJsにはコンパイルできないから使用できない
class Car {
  drive() {
    console.log("車を運転中...");
  }
}

class Truck {
  drive() {
    console.log("トラックを運転中...");
  }
  loadCargo(amount: number) {
    console.log("荷物を載せています..." + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

//判別可能なUnion型
//オブジェクトのUnion型のときに使用するのが便利
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

//型キャスト
//TypeScriptが推論、分析された型は、任意の方法で上書きできます。これは、型アサーション(type assertion)と呼ばれるメカニズムによって行われます。TypeScriptの型アサーションは、純粋にコンパイラよりもその型をより良く理解していることだけでなく、後で推測するべきではないことをコンパイラに伝えています
//TypeScriptはHTMLを解析しない
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")
// )!;

//特定のHTMLしかないプロパティはサポートしていない
//! 絶対にnullでない
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "こんにちは";

//!を使用しない方法
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hello";
// }

//関数オーバーロード
//TypeScriptが正しく戻り値を推論できないときに、引数の型に応じて返り値の型を指定する
function add5(a: string, b: string): string;
function add5(a: StringAndNumber, b: StringAndNumber) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result2 = add5("Hello", "TypeScript");

result2.split("");
console.log(result2);

//オプショナルチェーン ?.
//オブジェクトのプロパティが存在しない場合でも、エラーを起こさずにプロパティを参照できる安全な方法です。

const fetchedUserData = {
  id: "u1",
  name: "user1",
  // job: {
  //   title: "Developer",
  //   description: "TypeScript",
  // },
};

// console.log(fetchedUserData?.job?.title);

//NULL合体演算子
const userInput2 = undefined;
const storedData = userInput2 ?? "DEFAULT";
console.log(storedData);
