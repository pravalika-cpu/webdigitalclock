var date=new Date();
var daysInWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturay"]
var day=date.getDay()
var today=daysInWeek[day]
var hours=date.getHours();
var minutes=date.getMinutes();
document.getElementById("dateAndTime").innerText='${today} ${hours};${minutes}'


