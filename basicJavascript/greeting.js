var today = new Date();//creat a new date object
var hourNow = today.getHours();// find the current hour
var greeting;// undefined var so i can define with statements
alert("display the appropriate greeting based on the conrrent time using statements")

//display the appropriate greeting based on the conrrent time using statements
if(hourNow > 18){
    greeting = "good evening";
}else if(hourNow > 12){
    greeting = "good afternoon";
}else if(hourNow > 0){
    greeting = "good morning";
}else{
    greeting = "welcome";
}
document.write(today + greeting);
console.log(greeting) 


