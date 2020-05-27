var date=new Date();
var daysInWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturay"]
var day=date.getDay()
var today=daysInWeek[day]
var hours=date.getHours();
var minutes=date.getMinutes();
document.getElementById("dateAndTime").innerText=`${today} ${hours}:${minutes}`;
var WeatherInCities=[   
{city:"hyderabad,telangana",climaticCondition:"sunny",temperature:45},
{city:"Bhopal,madhayapradesh",climaticcondition:"sunny",temperature:48},
{city:"Imphal,manipur",climaticCondtion:"cloudy",temperature:15},
{city:"Agartala,tripura",climaticCondition:"sunny",temperature:45},
{city:"Bhopal,madhayapradesh",climaticcondition:"rainy",temperature:22},
{city:"kohima,nagaland",climaticCondtion:"humid",temperature:29}
]


