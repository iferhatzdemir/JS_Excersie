let celciusDegree=0;
let fahrenheitDegree=110; 
function convertFahrenheit(celciusDegree){
    celciusDegree=(((celciusDegree/5)*9)+32);
    return celciusDegree;
}
console.log(` ${celciusDegree}°C is ${convertFahrenheit(celciusDegree)}°F`);
function convertCelcius(fahrenheitDegree){
fahrenheitDegree=(((fahrenheitDegree-32)*5)/9);
return fahrenheitDegree;
}
console.log(`${fahrenheitDegree}°F is ${convertCelcius(fahrenheitDegree)}°C'`)