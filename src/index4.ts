//ジェネティクス
//ジェネリック型　他の特定の型と結合された型です
//ex) Array<string>
const names: Array<string> = []; //string[]

//最終的に返すデータの型を指定することで、TypeScriptの恩恵をもらえる
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("終わりました");
  }, 2000);
});

//返却値をstringで型指定しているので、split()が使用できる
promise.then((data) => {
  data.split("");
});

//型を限定してくないときに使用する。TとUが別の型であることを伝える
//関数を呼び出したときに動的に決まる
//extendsで制約をつける
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
//developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//引数は変更可能
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergedObj.age);

//
interface Lengthy {
  length: number;
}

//lengthプロパティがあればどんな引数でも良い。
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません。";
  if (element.length > 0) {
    descriptionText = `値は${element.length}個です。`;
  }
  return [element, descriptionText];
}

//keyof
console.log(countAndDescribe("お疲れ様です。"));
console.log(countAndDescribe(["Sports"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value is ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Max" }, "name"));

//Genericクラス
//クラス全体をどれかの型に統一したいときに使う
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Data1");
textStorage.addItem("Data2");
textStorage.removeItem("Data1");
console.log(textStorage.getItems());

//Partial
//プロパティはオプショナルにできる
interface Todo {
  title: string;
  description: string;
}

//interfaceの一部の型を利用
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

console.log(updateTodo(todo1, todo2));

//Readonly
interface Movie {
  title: string;
}

const movie: Readonly<Movie> = {
  title: "Movie1",
};

//新しい値を代入できない
//todo.title = "Movie2";
