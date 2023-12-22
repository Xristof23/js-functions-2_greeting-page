console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

const time = new Date().getHours();

console.log(time);

function getGreeting(time) {
  if (time > 5 && time <= 12) {
    return "Good Morning";
  } else if (time > 12 && time <= 18) {
    return "Good Afternoon";
  } else if (time > 18 && time < 23) {
    return "Good Evening";
  } else if ((time > 22 && time < 25) || time <= 5) {
    return "Good Night";
  } else {
    return "What time is it?";
  }
}
console.log(getGreeting(time));

const weekDay = new Date().getDay();
console.log(weekDay);
function getDayColor(weekDay) {
  if (weekDay === 1) {
    console.log("just another manic monday");
    return "darkgray";
  } else if (weekDay <= 4) {
    console.log("tuesday wednesday thursday");
    return "lightblue";
  } else if (weekDay === 5) {
    console.log("Thank god it's friday");
    return "lightblue";
  } else {
    console.log("Hoch die Hände Wochenende");
    return "hotpink";
  }
}

display.textContent = getGreeting(11);
document.body.style.backgroundColor = getDayColor(weekDay);
