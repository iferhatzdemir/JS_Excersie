const { Console } = require('console');

let questionfornumber1;
let inputParameter;
function squareNumber(inputNumber){
   let sqrtNumber=Math.pow(inputNumber,2);
    console.log(`The result of squaring the number ${inputNumber} is ${sqrtNumber}.`)
}

//squareNumber(2);

function halfNumber(inputNumber){
    let halfNumber=inputNumber/2;
    console.log(`Half of ${inputNumber} in ${halfNumber.toFixed(1)}`) // to fixed  virgülden 2 basamak haline getiriyor
}
//halfNumber(17.3);

function percentOf(inputNumber1,inputNumber2){
   let percentOf=(inputNumber1/inputNumber2)*100;
   if(percentOf>100){console.log(`${inputNumber1} is ${percentOf.toFixed(2)}% of ${inputNumber2}. ${inputNumber1} is gratter than ${inputNumber2}`)}
   else{
       console.log(`${inputNumber1} is ${percentOf.toFixed(2)}% of ${inputNumber2}. ${inputNumber2} is gratter than ${inputNumber1}`)

   }
}
//percentOf(8,4)

function areaOfCircle(radius){
   let areaOfCircle= Math.PI*Math.pow(radius,2);
   console.log(`The area for a circle with radius ${radius} is ${areaOfCircle.toFixed(2)}`);
}
//areaOfCircle(12.32)

function readQuestionInput(question){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question(question, input => {
        Calculater(input)
        readline.close();
      });
}

let question=`1-square that number
2-half that number
3-percent the first number represents of the second number
4-calculate the area based on that


`;
readQuestionInput(question);





function readParametreInput(question){
    const readline1 = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      readline1.question(question, input1 => {
        console.log(input1);
        readline1.close();
      });
}
function Calculater(input){

   if(input>0 && input<5){
       if(input==1){
           questionfornumber1='----Enter the number you want to square----\n';
          inputParameter= readParametreInput(questionfornumber1);
          /*inputParameter=parseInt(inputParameter);
          console.log(readParametreInput(questionfornumber1));
          squareNumber(inputParameter);*/
          console.log(inputParameter);
       }
       else if(input==2){}
       else if(input==3){}
       else if(input==4){}
       

   }else{console.log('Plase, Enter between 0 and 5')}
}







