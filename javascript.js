
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
if (speed<=30) {
    console.log('Вы едете слишком медленно')
    } else if (speed<=70){
    console.log('Вы едете с нормальной скоростью')
    } else {
    console.log('Вы едете слишком быстро, сбавьте скорость')
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

 //Практическое задание 5.1
 let result=0;
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
for (let i=word.length-1; i>=0; i--){

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

