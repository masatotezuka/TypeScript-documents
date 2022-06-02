//型の利用
//パラメータに型を指定する
function add(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): NumberOrString {
  const result = n1 + n2;
  if (showResult) {
    return phrase + result;
  } else {
    return result;
  }
}

//JavaScriptで書く場合
function add2(n1: number, n2: number) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("入力値が正しくありません。");
  }
  return n1 + n2;
}

//基本的に自動で型推論をするのでアノテーションをしなくてもよい
const number1: number = 5;
const number2 = 3;
const printResult = true;
const resultPhrase = "Result is ";
type NumberOrString = number | string;

let result;
console.log(result);

result = add(number1, number2, printResult, resultPhrase);
console.log(result);

//Object型の型付け
const person: {
  name: string;
  age: number;
  sex?: string;
} = {
  name: "taro",
  age: 30,
};

//インデックスシグネチャ（インデックス型）
//オブジェクトが複数のプロパティを持つ可能性を示す（あとから、プロパティを追加することが可能）
//[key:T]:Uのように定義する
//keyはstringかnumberのみ
const capitals: {
  [countryName: NumberOrString]: NumberOrString;
} = {
  Japan: "Tokyo",
  Korea: "Seoul",
  1: 1,
  2: "test",
};

capitals.China = "Beijing";
console.log(capitals);

//型推論してくれるのであれば、型付けしなくても良い
//Array型の型付け
const person1 = {
  name: "taro",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
//string型の配列しか代入できない
//favoriteActivities = "Sports";は不可能
favoriteActivities = ["Sports"];

for (const hobby of person1.hobbies) {
  // stringのメソッドのみ利用可能
  console.log(hobby.toUpperCase());
}

//Tuple型（長さ固定の型）
//配列にどんあ値があるべきかを指定できる
//array.push()は可能なことに注意
const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "taro",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

//可変長引数を使用したタプル
const friends: [string, ...string[]] = ["Taro", "Kazuki", "Jiro"];

//Enum
//定数の集合に対して名前をつけることが可能
//数値・文字列の値の設定が可能
enum Role {
  ADMIN, //0
  READ_ONLY, //1
  AUTHOR, //2
}

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

//Union型・・・いずれかの型に指定できる
//Literal型・・・プリミティブ型の特定の値だけを代入可能にする型を表現できる
//エイリアス型・・・型に名前をつけられます
//2つ以上の型をパイプ記号(|)で繋げて書きます
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAge = combine(30, 26, "as-number");
console.log(combineAge);

const combineName = combine("taro", "anna", "as-text");
console.log(combineName);

console.log("========関数========");
