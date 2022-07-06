let currentAge=25;
let MaxAge=28;
let dailySnacksCount=2;
function lifeTimeSnacksCount(currentAge,MaxAge,dailySnacksCount){
    let dayConvert=(MaxAge-currentAge)*360;
    dayConvert*=2;
    return dayConvert;
}
if (MaxAge-currentAge>0) {
let snacksCount= lifeTimeSnacksCount(currentAge,MaxAge,dailySnacksCount);
 console.log(`You will need ${MaxAge} to last you until the ripe old age of ${snacksCount}`);
}else{
    console.log('Sorry! You are not living');
}