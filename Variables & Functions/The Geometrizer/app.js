let radius=-1;
let PI=Math.PI;
//console.log(PI);
function circumference(radius){

    let Circumference=2*PI*radius;
    return Math.trunc(Circumference);
}
function areaCalculate(radius){
let circuleArea=PI*Math.pow(radius,2);

return Math.trunc(circuleArea);
}
if(radius>0){
    console.log(`The circumference is ${circumference(radius)}`);
    console.log(`The area is ${areaCalculate(radius)}`);
}else{
    console.log('Radius must be greater than zero!!!');
}