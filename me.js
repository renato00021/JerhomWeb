function ggInput() {
    const inputDate= document.getElementById('input').value
    const day= new Date(inputDate)
    const today= day.getDay()

let dayValue=""
switch(today){
case 0:
    dayValue="Sunday"
break;

case 1:
    dayValue= "Monday"
break;

case 2:
    dayValue= "Tuesday"
break;

case 3:
    dayValue="Wednesday"
break;

case 4:
    dayValue="Thursday"
break;

case 5:
    dayValue="Friday"
break;

case 6:
    dayValue="Saturday"
break;
}

document.getElementById("result").innerHTML = dayValue
}

function newFunction(input) {
    document.getElementById('myId').innerText += input;
}

function calculateResult() {
    var expression = document.getElementById('myId').innerText;
    try {
        var result = eval(expression); // Evaluate the mathematical expression
        document.getElementById('myId').innerText = result;
    } catch (error) {
        document.getElementById('myId').innerText = 'Error';
    }
}

AOS.init({
    duration: 1200, // Animation duration (in milliseconds)
    once: true, // Whether animation should happen only once while scrolling
}); 
  
  