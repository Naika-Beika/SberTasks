
//Практическое задание 3.1
console.log(`${word_1} ${word_2}`);

//Практическое задание 3.2
console.log((name.trim()+last_name.trim()).length)

//Практическое задание 3.3
console.log(word[0].toLocaleUpperCase());

//Практическое задание 3.4
console.log(Math.trunc(Math.sqrt(Math.ceil(value)+Math.floor(value)+Math.round(value))));

//Практическое задание 3.5
console.log((a*b)**2); //v1
console.log(Math.pow((a*b),2)); //v2

//Практическое задание 3.6
console.log(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)));

//Практическое задание 3.7
console.log("Имя: \"" + obj.name + "\" Фамилия: '" + obj.last_name + "' Возраст: " + obj.age);

//Практическое задание 3.8
console.log({name, last_name, age});

//Практическое задание 3.9
console.log(typeof value==="object" && value===null?"null":typeof value); //v1
if (typeof value==="object" && value===null){
    console.log("null");
 }else{
    console.log(typeof value)
 } //v2

//Практическое задание 3.10
console.log(Number(num_1)+Number(num_2));

//Практическое задание 3.11
console.log(parseFloat(size));

//Практическое задание 3.12
console.log(parseFloat(a)*parseFloat(b)*parseFloat(c));

//Практическое задание 4.1
if (speed <= 30) {
    console.log('Вы едете слишком медленно')
    } else if (speed > 70){
    console.log('Вы едете слишком быстро, сбавьте скорость')
    } else {
    console.log('Вы едете с нормальной скоростью')
    }

//Практическое задание 4.2
price=parseInt(price);
if (isNaN(price)){
   console.log("Не число");
}else if (price<=0){
   console.log("Число не корректное");
}else{
   console.log(price);
}    

//Практическое задание 4.3
if (a>b, a>c){
   console.log(a);
 } else if(b>a, b>c){
   console.log(b);
 } else{
   console.log(c);
 }

//Практическое задание 4.4
 let activity;
if (temp >= 25 && weather === "clear"){
  activity="golf";
} else if(temp >= 10 && temp <= 24 && weather === "clear"){
  activity="bowling";
} else{
  activity="hiking";
}

//Практическое задание 4.5
 console.log(word_1.length>word_2.length ? word_1 : word_2);

//Практическое задание 4.6
 switch (task) {
   case task="удалить":
    console.log("delete");
  break;
   case task="переименовать":
    console.log("rename");
  break;
   case task="редактировать":
    console.log("edit");
  break;
  }

  //Практическое задание 4.7
switch(range){
  case"month":
     console.log(`${price} Р в месяц`);
     break;
  case"day":
     console.log(`${price} Р в день`);
     break;
  case"week":
     console.log(`${price} Р в неделю`);
     break;
 }

 //Практическое задание 4.8
 switch (sign){
  case "+":
    console.log(a + b);
      break;
  case "-":
    console.log(a - b);
      break;
  case "*":
    console.log(a * b);
      break;
  case "/":
    console.log(a / b);
      break;
}

 //Практическое задание 4.9
switch (sign){
  case "+":
    console.log(a+b);
      break;
  case "-":
    console.log(a-b);
      break;
  case "*":
    console.log(a*b);
      break;
  case "/":
    if (!b) {
    console.log("Делить на 0 нельзя!");
    }else{
    console.log(a/b);
    }  
    break;
}

 //Практическое задание 5.1
 result=0;
 while(start <= end){
   if(start % 5 ===0){
   result = result + start;
 }
 start++;
 }
 console.log(result)

//Практическое задание 5.2
 let reverse = "";

for(let index= word.length-1; index>=0; index--){
reverse += word[index];
}
console.log(reverse);

//Практическое задание 5.3
reverse = "";
for (let i = word.length-1; i >= 0; i--){

reverse += word[i].toLowerCase();
}
console.log(word.toLowerCase() === reverse ? "Слово является палиндромом!" : "Слово не является палиндромом!");

 //Практическое задание 6.1
  function priceMessage(price){
   console.log(`Данный товар стоит ${price} рублей`);
 }
 priceMessage(price);

 //Практическое задание 6.2
 function mult (num_1, num_2){
  console.log(num_1*num_2);
}
mult(num_1, num_2);

//Практическое задание 6.3
function square(){
  return num**2;
}

//Практическое задание 6.4
function getSquares(n, cnt = 3) {
  let result = n;
  let str = "";
  while(cnt) {
      result = result ** 2;
      if (cnt !== 1) {
          str += result + " ";
      } else {
          str += result;
      }
      cnt--;
  }
  return str;
}
console.log(getSquares(num));

//Практическое задание 6.5
function getNumber(d){
  let n = parseFloat(d);
  if (isNaN(n)){
    return 0;
  }else{
    return n;
  }
}
console.log(getNumber(data));

 //Практическое задание 6.6
function getPercent(n, per){
  return (per * 100) / n;
 }
 console.log(getPercent(total, value));

//Практическое задание 9.1
list.unshift('Яблоко');
list.pop();
list.push('Клубника');
console.log(list);

//Практическое задание 9.2
result = "";
 for (let i = 0; i < list.length; i++){
   if(list[i].length > result.length){
    result = list[i];
  }
}
console.log(result);

//Практическое задание 9.3
let sum = 0;
console.log("for");
for (let i = 0; i < list.length; i++) {
    sum += list[i];
}
console.log(sum);

//Практическое задание 9.4
let arr = [];
for (let el of list_1){
  arr.push(el ** 2);
}
for (let el of list_2){
  arr.push(el ** 2);
}
console.log(arr);

//Практическое задание 9.5
sum = 0;
for (let el of list){
  if (el > 0){
  sum += el;
}
}
console.log(sum);

//Практическое задание 9.7
let max = -Infinity;
let min = Infinity;
for (let el of list) {
    max = Math.max(max, el);
    min = Math.min(min, el);
}
console.log(max * min);

//Практическое задание 9.8
result = [];
for (let i = list.length - 1; i>=0; i--){
  result.push(list[i]);
}
console.log(result);

//Практическое задание 9.10
function count(arr){
  let cnt = 0;
  for (let n of arr){
    if (n % 2 === 0){
      cnt++;
    }
  }
  return cnt;
}
console.log(count(list));

//Практическое задание 9.11
function average (list){
  let s = 0;
  for (let i = 0; i < list.length; i++){
    s += list [i];
  }
 let result = Math.round(s/list.length);
 return result
}
console.log(average (list));

//Практическое задание 9.12
sum = 0;
for (let i = 0; i < list.length; i++){
  if (typeof list[i] === "boolean"){
    break;
  }
sum += list[i];
}
console.log(sum);

//Практическое задание 9.13
let list = [];
for (let i = 10; i<= 20; i++){
  list.push(i);
}
console.log(list);

//Практическое задание 9.14
let numbers_list = [];
for (let i = 0; i < list.length; i++){
  if (list[i] === false){
    break;
  }
  if (typeof list[i] === "number"){
    numbers_list.push(list[i]);
  }
}
console.log(numbers_list);

//Практическое задание 9.15
let cnt = 0;
for (let val of list){
  if (val.toLowerCase() !== "default"){
  cnt++;
  }
}
console.log(cnt);

//Практическое задание 9.18
max = 0;
let word = "";
for (let i = 0; i < list.length; i++) {
    if (list[i].price > max) {
        word = list[i].product;
        max = list[i].price;
    }
}
console.log(word);