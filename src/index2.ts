//関数の型
//型推論しているから関数の型を指定しなくてもいい
function add3(n1: number, n2: number): number {
  return n1 + n2;
}

//値を返さない場合はvoid（return文ない場合）
//undefinedを返す
function printCalculatedResult(num: number): void {
  console.log("Result is " + num);
}

printCalculatedResult(add3(1, 2));

//関数の型を指定
let combineValues: (a: number, b: number) => number;

combineValues = add3;
//関数の型が一致しない
//combineValues = printCalculatedResult;
console.log(combineValues(1, 3));

//コールバック関数
function addAndHandle(n1: number, n2: number, cd: (num: number) => void) {
  const result = n1 + n2;
  cd(result);
}

addAndHandle(3, 5, (result) => {
  console.log(result);
  return result;
  //値を返していようが返していまいが特に影響がない
  //戻り値には厳密でない
});

//unknown型
//どのような型になるかわからない
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  //userInputがstringかどうかチェックする必要がある
  userName = userInput;
}

//never型
//値を絶対返すことがない
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
const errorResult = generateError("エラーが発生しました", 500);

console.log(errorResult);
