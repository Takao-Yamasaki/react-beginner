/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書きが可能
// val1 = "val変数を上書き";
// console.log(val1);

// // var変数は再宣言が可能
// var val1 = "val変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// // Uncaught SyntaxError: Identifier 'val2' has already been declaredとエラーになる
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// Uncaught SyntaxError: Identifier 'val3' has already been declared とエラーになる
// const val3 = "const変数を上書き";
// console.log(val3);

// const変数は再宣言不可
// Uncaught SyntaxError: Identifier 'val3' has already been declaredとエラーになる
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけえ",
//   age: 31
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義したオブジェクトはプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけえ";
// const age = 31;

// 私の名前はじゃけえです。年齢は31歳です。

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// };
// const func1 = function(str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };

// 引数が1つの場合は()を省略することも可能
// const func2 = str => {
//   return str;
// };

// 単一式を返却する場合はreturnと{}を省略可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// 単一式を返却する場合は省略可能
// const func3 = (num1, num2) => num1 + num2;

// オブジェクトを返す場合も省略可能
// {name: 10, age: 20}
// const func3 = (num1, num2) => ({
//   name: num1,
//   age: num2,
// });
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// オブジェクトの分割代入
// const myProfile = {
//   name: "じゃけえ",
//   age: 31
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// 配列の分割代入
// const myProfile = ["じゃけえ", 31];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// 配列にはプロパティ名がないので、適当な変数名をつける
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);

/**
 * デフォルト値(引数, 分割代入)
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();
// sayHello("じゃけえ");

// const myProfile = {
//   age: 31
// };
// const {age, name = "ゲスト"} = myProfile;
// // 31
// console.log(age);
// // ゲスト
// console.log(name);

/**
 * オブジェクトの省略記法
 */
// const name = "じゃけえ"
// const age = 31;

// プロパティ名と変数名が同一の場合は省略可能
// const myProfile = {
//   name,
//   age
// };
// console.log(myProfile);

/**
 * スプレッド構文...
 */
// 配列の展開
// const arr1 = [1, 2];
// (2) [1, 2]
// console.log(arr1);
// 1 2
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// 配列をまとめて受け取る
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー・結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// この書き方だと破壊的変更になってしまう
// const arr8 = arr4;
// arr4[0] = 100;
// console.log(arr4);
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// 配列から順番に取り出して出力する
// nameArr.map((name) => {
//   console.log(name);
// });

// 配列から順番に取り出して新しい配列として定義する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// ワンラインで記載することも可能
// nameArr.map((name) => console.log(name));

// このようにindexを取得することも可能
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));


// 配列から特定の条件に合致するもののみ取り出したい
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// じゃけえ以外の人には語尾に「さん」を付けて新しい配列を定義する
// これは誤り。
// const newNameArr = nameArr.filter((name) => {
//   if (name != "じゃけえ") {
//     const str = name + "さん";
//     return str;
//   }
// });
// console.log(newNameArr);

// 新しく要素を付けていくので、mapが適切
// const newNameArr = nameArr.map((name) => {
//   if (name != "じゃけえ") {
//     return `${name}さん`;
//   }
//   return name;
// });
// console.log(newNameArr);

/**
 * 三項演算子
 * ある条件 ? 条件がtrueの場合の処理 : 条件がfalseの場合の処理
 */
// const val1 = 1 > 2 ? "trueです" : "falseです";
// console.log(val1);

const num = 1300;
// console.log(num.toLocaleString());

// 文字列であれば、数値を入力してくださいと出力される
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
}
console.log(checkSum(60, 50));
