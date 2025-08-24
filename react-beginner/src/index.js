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
const myProfile = ["じゃけえ", 31];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// 配列にはプロパティ名がないので、適当な変数名をつける
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`
console.log(message4);

