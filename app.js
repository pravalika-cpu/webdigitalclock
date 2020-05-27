var date=new Date();
var daysInWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturay"]
var day=date.getDay()
var today=daysInWeek[day]
var hours=date.getHours();
var minutes=date.getMinutes();
document.getElementById("dateAndTime").innerText=`${day} ${today} ${hours}:${minutes}`;
var WeatherInCities=[   
{city:"hyderabad,telangana",climaticCondition:"sunny",temperature:45},
{city:"Bhopal,madhayapradesh",climaticcondition:"sunny",temperature:40},
{city:"Imphal,manipur",climaticCondtion:"cloudy",temperature:15},
{city:"kohima,nagaland",climaticCondition:"humid",temperature:22}
{city:"agarthala,tripura",climaticCondtion:"humid",temperature:20}
]


function getWeather(){
    var list=document.getElementById("list")
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
    })
    document.getElementById("climate").innerText= weatherInSelectedCity.climateCondition;
    document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
    document.getElementById("city").innerText=selectedCityFromList;
}
function getFahrenheit(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=(weatherInSelectedCity.temperature*9/5)+32;
}
function getCelsius(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
}