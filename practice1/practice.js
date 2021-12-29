
//---Практика 1

/* // const camelCase = 0;
const snake_case = 1;
const PascalCase = 2;
alert(camelCase); // alert выводить цыфри в форме всплывающего окна,
                  //а консоль лог выводить данные в консоле и их выдно, если зайти в консоль браузера
alert(snake_case);
alert(PascalCase);
console.log(camelCase);
console.log(snake_case);
console.log(PascalCase); // */
 
//---Практика 2 
/* let str = 'HTML';
console.log(str.toLowerCase()); */

//---Практика 3
/* const name = prompt("Ваше имя?");
alert(`Ваше имя ${name}`); */

//---Практика 4
/*let arr = ['Саша', 'Петя', 'Оксана']; */
/* // 1 метод с изминением масива
arr.reverse();
arr[1] = "Олег";
console.log(arr);
 */
// 2 метод
/* let newArr = arr.slice();
newArr.reverse().splice(1,1, "Олег");
console.log(newArr); */

//---Практика 5
/* const first = prompt("Введите первое число");
const second = prompt("Введите первое число");
if(first > second) alert(Number(first) + Number(second));
if(first < second) alert(Number(first) * Number(second));
else alert("числа одинаковые"); */

//---Практика 6
/* arr = [10, 20, 30, 50, 235, 3000];
let result =[];
for(let i=0; i < arr.length; i++){
if(arr[i].toString()[0] === "1") result.push(arr[i].toString());
if(arr[i].toString()[0] === "2") result.push(arr[i].toString());
if(arr[i].toString()[0] === "5") result.push(arr[i].toString());
else "non numbers"; 
}
console.log(result.map(Number)); */

//---Практика 7
/* let weight = prompt("Какой у вас вес?")
let recommendation ="";
if(weight < 4) console.log(recommendation = "Пора перекусить");
if(weight <= 5.5) console.log(recommendation = "Вес в норме");
else console.log(recommendation = "Пора на тренировку");
 */

//---Практика 8
/* const gradExam = prompt("Ведите оценку за экзамен");
const numberProject = prompt("Ведите количество выполненых проэктов");
function finalGrade(gradExam, numberProject) {
if(gradExam> 90 || numberProject > 10) return("Ваша оценка: 100");
if(gradExam> 75 || numberProject >= 5) return("Ваша оценка: 90");
if(gradExam> 50 || numberProject >= 2) return("Ваша оценка: 75");
else return("Ваша оценка: 0");
}
console.log(finalGrade(gradExam, numberProject)); */

//---Практика 9
/* function multiplying(arr){
let result = arr.reduce((prev,current)=> prev*current);
return result;
}
console.log(multiplying([1,2,3,4,5,6])); */

//---Практика 10
/* function checkName(arr){
const unwantedNames = ["Дима", "Саша", "Ольга", "Никита"];
return arr.filter(name=>!unwantedNames.includes(name));
}
console.log(checkName(['Никита', 'Саша', 'Анастасия', 'Дима', 'Саныч', 'Ольга'])); */

//---Практика 11
/* function substraction(arr1, arr2){
let result
return result = arr1.reduce((a,b)=> a * b) - arr2.reduce((a,b)=> a * b);
}
console.log(substraction([3, 2, 5], [1, 4, 4])); */

//---Практика 12
/* function between(a, b) {
    let result =[a,];
while(a < b){
   ++a
    result.push(a)
}
return result;
}
console.log(between(5,15)) */

//---Практика 13
/* function hexToDec(str) {
    return parseInt(str, 16)
}
console.log(hexToDec('FF')) */

//---Практика 14
function remove(str, number){
    str.split(" ");
    let result =[];
  for(let i = 0; i< str.length; i++){
  if(str[i]!=="!")  result.push(str[i])
   }
   return result
  }
  console.log(remove("!!!Hi !!hi!!! !hi", 5))  