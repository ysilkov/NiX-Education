
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
/* function remove(str, n) {
    return str.replace(/!/g, function (item) {
        if (n > 0) {
            n--;
            return '';
        }
        return item;
    });
}
console.log( remove("!!!Hi !!hi!!! !hi", 5))  */

  //---Практика 15
/* function maxDiff(arr) {
 arr.sort((a,b)=>a-b);
 if(arr.length === 0||arr.length === 1) return 0;
 const min = arr[0];
 const max = arr[arr.length-1]
 const result = max - min;
 return result;
}
  console.log(maxDiff([1,-6])) */

/* //---Практика 16
function returnText(str, number){
    const reg = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    let arr = reg.split(" ");
    return arr.filter((item)=>item.length > number);
  }
  console.log(returnText('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5));
   */
  //---Практика 17
/*   function divisibleByThree(str){
      let arr = str.split("")
      let summNumString = arr.reduce((a,b)=> a + b);
if(Number.isInteger(summNumString/3))  return true;
else return false;
  }

  console.log(divisibleByThree('88')) */

  //---Практика 18
/* function spacey(arr){
    let result = []
    while(arr.length > 0){
        result.

    }
/* 
    for(let i= 0 ; i<arr.length; i++){
result.push(arr[i]+ arr[i+1] + arr[i+2]) */
    
/*     return result 
}
  console.log(spacey(['kevin', 'has','no','space'])) */

  //---Практика 19
/* function evensAndOdds(number){
    if(number%2 ===0) return number.toString(2);
    else return number.toString(16);
}
  console.log(evensAndOdds(13)) */

  //---Практика 20

